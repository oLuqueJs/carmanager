export function requestLogger(req, res, next) {
  console.log(`${new Date().toLocaleString("pt-BR", "UTC")} -> ${req.method} ${req.url}`);
  next();
}