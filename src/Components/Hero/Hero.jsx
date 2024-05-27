
import "./Hero.css"
import logo from "../../assets/logo.jpg"

const Hero = () => {
  return (
    <div className="hero">
    <img src={logo} alt="" />
    <h1> <span>I'm Satyam Pandey,</span> frontend developer based in INDIA.</h1>
    <p>I'm a frontend developer from Noida , INDIA </p>
     <div className="hero-action">
      <div className="hero-connect">
        Connect with me
      </div>
      <div className="hero-resume">
        My resume
      </div>
     </div> 
    </div>
  )
}

export default Hero
