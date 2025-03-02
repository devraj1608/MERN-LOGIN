const ensureAuthenticated = require('../Middlewares/auth');


const router = require('express').Router();

router.get('/',ensureAuthenticated,(req, res)=>{
    console.log('--- logged in user detail', req.user);
    res.status(200).json([
        {
            "name": "dev",
            "price": 30000
        },
        {
            "name": "devraj",
            "price": 40000
        },
        {
            "name": "deva",
            "price": 50000
        },
    ])
});


module.exports = router;