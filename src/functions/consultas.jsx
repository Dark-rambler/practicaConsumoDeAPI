

const  Listar= async()=>{
    //https://pokeapi.co/api/v2/pokemon
   for (let i = 1; i < 23; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response=>response.json())
    .then(data=>console.log(data))
   }
}
export default Listar
