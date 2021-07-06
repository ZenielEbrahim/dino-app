const path = require('path')

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()   
}

//node-fetch allows you to use fetch inside of node; const fetch= require('node-fetch')
const request = require('request');
const express= require('express')

const api_key= process.env.API_KEY
const app =express()
const PORT = process.env.PORT || 3000

const publicPath= path.join(__dirname, "../public")

app.use(express.static(publicPath))



app.get('/name', (req, res)=>{
   // res.send({path:publicPath})


const options = {
  method: 'GET',
  
  url: 'https://alexnormand-dino-ipsum.p.rapidapi.com/',
  qs: {paragraphs: '1', words: '2', format: 'json'},
  json:true,
  headers: {
    'x-rapidapi-key': api_key,
    'x-rapidapi-host': 'alexnormand-dino-ipsum.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error('error: ',error);
    console.log(typeof body)
    res.send(body)
});
})


app.get('/image', (req, res)=>{
    // res.send({path:publicPath})
 
 
    const options = {
        method: 'GET',
        url: 'https://bing-image-search1.p.rapidapi.com/images/search',
        json:true,
        qs: {q: 'dinosaur', count:"10"},
        headers: {
          'x-rapidapi-key': api_key,
          'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
          useQueryString: true
        }
      };


 request(options, function (error, response, body) {
     if (error) throw new Error('error: ',error);
     console.log(typeof body)
     res.send(body)
 });
 
 
 })


app.listen(PORT, console.log('server up on port: ',PORT))