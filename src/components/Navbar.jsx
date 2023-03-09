import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import NewsContext from '../context/NewsContext'
import Marque from './Marque';
import { getNews } from '../context/NewsAction';
function Navbar() {

    const { news } = useContext(NewsContext)
    // console.log(news);
  const[searcText,setSeaerchText]=useState("")


  const{dispatch}=useContext(NewsContext)
  
  const handleSubmit= async(e)=>{
      e.preventDefault()
      const data= await getNews(searcText)
    dispatch({
        type:"GET_NEWS",
        payload: data
    })
  }
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid w-100">
                    <a className="navbar-brand" href="#">Today News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorie
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">War</a></li>
                                    <li><a className="dropdown-item" href="#">Government</a></li>
                                    <li><a className="dropdown-item" href="#">Politics</a></li>
                                    <li><a className="dropdown-item" href="#">Education</a></li>
                                    <li><a className="dropdown-item" href="#">Health</a></li>

                                    <li><hr className="dropdown-divider" />Fashion</li>
                                    <li><a className="dropdown-item" href="#">Entertainment</a></li>
                                    <li><a className="dropdown-item" href="#">Sport</a></li>

                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
                            <input value={searcText} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSeaerchText(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        <Marque/>
        </>

    )
}

export default Navbar