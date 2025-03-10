import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Vinay Khatri</h1>

            <ul className='footer__list'>
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>
                <li>
                    <a href='#portfolio' className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href='#qualifications' className='footer__link'>Qualifications</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href='https://github.com/vin-00' className='footer__social-icon' target='_blank'>
                    <i className='uil uil-github-alt'></i>
                </a>
                <a href='https://www.linkedin.com/in/vinay-khatri-751607273/' className='footer__social-icon' target='_blank'>
                    <i className="uil uil-linkedin"></i>
                </a>
                <a href='mailto: vinaykhatri292@gmail.com' className='footer__social-icon' target='_blank'>
                    <i className='uil uil-envelope'></i>
                </a>
                <a href='https://www.instagram.com/vinay_khatri29/' className='footer__social-icon' target='_blank'>
                    <i className='uil uil-instagram'></i>
                </a>
            </div>
            <span className='footer__copy'>&#169; All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer