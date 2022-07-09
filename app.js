const fs = require('fs')
const path = require('path')
const {NodeSSH} = require('node-ssh')
const express = require('express')
const app = express()
const port = 3000
const ssh = new NodeSSH()
var a = ""
ssh.connect({
  host: '212.80.213.71',
  username: 'root',
  password:"@Bangbaht247250037"
})
.then((res)=>{

    a = "pack"
    ssh.execCommand("ls").then((response)=>{
        console.log(response)
    })
   
})
console.log("a=",a)
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })