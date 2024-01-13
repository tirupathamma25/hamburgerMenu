import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="home-img-sm"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="home-img-lg"
      />
    </div>
  </div>
)
export default About
