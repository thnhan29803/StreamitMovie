import React from 'react'
import { Link } from 'react-router-dom'

const UCard = ({item: { id, cover, name, time, video }}) => {
  return (
    <> 
        <div className="MovieBox">
            <div className="img">
                <img src={cover} alt="" />
            </div>
            <div className="text">
                <h3>{name}</h3>
                <span>{time}</span> <br/>
                <Link to={`/secondPage/${id}`}>
                <button className='primary-btn'>
                    <i className="fa fa-play"></i> XEM NGAY
                </button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default UCard