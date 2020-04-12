const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await respuesta.json();
    res.json(usuarios);  
});

module.exports = router;