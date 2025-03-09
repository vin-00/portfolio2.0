import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
        <i className='bx bx-award about__icon'></i>
            <h3 className='about__title'>Competitive Programming</h3>
            <span className='about_subtitle'>100+ contests</span>
        </div>

        <div className='about__box'>
        <i className='bx bx-briefcase about__icon'></i>
            <h3 className='about__title'>Completed</h3>
            <span className='about_subtitle'>20+ projects</span>
        </div>
    </div>
  )
}

export default Info