// const API_KEY = '39f6340afe6d44dc8af9b1600b42884f'
export const getNews = async (topic) => {

    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-02-09&sortBy=publishedAt&apiKey=af526c31a40c46849479eb570fa22b9d`)
    const data = await response.json()
    return data.articles
    // console.log(data);
}