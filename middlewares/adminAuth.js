module.exports.adminAuth = (req,res,next)=>{
    let {adminId} = req.cookies
    console.log(adminId);
    
    if(adminId)
    {
        return next();
    }
    else
    {
        return res.redirect('/login');
    }
}