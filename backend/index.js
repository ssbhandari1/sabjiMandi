const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const UserRouter = require('./routes/User')
const ProductRouter = require('./routes/Products')

const app=express()
app.use(express.json())
app.use(cors())

app.use('/',UserRouter)
app.use('/product',ProductRouter)

mongoose.connect('mongodb://127.0.0.1:27017/mandi',  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })


  app.listen('4001',()=>{
    console.log('Server Started')
  })