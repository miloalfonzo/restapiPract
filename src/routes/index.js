const { Router } = require('express');
const router = Router();


router.get('/test', (req, res) => {
    const data = {
        "nombre": "milo",
        "edad": "21"
    };
    res.json(data);
});

module.exports = router;