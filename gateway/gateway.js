const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()

// Middleware to parse request body
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

// Define routes to forward requests to microservices
app.use('/event', createProxyMiddleware({ 
  target: 'http://localhost:5002', 
  changeOrigin: true,
  onProxyReq(proxyReq, req, res) {
    if (req.body) {
      const bodyData = JSON.stringify(req.body);
      proxyReq.setHeader('Content-Type', 'application/json');
      proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
      proxyReq.write(bodyData);
    }
  }
}));

app.use('/user', createProxyMiddleware({ 
  target: 'http://localhost:5001', 
  changeOrigin: true,
  onProxyReq(proxyReq, req, res) {
    if (req.body) {
      const bodyData = JSON.stringify(req.body);
      proxyReq.setHeader('Content-Type', 'application/json');
      proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
      proxyReq.write(bodyData);
    }
  }
}));

app.get('/healthz', (req, res) => {
  res.sendStatus(200);
});

app.all('*', (req, res) => {
  res.status(404).send('Route not found');
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Gateway server is running on port ${port}`);
});
