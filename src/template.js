// html skeleton provider
function template(title, html = '') {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title> ${title} </title>
      </head>
      <body>
        ${html}
        <script src="assets/main.js"></script>
      </body>
  `;
}

module.exports = template;
