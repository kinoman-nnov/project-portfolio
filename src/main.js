import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/x-wrapper";
import "./scripts/header";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/popup-menu";