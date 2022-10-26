//รับ Request จาก User
const express = require("express")
const route = express.Router()
const {requireLogin} = require("../controllers/authController")
//----------------------------------------------------------------------------
const { signUp } = require("../controllers/userController")
const { bookDetails } = require("../controllers/bookController")
const { bookCollection } = require("../controllers/collectionController")
const { remove, getUserData, update, singleBlog } = require("../controllers/profileController")

//-------------------------------------------------------------------------------------------------------
route.post('/signup',signUp)
route.post('/bookseller',bookDetails)
route.get('/collection',bookCollection)
route.post('/collectionUser',getUserData)
route.delete('/delete/:slug',remove)
route.put('/updatepost/:slug',update)
route.get('/signleData/:slug',singleBlog)

module.exports=route