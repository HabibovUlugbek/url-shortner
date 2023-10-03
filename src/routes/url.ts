import express from 'express'
import { handleGenerateNewShortUrl, handleRedirectToOriginalUrl, handleGetUrlVisitHistory } from '../controllers/url'

const router = express.Router()

const URL = require('../models/url')

router.post('/', handleGenerateNewShortUrl)
router.get('/:shortUrl', handleRedirectToOriginalUrl)
router.get('/:shortUrl/stats', handleGetUrlVisitHistory)

export default router
