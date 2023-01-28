



const Buscar =async(nombre)=>{
  console.log("llega")
  var res;
       await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(response=>response.json())
        .then(data=>res=data)
        .catch(error=>{console.log(error)})
       // console.log(res," respuesta ")
        return res;
}

export default Buscar