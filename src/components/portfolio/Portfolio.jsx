import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/TCTM.png'
import IMG2 from '../../assets/Project-mgt.png'
import IMG3 from '../../assets/Chat.png'


const Portfolio = () => {
  return (<>
    <section id='portfolio'>
      <h5>My Project</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio-item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Projecm-MGT-RMUTL</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/peerapatsiriai/Project-MGT-Back-end" className='btn'  target='_blank' rel="noreferrer">Github</a>
            <a href="/" className='btn btn-primary'  target='_blank' rel="noreferrer">View</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio-item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>TCTM Market Place</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/watchana/TCTM-Marketplace" className='btn'  target='_blank' rel="noreferrer">Github</a>
            <a href="/" className='btn btn-primary' target='_blank' rel="noreferrer">View</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio-item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Personal Chat App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/peerapatsiriai/Chat-App" className='btn'  target='_blank' rel="noreferrer">Github</a>
            <a href="/" className='btn btn-primary'  target='_blank' rel="noreferrer">View</a>
          </div>
        </article>
      </div>
    </section>
    </>
  )
}

export default Portfolio