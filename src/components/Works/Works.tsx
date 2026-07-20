
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
  
  return (
    <section className="works">
      <div className="container">

        <h2>Наши работы</h2>

        <div className="works-slider">

          

          <div className="slider-window">
            <div className="works-track">
              {[...works, ...works].map((img, index) => (
                <div className="work-card" key={index}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>


          


        </div>

      </div>
    </section>
  )
}

export default Works