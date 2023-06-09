import React from 'react'
import Title from './title'
import {services} from '../data'
import Service from './service'
const Services = () => {
  return (
    <section className
    ="section services" id="services">
      <Title title="Our" subtitle="Services"></Title>
      <div className
      ="section-center services-center">
          {services.map((service) =>{
    
            return(
              <Service key={service.id} {...service}/>
            )
          })}
          </div>
    </section>
  )
}
export default Services