// https://github.com/infinitered/apisauce


import { create } from 'apisauce';


const api = create({
    baseURL: `https://newsapi.org/v2`,
})

const common_tmp = `?country=us&apiKey=YOUR_API_KEY`;
const getTopHeadlines = api.get(`/top-headlines`+common_tmp)
const getByCategory = (category)=>api.get('/everything?q='+category+"&apiKey=YOUR_API_KEY")

export default {
    getTopHeadlines,
    getByCategory
}