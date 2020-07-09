import Axios from 'axios';

const baseAPI = Axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public'
})

const key = `aa3d20826840bd8571b0a17580337f2c`;

export { baseAPI, key }