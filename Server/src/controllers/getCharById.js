
// const getCharById=(res,id)=>{
    
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=>{
//         let obj={
//             id:response.data.id,
//             name:response.data.name,
//             gender:response.data.gender,
//             species:response.data.species,
//             origin:response.data.origin,
//             image:response.data.image,
//             status:response.data.status
//         }
//         res.writeHead(200,{'Content-Type':'application/json'})
//         res.end(JSON.stringify(obj))
//     })
//     .catch((error)=>{
//         res.writeHead(500,{'Content-Type':'text/plain'})
//         res.end(error.message)
//     })
// }

// module.exports={
//     getCharById
// }
const axios= require('axios')
const url="https://rickandmortyapi.com/api/character/";

const getCharById= async(id,req,res)=>{
    try {
        const {data}=await axios(url+id);
        let obj={
                    id:id,
                    name:data.name,
                    gender:data.gender,
                    species:data.species,
                    origin:data.origin,
                    image:data.image,
                    status:data.status
                }
            return res.status(200).json(obj)
    } 
    catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports=getCharById