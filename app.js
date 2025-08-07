
const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

app.use(express.static("./app/public"));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.json())
app.use(express.static(path.join(__dirname, 'app/public')))


const rotas = require("./app/routes/routers");
app.use("/", rotas);

console.log("teste")

app.listen(port,() => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

//lalalallalalal// // oioioioioio// //kethteste// //laurinha// //lavis//

