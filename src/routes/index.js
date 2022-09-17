const {Router} = require('express');
//const express = require('express');//ayuda a crear un servidor


const router = Router()

router.get('/',(req, res) => {
    res.render("index")
})

router.get('/iniciar',(req, res) => {
    res.render("iniciarsesion")
})

router.get('/atractivos',(req, res) => {
    res.render("atractivos")
})

router.get('/tipos',(req, res) => {
    res.render("tipos")
})


module.exports = router;