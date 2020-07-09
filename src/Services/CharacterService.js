
import { Character, CharacterInfo } from '../entities/Character';
import { baseAPI, key } from '../shared/baseApi';




class CharacterService {

  getCharacter() {

    return baseAPI.get(`/characters?apikey=${key}`)
      .then(response => response.data.data.results)
      .then(characterList => characterList.map(character => new Character(character)))
      .catch(error => console.log(error))
  }

  getSingleCharacter = (id) => {

    return baseAPI.get(`/characters/${id}?apikey=${key}`)
      .then(response => new CharacterInfo(response.data.data.results[0]))
      .catch(error => console.log(error))
  };
}

export const characterService = new CharacterService();