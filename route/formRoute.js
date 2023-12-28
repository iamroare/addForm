
const express = require('express');
const router = express.Router();
const formController = require('../controller/formController.js')


router.get('/testing',(req,res)=>{
    console.log('testing');
    res.status(200).json({message:'you are done with this testing endpoint'})
})
router.post('/addForm',formController.add) // for adding data
router.get('/showAll',formController.Show) // for retriving data


module.exports = router;
