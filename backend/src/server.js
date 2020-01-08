import App from "./app";

require("dotenv").config();

App.listen(process.env.PORT_SERVER, () => {
  console.log(`Servidor online na porta: ${process.env.PORT_SERVER}`);
});
