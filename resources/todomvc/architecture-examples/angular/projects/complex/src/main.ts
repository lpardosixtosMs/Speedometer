import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "shared-library";

import "big-dom-generator/dist/app.css";
import "big-dom-generator/matchingCss.css";
import "big-dom-generator/nonMatchingCss.css";
import "big-dom-generator/public/layout.css";

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
