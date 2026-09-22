const http = require("http"); // подключаем модуль http
const express = require("express"); // подключаем библиотеку express



const app = express(); // запускаем express
const PORT = 3000; // порт на котором булем запускать сервер


app.get("/", (req, res) => {
  res.send("Главная страница");
});


app.get("/about", (req, res) => {
  res.send("О нас");
});


app.get("/contact", (req, res) => {
  res.send("Наши тг, инст, вацап укaзаны здесь -");
});


app.get("/product/:id", (req, res) => {
  console.log(req);



  res.send(`Продукты отображаются здесь - ${req.params.id} `);
});

app.get("/number/:id", (req, res) => {
  console.log(req);



  res.send(`Номер отображаются здесь - ${req.params.id} `);
});


app.post(`/addproduct`, (req, res)=>{
    const{ name , age} = req.body;
    

})


app.listen(PORT, () => {
  // тут расписываем на каком порту запускается сервер
  console.log("Сервер запущен, адрес сервера - localhost:3000"); // тут делаем уведомление для себя что сервер запущен
});
