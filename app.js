const request=require('request');

const url ='http://api.weatherstack.com/current?access_key=d7f19a4c536c6104720308b9271667f9&query=New%20York';

request({url:url,json:true},(error,response)=>{
    const data=response.body;
    const current=data.current;
    console.log(data);
})