const ApiError = require("../execeptions/api-error");

module.exports = function (err, req, res, next) {
  console.log(err);
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ massage: err.message, erros: err.errors });
  }
  return res.status(500).json({ massage: "unexpected error" });
};