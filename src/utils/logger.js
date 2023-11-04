const logger=(req,res,next)=>{
    try{
        const myReq=JSON.stringify({
            "connection":req.headers.connection,
            "host":req.headers.host
        });
        console.log(`receive-request ${req.url}`,myReq);
    }
    catch(error){
        console.log(error);
        next(error);
    }
}
module.exports=logger;