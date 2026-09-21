const http = require("http")// подключаем модуль http
const express = require("express")// подключаем библиотеку express

const app = express()// запускаем express
const PORT = 3000;// порт на котором булем запускать сервер



app.get('/' , (req, res)=>{
    res.send("Главная страница")

})


app.get('/about' , (req, res)=>{
    res.send("о нас")

})

// const server = http.createServer((req, res)=>{// сооздаем 
//     res.end("Hello World")// ответ клиенту когда он зайдет на наш сервер

// })


app.listen(PORT, ()=>{// тут расисываем на каком порту запускается сервер
    console.log("Сервер запущен, адрес сервера - localhost:3000");// тут делаем уведомление для себя что сервер запущен
    
    })

    console.log(123);
    console.log("sss");
    
    