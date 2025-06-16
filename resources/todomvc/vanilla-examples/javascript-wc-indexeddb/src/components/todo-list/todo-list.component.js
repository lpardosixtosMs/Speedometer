import template from "./todo-list.template.js";
import TodoItem from "../todo-item/todo-item.component.js";

import globalStyles from "../../../node_modules/todomvc-css/dist/global.constructable.js";
import listStyles from "../../../node_modules/todomvc-css/dist/todo-list.constructable.js";

class FixedSizeQueue {
    #buffer;
    #capacity;
    #size = 0;
    #head = 0;
    #tail = 0;

    constructor(capacity = 10) {
        if (capacity <= 0) {
            throw new Error("Queue capacity must be positive");
        }
        this.#capacity = capacity;
        this.#buffer = new Array(capacity);
    }

    /**
     * Add an element to the rear of the queue
     * @param {*} element - Element to add
     * @returns {boolean} - True if element was added, false if queue is full
     */
    enqueue(element) {
        if (this.isFull()) {
            return false;
        }
        
        this.#buffer[this.#tail] = element;
        this.#tail = (this.#tail + 1) % this.#capacity;
        this.#size++;
        return true;
    }

    /**
     * Add multiple elements to the rear of the queue
     * @param {Array} elements - Array of elements to add
     * @returns {number} - The number of elements that were added to the queue
     */
    enqueueAll(elements) {
        // Calculate available space and number of elements we can add
        const availableSpace = this.#capacity - this.#size;
        const elementsToAdd = Math.min(elements.length, availableSpace);
        
        // Add as many elements as will fit
        for (let i = 0; i < elementsToAdd; i++) {
            this.#buffer[this.#tail] = elements[i];
            this.#tail = (this.#tail + 1) % this.#capacity;
            this.#size++;
        }
        
        return elementsToAdd;
    }

