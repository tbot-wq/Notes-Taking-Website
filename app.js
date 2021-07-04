const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants")
const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()
const port = 80
//Express Specific Stuff
app.use(express.urlencoded())
//for seving static files
app.use('/static', express.static('static'))


//Pug Specific Stuff

//Set the template engine as pug
app.set('view engine', 'pug')
//set the views directory
app.set('views', path.join(__dirname, 'views'))


//Endpoints
app.get('/',(req,res)=>{
    const con = "This is a boring content"
    const params = {'title':'Hi','content':con}
   res.status(200).render('index.pug',params)
})

app.post('/',(req,res)=>{

let name  = req.body.name

    let filename = req.body.filename
    let notes = req.body.content
    fs.writeFileSync(filename,notes)
    const params = {'message':'Your Form has been submitted succesfully'}
    res.status(200).render('index.pug',params)
})

app.listen(port, () => {
    console.log(`The app started sucessfully on port ${port}`)
})