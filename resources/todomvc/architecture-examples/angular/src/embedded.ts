import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

const divElement = document.createElement("div");
divElement.className = "todoholder";
const todoArea = document.querySelector(".todo-area");
if (todoArea)
    todoArea.appendChild(divElement);

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
