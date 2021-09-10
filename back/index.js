const customExpress = require("./config/customExpress");
const port = 3000;

//realiza a configuracao Express e outras bibliotecas para o app
const app = customExpress();


app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});
