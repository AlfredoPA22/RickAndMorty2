
const user=require('../utils/users')

const login=(req,res)=>{
    const {email,password}=req.query
    const userFind=user.find((elem)=>elem.email === email && elem.password===password);
    if(userFind!==undefined){
        return res.status(200).json({access:true})
    }else{
        return res.status(200).json({access:false})
    }
}

module.exports=login
