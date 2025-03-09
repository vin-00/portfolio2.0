import React, { useEffect, useState, useRef } from 'react'
import { projectsData, projectsNav } from './Data'
import WorksItems from './WorksItems'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'  // Import autoplay styles
import { Pagination, Autoplay } from 'swiper/modules'  // Import Autoplay module

const Works = () => {
  const [item, setItem] = useState({ name: 'all' })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)

  const swiperRef = useRef(null)  // Create a reference for Swiper instance
  const [swiperInstance, setSwiperInstance] = useState(null)  // State to store Swiper instance

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name
      })
      setProjects(newProjects)
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
    swiperInstance?.slideTo(0)
  }

  const onSwiper = (swiper) => {
    setSwiperInstance(swiper)  // Store Swiper instance in state
  }

  return (
    <div className=''>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index)
              }}
              className={`${active === index ? 'active-work' : ''
                } work__item`}
              key={index}
            >
              {item.name}
            </span>
          )
        })}
      </div>

      <div className="swiper-container">
        <button
          className="swiper-button-left"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <i className="bx bx-chevron-left"></i> {/* Boxicon left arrow */}
        </button>

        <Swiper
          className="work__container"
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false, // Keep autoplay even after user interaction
          }}
          speed={1000}  // Increase transition speed to 500ms
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            758: {
              slidesPerView: 1,
              spaceBetween: 48,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 38,
            },
            992: {
              slidesPerView: 1,
            },
          }}
          modules={[Pagination, Autoplay]}  // Include Autoplay module
          onSwiper={onSwiper}  // Store the Swiper instance
        >
          {projects.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <WorksItems item={item} key={item.id} />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <button
          className="swiper-button-right"
          onClick={() => swiperInstance?.slideNext()}
        >
          <i className="bx bx-chevron-right"></i> {/* Boxicon right arrow */}
        </button>
      </div>
    </div>
  )
}

export default Works