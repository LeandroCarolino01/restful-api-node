const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling Get requests to products'
    });
});

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling Get requests to products'
    });
});

module.exports = router;