    /**
     * Remove and return an element from the front of the queue
     * @returns {*} - The element at the front of the queue, or undefined if empty
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        
        const element = this.#buffer[this.#head];
        this.#buffer[this.#head] = undefined; // Clear reference for GC
        this.#head = (this.#head + 1) % this.#capacity;
        this.#size--;
        return element;
    }

    /**
     * Remove and return multiple elements from the front of the queue
     * @param {number} count - Number of elements to dequeue
     * @returns {Array} - Array of dequeued elements (may be fewer than requested if not enough available)
     */
    dequeueMany(count) {
        if (count <= 0) {
            return [];
        }
        
        const elementsToDequeue = Math.min(count, this.#size);
        const result = new Array(elementsToDequeue);
        
        for (let i = 0; i < elementsToDequeue; i++) {
            result[i] = this.#buffer[this.#head];
            this.#buffer[this.#head] = undefined; // Clear reference for GC
            this.#head = (this.#head + 1) % this.#capacity;
            this.#size--;
        }
        
        return result;
    }

    /**
     * Return the element at the front of the queue without removing it
     * @returns {*} - The element at the front of the queue, or undefined if empty
     */
    peek() {
        return this.isEmpty() ? undefined : this.#buffer[this.#head];
    }

    /**
     * Check if the queue is empty
     * @returns {boolean} - True if queue is empty
     */
    isEmpty() {
        return this.#size === 0;
    }

    /**
     * Check if the queue is full
     * @returns {boolean} - True if queue is full
     */
    isFull() {
        return this.#size === this.#capacity;
    }

    /**
     * Get the current number of elements in the queue
     * @returns {number} - Current size of the queue
     */
    size() {
        return this.#size;
    }

    /**
     * Get the maximum capacity of the queue
     * @returns {number} - Maximum capacity of the queue
     */
    capacity() {
        return this.#capacity;
    }

    /**
     * Clear all elements from the queue
     */
    clear() {
        this.#buffer.fill(undefined);
        this.#size = 0;
        this.#head = 0;
        this.#tail = 0;
    }

    /**
     * Convert queue to array (for debugging/testing purposes)
     * @returns {Array} - Array representation of queue elements in order
     */
    toArray() {
        const result = new Array(this.#size);
        for (let i = 0; i < this.#size; i++) {
            result[i] = this.#buffer[(this.#head + i) % this.#capacity];
        }
        return result;
    }
}


class MemoryCacheManager {

    #cacheMaxSize = 10;
    // before cache will be used to populate whole pages of items.
    #beforeCache = new Array();

    // after cache will be used to load the next item in the list, we need fifo access.
    #afterCache = new FixedSizeQueue(10);

    constructor() {
        this.currentId = -1;
        this.cacheMaxSize = 10;
    }

    shouldAddToAfterCache() {
        return !this.#afterCache.isFull();
    }


    addToAfterCache(element) {
        if (this.#afterCache.isFull()) {
            throw new Error("After cache is full, cannot add more items.");
        }
        this.#afterCache.enqueue(element);
    }
    
    /**
     * Add multiple elements to the forward cache
     * @param {Array} elements - Array of elements to add to the forward cache
     * @returns {number} - The number of elements that were added to the cache
     */
    addMultipleToAfterCache(elements) {
        return this.#afterCache.enqueueAll(elements);
    }

    nextFromAfterCache() {
        const result = this.#afterCache.dequeue();
        return result !== undefined ? result : null;
    }
    
    getFromBeforeCache(numberOfItems) {
        if (numberOfItems > this.#beforeCache.length) {
            throw new Error("Not enough items in before cache to return.");
        }
        return this.#beforeCache.splice(this.#beforeCache.length - numberOfItems, numberOfItems);
    }

    addToBeforeCache(elements) {
        if (elements.length + this.#beforeCache.length > this.#cacheMaxSize) {
            throw new Error("Before cache is full, cannot add more items.");
        }
        this.#beforeCache.push(...elements);
    }
}

/**
 * Database manager for Todo items using IndexedDB
 */
class TodoDatabase {
    #db;
    #dbName;
    #dbVersion;
    #storeName = 'todos';
    #dbReadyCallback;
    #numberOfPendingAddRequests = 0;
    #numberOfPendingRemoveRequests = 0;

    /**
     * Creates a new TodoDatabase instance
     * @param {string} dbName - The name of the IndexedDB database
     * @param {number} dbVersion - The version of the database
     * @param {Function} readyCallback - Callback to invoke when the database is ready
     */
    constructor(dbName = 'todosDB', dbVersion = 1, readyCallback = null) {
        this.#dbName = dbName;
        this.#dbVersion = dbVersion;
        this.#dbReadyCallback = readyCallback;
        this.initialize();
    }

    /**
     * Initializes the IndexedDB database for storing todo items
     */
    initialize() {
        // Open the database connection
        const request = indexedDB.open(this.#dbName, this.#dbVersion);
        
        // Handle database upgrade or creation
        request.onupgradeneeded = (event) => {
            this.#db = event.target.result;
            
            // Create an object store for our todos if it doesn't exist
            if (!this.#db.objectStoreNames.contains(this.#storeName)) {
                const todoStore = this.#db.createObjectStore(this.#storeName, { keyPath: 'id', autoIncrement: true });
                
                // Create indexes for quick searches.
                todoStore.createIndex('itemId', 'itemId', { unique: true });
                todoStore.createIndex('completed', 'completed', { unique: false });
                todoStore.createIndex('title', 'title', { unique: false });
                todoStore.createIndex('priority', 'priority', { unique: false });
            }
        };
        
        // Handle successful database opening
        request.onsuccess = (event) => {
            this.#db = event.target.result;
            console.log('IndexedDB initialized successfully');
            
            // Call ready callback if provided
            if (this.#dbReadyCallback) {
                this.#dbReadyCallback();
            }
        };
        
        // Handle errors
        request.onerror = (event) => {
            console.error('Error opening IndexedDB:', event.target.error);
        };
    }

    /**
     * Gets the database instance
     * @returns {IDBDatabase} The IndexedDB database instance
     */
    get database() {
        return this.#db;
    }
    
    /**
     * Adds a todo item to the database
     * @param {Object} item - The todo item to add
     * @returns {Promise<number>} A promise that resolves to the ID of the added item
     */
    addItem(item) {
        return new Promise((resolve, reject) => {
            if (!this.#db) {
                reject(new Error("Database not initialized"));
                return;
            }
            
            try {
                const transaction = this.#db.transaction(this.#storeName, 'readwrite');
                const store = transaction.objectStore(this.#storeName);
                
                const request = store.add(item);

                this.#numberOfPendingAddRequests++;
                
                request.onsuccess = (event) => {
                    this.#numberOfPendingAddRequests--;
                    console.log("Item added to database:", event.target.result);
                    resolve(event.target.result); // Return the generated ID
                };
                
                request.onerror = (event) => {
                    reject(event.target.error);
                };
            } catch (error) {
                reject(error);
            }
        });
    }
}

class TodoList extends HTMLElement {
    static get observedAttributes() {
        return ["total-items"];
    }

    #elements = [];
    #route = undefined;
    #onScreenMaxNumberOfItems = 10;
    #memoryCacheManager = new MemoryCacheManager();
    #todoDatabase;
    #dbItemId = 0;

    constructor() {
        super();
        const node = document.importNode(template.content, true);
        this.listNode = node.querySelector(".todo-list");

        this.shadow = this.attachShadow({ mode: "open" });
        this.htmlDirection = document.dir || "ltr";
        this.setAttribute("dir", this.htmlDirection);
        this.shadow.adoptedStyleSheets = [globalStyles, listStyles];
        this.shadow.append(node);
        this.classList.add("show-priority");

        if (window.extraTodoListCssToAdopt) {
            let extraAdoptedStyleSheet = new CSSStyleSheet();
            extraAdoptedStyleSheet.replaceSync(window.extraTodoListCssToAdopt);
            this.shadow.adoptedStyleSheets.push(extraAdoptedStyleSheet);
        }
        
        // Initialize TodoDatabase
        this.#initializeDatabase();
    }
    
    /**
     * Initializes the IndexedDB database for storing todo items
     * @private
     */
    #initializeDatabase() {
        // Create a new TodoDatabase instance with a callback for when DB is ready
        this.#todoDatabase = new TodoDatabase('todosDB', 1, () => {
            // Dispatch an event when the database is ready
            this.dispatchEvent(new CustomEvent('db-ready'));
        });
    }
    
    /**
     * Gets the IndexedDB database instance
     * @returns {IDBDatabase} The IndexedDB database instance
     */
    get #db() {
        return this.#todoDatabase?.database;
    }

