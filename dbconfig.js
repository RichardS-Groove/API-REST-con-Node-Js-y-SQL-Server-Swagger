const config = {
  user: "Admin",
  password: "null",
  server: "192.168.0.247", //127.0.0.1
  database: "DBTEST2",
  options: {
    trustedconnection: false,
    enableArithAbort: true,
    encrypt: false,
    //instancename :'/'  En caso se tenga alguna instancia
  },
};

module.exports = config;