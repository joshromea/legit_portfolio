const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('about-me')
})

router.get('/about-me', (req, res) => {
    res.render('about-me')
})

router.get('/portfolio', (req, res) => {
    res.render('portfolio')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

module.exports = router