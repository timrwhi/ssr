"use strict";

// html skeleton provider
function template(title) {
  var html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var filename = html ? 'client' : 'bundle'; // Dynamically ship scripts based on render type

  var scripts = "<script src=\"assets/".concat(filename, ".js\"></script>");
  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n        <title> ".concat(title, " </title>\n      </head>\n      <body>\n        ").concat(html, "\n        ").concat(scripts, "\n      </body>\n  ");
}

module.exports = template;