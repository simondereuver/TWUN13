const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer({});

app.use(express.json())

const PORT = 5000;

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log('Incoming Request:');
  console.log('Method:', req.method);
  console.log('URL:', req.originalUrl);
  console.log('Headers:', req.headers);
  console.log('Query:', req.query);
  console.log('Body:', req.body);
  console.log('--------------------------');

  next();
});

// Route requests to the appropriate backend services
app.all('/event', (req, res) => {
  console.log(req.url)
  proxy.web(req, res, { target: 'http://localhost:5002' });
});

app.all('/user', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:5001' });
});

// Error handling
proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err);
  res.status(500).send('Proxy error');
});

// Start the server
app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
