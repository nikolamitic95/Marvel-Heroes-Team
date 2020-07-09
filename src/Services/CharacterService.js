
import { Character, CharacterInfo } from '../Entities/Character';


const key = `aa3d20826840bd8571b0a17580337f2c`;

const fetchCharacters = () => {
    return fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${key}`)
      .then((response) => response.json())
      .then((res) => res.data.results)
      .then((res) => res.map((char) => new Character(char)));
  };

  const fetchSingleCharacter = (id) => {
    return fetch(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${key}`)
      .then((response) => response.json())
      .then((res) => res.data.results)
      .then((res) => res.map((char) => new CharacterInfo(char)));
  };



export {fetchCharacters, fetchSingleCharacter};