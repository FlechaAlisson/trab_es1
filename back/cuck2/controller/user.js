const userModel = require('../models/user');

module.exports = (app) => {

    app.get('/login', (req, res) => {

        return res.status(200).json("ok");
    })


    app.get("/register", (req, res) => {
        
      return res.status(200).json("ok");
    });

    
}