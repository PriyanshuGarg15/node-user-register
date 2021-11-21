const express= require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const morgan=require('morgan')
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const Router=require('./routes/routes')
//const {fetchUserData}=require('./controller/controller')

const PORT=process.env.PORT || 3000;
const dbURI="mongodb+srv://priyanshu:priyanshumongo@cluster0.jq1tp.mongodb.net/node-crud?retryWrites=true&w=majority"

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Register API",
        version: "1.0.0",
        description: "A simple Express User Register API"
      },
      servers: [
        {
          url: "http://localhost:3000"
        }
      ]
    },
    apis: ["./routes/*.js"]
  };
  
const specs = swaggerJsDoc(options);

  
const app=express()

//connecting db and starting listening for requests
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
        .then((result) =>{  app.listen(PORT)
                            console.log(`Server up at ${PORT}`)
        }).catch((err)=>{console.log(err)})

app.set('view engine','ejs');

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))
app.use('/',Router)