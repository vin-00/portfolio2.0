import React, { useState, useEffect } from 'react';
import './Featured.css';

const Featured = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(4);

  const featuredItems = [
    {
      id: 1,
      type: 'achievement',
      title: "Participated in Grid 6.0",
      platform: "Flipkart Grid 6.0",
      date: "August 2024",
      image: "/featured/flipkart6.0.jpg",
      pinned: false,
    },
    
    {
      id: 2,
      type: 'achievement',
      title: "Placed in Top 10 teams",
      platform: "InnoHacks 2024",
      date: "March 2024",
      image: "/featured/Innohacks.jpg",
      pinned: false,
    },
    {
      id: 3,
      type: 'social',
      title: "HTML CSS BootCamp",
      platform: "Lets Upgrade",
      date: "August 2023",
      image: "/featured/htmlCss.jpg",
      pinned: false,
    },
    {
      id: 4,
      type: 'achievement',
      title: "HackOn With Amazon Season 4",
      platform: "Amazon",
      date: "June 2024",
      image: "/featured/amazon.jpg",
      pinned: false,
    },
    {
      id: 5,
      type: 'achievement',
      title: "Code Cubicle 2.0",
      platform: "Geek Room",
      date: "July 2024",
      image: "/featured/CodeCubicle.jpg",
      pinned: false,
    },
    {
      id: 6,
      type: 'social',
      title: "DevTown Community",
      platform: "DevTown",
      date: "September 2023",
      image: "/featured/Devtown.jpg",
      pinned: false,
    },
    {
      id: 7,
      type: 'achievement',
      title: "Secured AIR 190 in Code Combat",
      platform: "Coding Ninjas",
      date: "May 2023",
      image: "/featured/codeCombat.jpg",
      pinned: false,
    },
    {
      id: 8,
      type: 'achievement',
      title: "Secured 2nd position in AM Hackathon",
      platform: "AMHacks IGDTU",
      date: "April 2025",
      image: "/featured/amHacks.jpg",
      pinned: true,
    },
    {
      id: 9,
      type: 'achievement',
      title: "Secured 1st position in Buildathon",
      platform: "Material Plus",
      date: "August 2025",
      image: "/featured/buildathon.jpg",
      pinned: true,
    }
  ].sort((a, b) => {
    // First sort by pinned status
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    // Then sort by date for items with the same pinned status
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 968) {
        setDisplayCount(3);
      } else {
        setDisplayCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleItems = showAll ? featuredItems : featuredItems.slice(0, displayCount);
  const hasMoreItems = featuredItems.length > displayCount;

  return (
    <section className="featured section" id="featured">
      <h2 className="section__title">Featured</h2>
      <span className="section__subtitle">Achievements & Social Updates</span>

      <div className="featured__container container grid">
        {visibleItems.map((item) => (
          <article className="featured__card" key={item.id}>
            <div className="featured__image">
              <img src={item.image} alt={item.title} />
              <div className="featured__platform">
                <i className={`uil ${
                  item.type === 'social' ? 'uil-share-alt' : 'uil-award'
                }`}></i>
                {item.platform}
              </div>
              {item.pinned && (
                <div className="featured__pin">
                  <i className="uil uil-bookmark"></i>
                </div>
              )}
            </div>
            <div className="featured__content">
              <h3 className="featured__title">{item.title}</h3>
              <span className="featured__date">{item.date}</span>
            </div>
          </article>
        ))}
      </div>

      {hasMoreItems && (
        <div className="featured__view-more">
          <button 
            className="featured__view-more-btn" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View More'}
            <i className={`bx ${showAll ? 'bx-chevron-up' : 'bx-chevron-down'} featured__view-more-icon`}></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default Featured;
