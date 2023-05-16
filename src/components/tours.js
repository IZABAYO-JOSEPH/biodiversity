import React from 'react'
import Title from './title'
import {tours} from '../data'
import Tourcard from './tourcard'
const Tour = () => {
  return (
   <section className
   ="section" id="places">
    <Title title="Featured" subtitle="Nature"></Title>
     <div className
     ="section-center featured-center">
      {tours.map((tour)=>{
     
        return(
  <Tourcard key={tour.id} {...tour} />
 )
      })}
       
     </div>
   </section>
  )
}

export default Tour