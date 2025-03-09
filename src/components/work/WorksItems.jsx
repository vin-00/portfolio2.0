import React from 'react'

const WorksItems = ({ item }) => {
  return (
    <div className='work__card fixed-height' key={item.id}>
      <img src={item.image} alt='' className='work__img' />
      <h1 className='work__title'>{item.title}</h1>
      <p className='work__description'>{item.description}</p>
      <div className='work__buttons'>
        <a href={item.link} target='_blank' className='work__button'>
          <i className='bx bx-globe'></i> Live <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
        <a href={item.github} target='_blank' className='work__button'>
          <i className='bx bxl-github'></i> Github <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
      </div>
    </div>
  )
}

export default WorksItems