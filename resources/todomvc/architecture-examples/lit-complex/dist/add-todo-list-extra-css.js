const additionalTodoListStyleSheet = new CSSStyleSheet();
additionalTodoListStyleSheet.replaceSync(`:host(.show-priority) {
    --complex-border-bottom-color-default: rgb(237, 237, 237);
    --complex-border-bottom-color-0: rgb(215, 255, 215);
    --complex-border-bottom-color-1: rgb(255, 215, 215);

    --complex-background-color-default: rgb(255, 255, 255);
    --complex-background-color-0: rgb(204, 253, 204);
    --complex-background-color-1: rgb(241, 250, 240);
    --complex-background-color-2: rgb(234, 251, 234);
    --complex-background-color-3: rgb(221, 248, 221);
    --complex-background-color-4: rgb(204, 253, 204);
    --complex-background-color-5: rgb(250, 240, 240);
    --complex-background-color-6: rgb(251, 234, 234);
    --complex-background-color-7: rgb(248, 221, 221);
    --complex-background-color-8: rgb(253, 204, 204);

    --complex-color-default: rgb(72, 72, 72);
    --complex-color-0: rgb(37, 0, 0);
    --complex-color-1: rgb(135, 167, 144);

    --complex-box-shadow-default: none;
    --complex-box-shadow-0: 0 0 2px 2px rgb(125, 207, 137);
}`);

window.extraTodoListCssToAdopt = additionalTodoListStyleSheet;