    /**
     * Adds a todo item based on available space in different storage tiers
     * @param {Object} entry - The todo item entry
     */
    addItem(entry) {
        const { id, title, completed } = entry;
        const priority = 4 - (this.#elements.length % 5);
        
        // Case 1: If there's space in the on-screen list, add it there
        if (this.#elements.length < this.#onScreenMaxNumberOfItems) {
            // Create element and add to on-screen list
            const element = new TodoItem();
            element.setAttribute("itemid", id);
            element.setAttribute("itemtitle", title);
            element.setAttribute("itemcompleted", completed);
            element.setAttribute("data-priority", priority);
            
            this.#elements.push(element);
            this.listNode.append(element);
            this.updateView(element);
        }
        // Case 2: If there's space in the memory cache, create element and add to cache
        else if (this.#memoryCacheManager.shouldAddToAfterCache()) {
            const element = new TodoItem();
            element.setAttribute("itemid", id);
            element.setAttribute("itemtitle", title);
            element.setAttribute("itemcompleted", completed);
            element.setAttribute("data-priority", priority);
            
            // Add the element to the memory cache
            this.#memoryCacheManager.addToAfterCache(element);
        }
        // Case 3: Add to IndexedDB as last resort
        else {
            this.#addItemToDatabase(entry, priority);
        }
    }
    
    /**
     * Helper method to add an item to the IndexedDB database
     * @private
     */
    #addItemToDatabase(entry, priority) {
        const { id, title, completed } = entry;
        const todoItem = {
            itemId: id,
            title,
            completed,
            priority,
            createdAt: Date.now()
        };
        
        this.#todoDatabase.addItem(todoItem)
            .then(() => {
                // Item successfully added to database
            })
            .catch(error => {
                console.error("Failed to add item to database:", error);
            });
    }

    addItems(items) {
        items.forEach((entry) => this.addItem(entry));
    }

    removeCompletedItems() {
        this.#elements = this.#elements.filter((element) => {
            if (element.itemcompleted === "true")
                element.removeItem();

            return element.itemcompleted === "false";
        });
    }

    toggleItems(completed) {
        this.#elements.forEach((element) => {
            if (completed && element.itemcompleted === "false")
                element.toggleInput.click();
            else if (!completed && element.itemcompleted === "true")
                element.toggleInput.click();
        });
    }

    updateStyles() {
        if (parseInt(this["total-items"]) !== 0)
            this.listNode.style.display = "block";
        else
            this.listNode.style.display = "none";
    }

    updateView(element) {
        switch (this.#route) {
            case "completed":
                element.style.display = element.itemcompleted === "true" ? "block" : "none";
                break;
            case "active":
                element.style.display = element.itemcompleted === "true" ? "none" : "block";
                break;
            default:
                element.style.display = "block";
        }
    }

    updateElements(type = "", id = "") {
        switch (type) {
            case "route-change":
                this.#elements.forEach((element) => this.updateView(element));
                break;
            case "toggle-item":
            case "add-item":
                this.#elements.forEach((element) => {
                    if (element.itemid === id)
                        this.updateView(element);
                });
                break;
            case "remove-item":
                this.#elements = this.#elements.filter((element) => element.itemid !== id);
                break;
        }
    }

    updateRoute(route) {
        this.#route = route;
        this.updateElements("route-change");
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue)
            return;
        this[property] = newValue;
        if (this.isConnected)
            this.updateStyles();
    }

    connectedCallback() {
        this.updateStyles();
    }
}

customElements.define("todo-list", TodoList);

export default TodoList;
