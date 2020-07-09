import {Comics} from '../Entities/Comics';

const key = `aa3d20826840bd8571b0a17580337f2c`;

const fetchComics=(id)=>{
    return(
    fetch(`http://gateway.marvel.com/v1/public/characters/${id}/comics?apikey=${key}`)
    .then(response=>response.json())
    .then((res) => res.data.results.slice(0,6))
      .then((res) => res.map((com) => new Comics(com)))
    )}

export {fetchComics}