import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="about-container">
    <Header />
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-img-sm"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-img-lg"
      />
    </div>
  </div>
)
export default Home
