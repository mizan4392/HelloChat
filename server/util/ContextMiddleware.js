var jwt = require("jsonwebtoken");
var { JWT_SECRET } = require("../config/env.json");
module.exports = (context) => {
  if (context.req && context.req.headers.authorization) {
    const token = context.req.headers.authorization.split("Gard ")[1];
    jwt.verify(token, JWT_SECRET, (error, decodedToken) => {
      context.user = decodedToken;
    });
  }
  return context;
};
