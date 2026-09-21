const http = require("http")// подключаем модуль http

const PORT = 3000;// порт на котором булем запускать сервер


const server = http.createServer((req, res)=>{// сооздаем 
    res.end("Hello World")// ответ клиенту когда он зайдет на наш сервер

})

server.listen(PORT, ()=>{// тут расисываем на каком порту запускается сервер
    console.log("Сервер запущен, адрес сервера - localhost:3000");// тут делаем уведомление для себя что сервер запущен
    
    })

    console.log(123);
    console.log("sss");
    
    