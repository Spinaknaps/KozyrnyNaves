import { useState } from 'react'
import './Works.css'

const works = [
  'assets/images/pr1.jpg',
  'assets/images/pr2.jpg',
  'assets/images/pr3.jpg',
  'assets/images/pr4.jpg',
  'assets/images/pr5.jpg',
  'assets/images/pr6.jpg',
]

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)

  
  const nextSlide = () => {
    if (currentSlide < works.length - 3) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <section className="works">
      <div className="container">

        <h2>Наши работы</h2>

        <div className="works-slider">

          <button
            className="slider-btn left"
            onClick={prevSlide}
          >
            ←
          </button>

          <div className="slider-window">
            <div className="works-track">
              {[...works, ...works].map((img, index) => (
                <div className="work-card" key={index}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>

          <button
            className="slider-btn right"
            onClick={nextSlide}
          >
            →
          </button>

        </div>

      </div>
    </section>
  )
}

export default Works