import express from 'express'

function userCredentials(req,res,next){
    console.log("username")
    console.log("pasword")
    next()
}

export default userCredentials;