const express = require ('express')

const friendsController = require('../controllers/friends.controller')

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) =>{
    console.log('ip address', req.ip);
    next();
});
friendsRouter.post('/',friendsController.postfriends )
friendsRouter.get('/', friendsController.getFreinds);                                 //paramaters request and response, by doing res.json we are defining to send the respond in json format
friendsRouter.get('/:friendId', friendsController.getFriend)

module.exports = friendsRouter;