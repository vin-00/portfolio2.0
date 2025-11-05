import React from 'react' 

const Social = () => {
  return (
    <div className='home__social'>
      <a href='https://github.com/vin-00' className='home__social-icon' target="_blank">
        <i className='uil uil-github-alt'></i>
        </a>
      <a href='https://www.linkedin.com/in/vinay-khatri-751607273/' className='home__social-icon' target="_blank">
        <i className="uil uil-linkedin"></i>
        </a>
      <a href='mailto: vinaykhatri292@gmail.com' className='home__social-icon' target="_blank">
        <i className="uil uil-envelope"></i>
      </a>
      <a href='https://www.instagram.com/0_vinay_khatri_0/' className='home__social-icon' target="_blank">
            <i className='uil uil-instagram'></i>
        </a>
    </div>
  )
}

export default Social