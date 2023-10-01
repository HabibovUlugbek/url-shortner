const express = require('express');
const {
    handleGenerateNewShortUrl,
    handleRedirectToOriginalUrl,
    handleGetUrlVisitHistory
} = require('../controllers/url');
const router = express.Router();

const URL = require('../models/url');

router.post('/', handleGenerateNewShortUrl);
router.get('/:shortUrl', handleRedirectToOriginalUrl);
router.get('/:shortUrl/stats', handleGetUrlVisitHistory);

module.exports = router;