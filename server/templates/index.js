module.exports = (restId) => (
  `<!DOCTYPE html>
  <html>
  <head>
    <title>Header</title>
  </head>
  <body>
    <div id="header"></div>
    <div id="portal"></div>
    <script type="text/javascript" src="/bundle.js"></script>
    <script>
    ReactDOM.render(
      React.createElement(Header, {restId: ${restId}}, null),
      document.getElementById('header')
    )
    </script>
  </body>
</html>`
);
