const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const userIP = process.env.USER_MS_IP;
const loginIP = process.env.LOGIN_MS_IP;
const eventIP = process.env.EVENT_MS_IP;

// Middleware to parse request body
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

// Define routes to forward requests to microservices
app.use('/event', createProxyMiddleware({ 
  target: `http://${eventIP}`, 
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

app.use('/users', createProxyMiddleware({ 
  target: `http://${userIP}`, 
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
