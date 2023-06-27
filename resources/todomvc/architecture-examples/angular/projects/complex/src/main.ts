import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "shared-library";

import "../../../node_modules/big-dom-generator/dist/app.css";
import "../../../node_modules/big-dom-generator/matchingCss.css";
import "../../../node_modules/big-dom-generator/nonMatchingCss.css";
import "../../../node_modules/big-dom-generator/public/layout.css";

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
