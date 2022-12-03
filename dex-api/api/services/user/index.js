const Login =  require("./login").Login;
const Register =  require("./register").Register;
const Edit =  require("./edit").Edit;
const dispetcherLogin = require("./dispetcherLogin").dispetcherLogin;

module.exports = {
    Register,
    Login,
    Edit,
    dispetcherLogin
  };