#!/usr/bin/env node
//allows us to execute node directly with cmd npm link

const fs = require('fs')

fs.readdir(process.cwd(), (error, filenames) => {
  if (error) {
     console.log(error)
    throw new Error(error)   
  }
  console.log(filenames)
})