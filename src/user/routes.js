const express = require('express');
const app = express();

const routes = express.Router({
    mergeParams: true
});

routes.get('/',(req, res)=>{
  
    var user1 = {firstName:"setphen", lastName:"Curry"}
    const user2 = {firstName:"taiterr", lastName:"hero"}
    const user3 = {firstName:"taiterr", lastName:"hero"}
    res.status(200).json([user1,user2])
});


module.exports = {
    routes,

};
