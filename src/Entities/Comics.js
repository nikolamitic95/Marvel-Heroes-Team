class Comics {
    constructor(apiComics) {
      this.name = apiComics.title;
      this.image = `${apiComics.thumbnail.path}/standard_large.jpg`;
      this.modalImage = `${apiComics.thumbnail.path}/portrait_incredible.jpg`;
      this.id = apiComics.id;
      this.date = apiComics.dates[1].date;
      this.prices = apiComics.prices[0].price;
    }
  }


  export {Comics}