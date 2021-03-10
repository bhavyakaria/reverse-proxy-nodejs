const app = require('express')()

app.get('/', (req, res) => {
  console.log(`Host: ${req.get('host')}`);  // localhost: 8080

  res.send('req');
});

app.listen(8080, () => {
  console.log('Proxy Server listening on 8080...');
});