class Character {
  constructor(characterApi) {
    this.name = characterApi.name;
    this.image = `${characterApi.thumbnail.path}/standard_xlarge.jpg`;
    this.teamImage = `${characterApi.thumbnail.path}/portrait_small.jpg`
    this.id = characterApi.id;
  }
}

class CharacterInfo {
  constructor(characterApi){
    this.name = characterApi.name
    this.image =`${characterApi.thumbnail.path}/standard_fantastic.jpg`
    this.fullImage = `${characterApi.thumbnail.path}/detail.jpg`
    this.id = characterApi.id
    this.description= characterApi.description
  }
}


export { Character, CharacterInfo };