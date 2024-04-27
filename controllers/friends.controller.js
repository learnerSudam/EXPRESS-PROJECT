const model = require('../models/friends.model')

function postfriends(req, res){
    if(!req.body.name){
        return res.status(400).json({        //in case we don't receive name key or any body we will return the error at point 
            error:'Friend name is required'   // we don't need to execute the part where it responds the newly added friend
        });                                   
    }
    const newFriend = {
      name:req.body.name,
      id: model.length
    }

    model.push(newFriend)

    res.json(newFriend);
}

function getFreinds(req, res){  //here after app, we need to mention the methpd name, then we have to provide the endpoint
    res.json(model);             //after defining the endpoint, we need to add the route handler function, Where it takes two 
}


function getFriend(req, res){         //this type of routes are called as parameterized route
    //here we are taking the freind id passed in the rouute, as it a paart of req parameter 
    const friendId = Number(req.params.friendId);  //whenever we make any api request, express will look over all endpoints, if nothing matched it will return 404
    const friend = model[friendId]               //if it finds a match, it will send the response
    if(friend){                                    //In the response express automatically sets the content type header depending on what we are sending in response
        res.status(200).json(friend);
    } else{
        res.status(404).json({
            error:"Friend does not exists"
        });
    }
}

module.exports = {
    postfriends,
    getFreinds,
    getFriend
}