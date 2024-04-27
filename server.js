const express = require('express')
const path = require('path')

const friendsRouter = require ('./routes/friends.router')
const messagesRouter = require ('./routes/messages.routers')

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.listen(PORT, () =>{
console.log(`Listening on ${PORT}...`)
})



app.use((req, res, next) =>{
    const start = Date.now(); //it logs the time when req is received in middleware
    next();  //if we comment out next() or dont call it req wont be received in express and response wont be sent from express
    const delta  = Date.now() - start; // it will contain the difference between the time of request received in midddleware and 
    //response sent through it
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
    console.log(start);
})

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index', {
      title: 'My Friends Are VERYY Clever',
      caption: 'Let\'s go skiing!',
    });
  });

app.use('/messages', messagesRouter)
app.use('/friends', friendsRouter)



