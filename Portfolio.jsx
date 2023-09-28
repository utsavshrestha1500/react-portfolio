import React from 'react'
import './portfolio.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'> 
     <h5> My Recent Work</h5>
     <h2> Portfolio</h2>

     <div className='container portfolio_container'>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <LazyLoadImage src={IMG1}  alt='' />
        </div>
        <h3> Frontend Development </h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/utsavshrestha1500' className='btn'> Github</a>
        <a href='https://www.linkedin.com/in/utsav-shrestha-2a4641128/' className='btn btn-primary' target='blank'> Live Demo</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <LazyLoadImage src={IMG2}  alt='' />
        </div>
        <h3> Content Creation</h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/utsavshrestha1500' className='btn'> Github</a>
        <a href='https://www.linkedin.com/in/utsav-shrestha-2a4641128/' className='btn btn-primary' target='blank'> Live Demo</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <LazyLoadImage src={IMG3}  alt='' />
        </div>
        <h3>Web Development </h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/utsavshrestha1500' className='btn'> Github</a>
        <a href='https://www.linkedin.com/in/utsav-shrestha-2a4641128/' className='btn btn-primary' target='blank'> Live Demo</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <LazyLoadImage src={IMG4}  alt='' />
        </div>
        <h3> Responsive Design </h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/utsavshrestha1500' className='btn'> Github</a>
        <a href='https://www.linkedin.com/in/utsav-shrestha-2a4641128/' className='btn btn-primary' target='blank'> Live Demo</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <LazyLoadImage src={IMG5}  alt='' />
        </div>
        <h3> Case Studies and Client Success Stories</h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/utsavshrestha1500' className='btn'> Github</a>
        <a href='https://www.linkedin.com/in/utsav-shrestha-2a4641128/' className='btn btn-primary' target='blank'> Live Demo</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <LazyLoadImage src={IMG6}  alt='' />
        </div>
        <h3>SEO and Digital Marketing </h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/utsavshrestha1500' className='btn'> Github</a>
        <a href='https://www.linkedin.com/in/utsav-shrestha-2a4641128/' className='btn btn-primary' target='blank'> Live Demo</a>
        </div>
      </article>

     </div>
    </section>
  )
}

export default Portfolio