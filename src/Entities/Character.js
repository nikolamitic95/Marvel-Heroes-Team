class Character {
  constructor(apiCharacter) {
    this.name = apiCharacter.name;
    this.image = `${apiCharacter.thumbnail.path}/portrait_xlarge.jpg`;
    this.teamImage = `${apiCharacter.thumbnail.path}/portrait_small.jpg`
    this.id = apiCharacter.id;
  }
}

class CharacterInfo {
  constructor(apiCharacter){
    this.name = apiCharacter.name
    this.image =`${apiCharacter.thumbnail.path}/standard_fantastic.jpg`
    this.fullImage = `${apiCharacter.thumbnail.path}/portrait_uncanny.jpg`
    this.id = apiCharacter.id
    this.description= apiCharacter.description
  }
}


export { Character, CharacterInfo };