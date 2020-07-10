import { Comics } from '../entities/Comics';
import { baseAPI } from '../shared/baseApi';

const key = `aa3d20826840bd8571b0a17580337f2c`;
const id = '46168';
class ComicsService {

  getComics(id) {
    return (
      baseAPI.get(`/characters/${id}/comics?apikey=${key}`)
        .then((res) => res.data.data.results.slice(0, 12))
        .then((res) => res.map((com) => new Comics(com)))
        .catch(error => console.log(error))
    )
  }
}
export const comicsService = new ComicsService();