const { createProxyMiddleware } = require("http-proxy-middleware");
import DomainURL from "./api";

const apiProxy = createProxyMiddleware(DomainURL, {
  target: "http://www.example.org",
  changeOrigin: true,
});
