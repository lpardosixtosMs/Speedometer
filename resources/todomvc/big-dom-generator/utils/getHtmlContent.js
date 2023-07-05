const fs = require("fs");

function getHtmlContent(filePath, isComplex = false) {
    let htmlContent = fs.readFileSync(filePath, "utf8");
    if (isComplex) {
        const bodyStartIndex = htmlContent.lastIndexOf("<body>") + 6;
        const bodyEndIndex = htmlContent.lastIndexOf("</body>");
        htmlContent = htmlContent.substring(bodyStartIndex, bodyEndIndex);
    }
    return htmlContent;
}

module.exports = { getHtmlContent };
