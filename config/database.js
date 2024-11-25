const mongoose = require('mongoose')

module.exports.db = async(req,res)=>{
    try {
        await mongoose.connect('mongodb+srv://admin:1234@cluster0.73c1k.mongodb.net/')
        console.log("db connect");
        
    } catch (error) {
        console.log(error);
        
    }
}