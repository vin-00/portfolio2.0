import React, { useState } from 'react'
import './qualification.css'

const educationData = [
  {
    title: "BTech CSE",
    subtitle: "Maharaja Agrasen Institute of Technology, Delhi",
    period: "2022-2026",
    cgpa: "8.398 CGPA"
  },
  {
    title: "Senior Secondary School",
    subtitle: "Kendriya Vidyalaya, Delhi",
    period: "2020-2022",
    cgpa: "94% in CBSE Board"
  },
  {
    title: "Secondary School",
    subtitle: "D.A.V. Centenary Public School, Delhi",
    period: "2014-2020",
    cgpa: "93.4% in CBSE Board"
  }
];

const experienceData = [
  {
    title: "Full Stack Developer",
    subtitle: "Truxie Startup",
    period: "Nov 2024 - Present",
    role: "Intern"
  },
  {
    title: "National Cadet Corps",
    subtitle: "MAIT",
    period: "2022-2025",
    role: "Corporal"
  },
  {
    title: "Full Stack Developer",
    subtitle: "CoderOne",
    period: "Jun 2024 - Aug 2024",
    role: "Intern"
  }
];

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
  
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const QualificationItem = ({ data, index, total }) => (
    <div className='qualification__data'>
      {index % 2 === 0 ? (
        <>
          <div>
            <h3 className='qualification__title'>{data.title}</h3>
            <span className='qualification__subtitle'>{data.subtitle}</span>
            <div className='qualification__calendar'>
              <i className='uil uil-calendar-alt'></i> {data.period}
            </div>
            {data.role && (
              <p className='qualification__description'>
                <i className='uil uil-user'></i> {data.role}
              </p>
            )}
            {data.cgpa && (
              <div className='qualification__cgpa'>
                <i className='uil uil-award'></i> {data.cgpa}
              </div>
            )}
          </div>
          <div>
            <span className='qualification__rounder'></span>
            {index !== total - 1 && <span className='qualification__line'></span>}
          </div>
        </>
      ) : (
        <>
          <div></div>
          <div>
            <span className='qualification__rounder'></span>
            {index !== total - 1 && <span className='qualification__line'></span>}
          </div>
          <div>
            <h3 className='qualification__title'>{data.title}</h3>
            <span className='qualification__subtitle'>{data.subtitle}</span>
            <div className='qualification__calendar'>
              <i className='uil uil-calendar-alt'></i> {data.period}
            </div>
            {data.role && (
              <p className='qualification__description'>
                <i className='uil uil-user'></i> {data.role}
              </p>
            )}
            {data.cgpa && (
              <div className='qualification__cgpa'>
                <i className='uil uil-award'></i> {data.cgpa}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );

  return (
    <section className='qualification section' id='qualifications'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personel journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div 
            className={`qualification__button ${toggleState === 1 ? 'qualification__active' : ''} button--flex`}
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>
            {"  "}Education
          </div>

          <div 
            className={`qualification__button ${toggleState === 2 ? 'qualification__active' : ''} button--flex`}
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>{"  "}Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div className={`qualification__content ${toggleState === 1 ? 'qualification__content-active' : ''}`}>
            {educationData.map((item, index) => (
              <QualificationItem 
                key={index} 
                data={item} 
                index={index}
                total={educationData.length}
              />
            ))}
          </div>

          <div className={`qualification__content ${toggleState === 2 ? 'qualification__content-active' : ''}`}>
            {experienceData.map((item, index) => (
              <QualificationItem 
                key={index} 
                data={item} 
                index={index}
                total={experienceData.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
