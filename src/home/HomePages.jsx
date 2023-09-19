import React, { useState } from 'react'
import Homes from '../components/homes/Homes'
import Upcomming from '../components/upcomming/Upcomming'
import { latest, recommended, upcome } from '../dummyData'
import Trending from '../components/trending/Trending'
import Lates from '../components/lastes/Lates'


const HomePages = () => {
  const [items, setitems] = useState(upcome)
  const [item, setitem] = useState(latest)
  const [rec, setrec] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items = {items} tittle='Phim sắp ra mắt'/>
      <Lates items = {item} tittle='Phim đang ra'/>
      <Trending />
      <Upcomming items = {rec} tittle='Phim bạn nên xem'/>
    </>
  )
}

export default HomePages