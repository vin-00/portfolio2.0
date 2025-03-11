import React, { useState } from 'react'
import './qualification.css'

const educationData = [
  {
    title: "Secondary School",
    subtitle: "D.A.V. Centenary Public School, Delhi",
    period: "2014-2020",
    cgpa: "95.6% in CBSE 10th Board"
  },
  {
    title: "Senior Secondary School",
    subtitle: "DAV Centenary Public School, Delhi",
    period: "2020-2022",
    cgpa: "98.2% in CBSE 12th Board"
  },
  {
    title: "BTech CSE",
    subtitle: "Netaji Subhas University of Technology, Delhi",
    period: "2022-2026",
    cgpa: "8.92 CGPA"
  }
];

const experienceData = [
  {
    title: "Software Intern",
    subtitle: "Developed an AI SaaS Application",
    period: "Nov 2024 - Dec 2024",
    role: "NextJS Developer"
  },
  {
    title: "Technical Intern",
    subtitle: "TechSaksham : Edunet Foundation",
    period: "Feb 2025 - March 2025",
    role: "Intern"
  },
];
// Leetcode GeeksForGeeks Codeforces Codechef
const achievementData =[
  {
    title: "Achieved 1991 rating",
    subtitle: "Leetcode",
    period: "September 2024",
    cgpa: "Knight Badge",
    link:"https://leetcode.com/u/vinay_kh/"
  },
  {
    title: "Achieved a rating of 1755",
    subtitle: "CodeChef",
    period: "December 2024",
    cgpa: "3⭐ Badge",
    link:"https://www.codechef.com/users/vinaykhatri292"
  },
  {
    title: "Achieved 2046 rating",
    subtitle: "GeeksForGeeks",
    period: "January 2025",
    cgpa: "5⭐ Badge",
    link:"https://www.geeksforgeeks.org/user/vinaykhamjtz/"
  },
  
  {
    title: "Have a rating of 1448",
    subtitle: "Codeforces",
    period: "February 2024",
    cgpa: "Specialist",
    link:"https://codeforces.com/profile/vinaykhatri292"
  }
]

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  
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

          <div 
            className={`qualification__button ${toggleState === 3 ? 'qualification__active' : ''} button--flex`}
            onClick={() => toggleTab(3)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>
            {"  "}Achievements
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

          <div className={`qualification__content ${toggleState === 3 ? 'qualification__content-active' : ''}`}>
            {achievementData.map((item, index) => (
              <a href={item.link} key={index} target="_blank" rel="noreferrer">
                <QualificationItem 
                  data={item} 
                  index={index}
                  total={achievementData.length}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
