const express= require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index.html', {title:"Inicio"});
});

router.get('/Contact',(req,res)=>{
    res.render('contact.html', {title:"Genera tu frase de amor"});
});

module.exports=router;