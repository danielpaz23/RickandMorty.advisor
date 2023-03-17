const axios = require('axios');
const URL= "https://rickandmortyapi.com/api/character"
const getCharDetail = async (req, res) =>{
    const {detailId}= req.params;
    try{
        const {data} = await axios (`${URL}/${detailId}`);
        const character={
                    id: data.id,
                    image: data.image,
                    name: data.name,
                    gender:data.gender,
                    status: data.status,
                    origin: data.origin, 
                    species:data.species,
                }
                
        res.status(200).json(character);
    }catch(error){
        res.status(500).json({error: error.message});
    }
    
}
module.exports = { getCharDetail }



// axios(`${URL}/${detailId}`)
//     .then((response) => {
//         response.data
//     })
//     .then((data) => {
//         const character= {
//             id: data.id,
//             image: data.image,
//             name: data.name,
//             gender: data.gender,
//             status: data.status,
//             origin: data.origin,
//             species: data.species,

//         }
//         res.status(200).json(character);
//     })
    
//     .catch((error) => {
//         res.status(500).json({error: error.message})
        
//     });