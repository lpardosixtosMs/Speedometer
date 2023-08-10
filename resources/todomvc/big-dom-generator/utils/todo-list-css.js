const additionalTodoListStyleSheet = new CSSStyleSheet();
additionalTodoListStyleSheet.replaceSync(`:host(.show-priority) {
    --complex-border-bottom-color-default: #ededed;
    --complex-border-bottom-color-0: #d7ffd7;
    --complex-border-bottom-color-1: #ffd7d7;

    --complex-background-color-default: #fff;
    --complex-background-color-0: #ccfdcc;
    --complex-background-color-1: #f1faf0;
    --complex-background-color-2: #eafbea;
    --complex-background-color-3: #ddf8dd;
    --complex-background-color-4: #ccfdcc;
    --complex-background-color-5: #faf0f0;
    --complex-background-color-6: #fbeaea;
    --complex-background-color-7: #f8dddd;
    --complex-background-color-8: #fdcccc;

    --complex-color-default: #484848;
    --complex-color-0: #250000;
    --complex-color-1: #87a790;

    --complex-box-shadow-default: none;
    --complex-box-shadow-0: 0 0 2px 2px #7dcf89;
}`);

window.extraTodoListCssToAdopt = additionalTodoListStyleSheet;
