const URL = require('../models/url');

async function handleGenerateNewShortUrl(req,res){
const body = req.body;
console.log(body)

if (!body.url) {
    return res.status(400).send({
        message: 'URL is required.'
    });
}
const originalUrl = req.body.url
const randomString = generateUniqueBase62String(7);

await URL.create({
    shortUrl: randomString,
    redirectUrl: originalUrl,
    visitHistory: []
})

return res.status(201).json({
    shortUrl: randomString
});

}

async function handleRedirectToOriginalUrl(req,res){

    const shortUrl = req.params.shortUrl;
console.log(shortUrl)
   const data =  await URL.findOneAndUpdate({shortUrl},{
        $push:{
            visitHistory:{
                date: Date.now()
            }
        }
    } )

    console.log(data)

    if(!data){
        return res.status(404).send({
            message: 'URL not found.'
        });
    }

    return res.redirect(data.redirectUrl);
}

async function handleGetUrlVisitHistory(req,res){

    const shortUrl = req.params.shortUrl;

    const data = await URL.findOne({shortUrl})

    if(!data){
        return res.status(404).send({
            message: 'URL not found.'
        });
    }

    return res.status(200).json({
        totalvisits: data.visitHistory.length,
        analitycs: data.visitHistory
    });


}

function generateUniqueBase62String(length) {
    const BASE62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const base62Length = BASE62.length;
    
    let randomString = '';
    
    const timestampComponent = Date.now().toString(36);
    
    for (let i = 0; i < length - timestampComponent.length; i++) {
        const randomIndex = Math.floor(Math.random() * base62Length);
        randomString += BASE62[randomIndex];
    }

    randomString = timestampComponent + randomString;
    
    return randomString;
}



module.exports = {
    handleGenerateNewShortUrl,
    handleRedirectToOriginalUrl,
    handleGetUrlVisitHistory
}
   