import HeaderTop from '../components/HeaderTop/HeaderTop'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Works from '../components/Works/Works'
import '../styles/Home.css'
import Footer from '../components/Footer/Footer'
function Home() {
  return (
    <>
      <HeaderTop />
      <Navbar />
      <Hero />
      <Works />
      <Footer />
    </>
  )
}

export default Home