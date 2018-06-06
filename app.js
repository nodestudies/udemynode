console.log('app')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')

const notes = require('./notes')

var arg = process.argv[2]

console.log('argument:'+ notes.command(arg) +' ' + process.env.LOGNAME)


