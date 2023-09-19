import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import  { latest } from '../../dummyData'

const ThirdPage = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = latest.find((item) => item.id === parseInt(id))
        if (item) {
            setItem(item)
        } 
    }, [id])


  return (
    <>
        {item ? (
            <>
                <section className="singlePage">
                    <div className="singleHeading">
                        <h1> {item.name} </h1>
                        <span> | {item.time} |  </span> <span>HD</span>
                    </div>
                    <div className="container">
                        <video src={item.video} controls></video>
                    </div>
                </section>
            </>
        ) : null}
    </>
  )
}

export default ThirdPage