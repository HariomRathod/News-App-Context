import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import Card from '../components/Card'
import NewsContext from '../context/NewsContext'
import { getNews } from '../context/NewsAction'
function Home() {

  const { news, dispatch } = useContext(NewsContext)

  const getdata = async () => {
    const data = await getNews("India")
    // console.log(data); 
    dispatch({
      type: "GET_NEWS",
      payload: data
    })
  }
  useEffect(() => {
    //  console.log(data);
    getdata()

  }, [])


if(news.length===0){
  return <h1>Loading...</h1>
}

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          {

            news.map((item, index) => <Card key={index} item={item} />)
          }
        </div>
      </div>
    </>
  )
}

export default Home