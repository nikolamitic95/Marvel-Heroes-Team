class Comics {
    constructor(apiComics) {
      this.name = apiComics.title;
      this.image = `${apiComics.thumbnail.path}/standard_large.jpg`;
      this.id = apiComics.id;
      this.date = apiComics.modified;
      this.prices = apiComics.prices[1];
    }
  }


  export {Comics}