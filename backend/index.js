const express = require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('server is ready.')
})

app.get('/api/animes',(req,res)=>{
    const animes=[
        {
            'id':1,
            'name':'death note'
        },
        {
            'id':2,
            'name':'naruto'
        },
        {
            'id':3,
            'name':'oregairu'
        },{
            'id':4,
            'name':'darling in the franxx'
        },{
            'id':5,
            'name':'attack on titan'
        }
    ]
    res.send(animes)
})

const port = process.env.port || 3000

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})