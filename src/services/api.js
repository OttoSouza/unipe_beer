import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.punkapi.com/v2/'
})

export const get = api.get('/beers')

