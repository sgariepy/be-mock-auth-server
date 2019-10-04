const transformMethodUrls = ['/login'];

module.exports = function (req, res, next) {
  if (req.method === 'POST' && transformMethodUrls.includes(req.url)) {
    console.log(`Middleware POST-to-GET used for ${req.url}.`);
    req.method = 'GET';
    req.query = req.body;
  }
  next();
}
