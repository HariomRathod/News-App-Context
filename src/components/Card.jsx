import React from 'react'
import noimage from '../images/noimage.png'
function Card({item}) {

  const{ title,description,urlToImage,url}=item
  return (
   <>
   <div className=" m-2 card col-md-4 col-12" >
  <img src={urlToImage ? urlToImage: noimage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a target="_blank" href={url} className="btn btn-primary">Read More...</a>
  </div>
</div>
   </>
  )
}

export default Card