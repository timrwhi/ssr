// html skeleton provider
function template(title, html = '') {
  const filename = html ? 'client' : 'bundle'; // Dynamically ship scripts based on render type
  const scripts = `<script src="assets/${filename}.js"></script>`;
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title> ${title} </title>
      </head>
      <body>
        ${html}
        ${scripts}
      </body>
  `;
}

module.exports = template;
