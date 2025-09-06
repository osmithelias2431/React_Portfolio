import './App.css'
import Typewriter from 'typewriter-effect';
import NellyImage from './assets/Nelly_Profile_Pic.JPG';
import TravelImage from './assets/travel_image.jpg';
import NailImage from './assets/my_nail_image.jpg';
import AppImage from './assets/app_image.png';

function App() {
  // Hamburger Menu
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", mobileMenu);

function mobileMenu(e) {
  console.log(e);
  e.target.classList.toggle("active");
  // navMenu.classList.toggle("active");
}

const toggleMenu = (e) => {
  e.target.classList.toggle("active");
  // navMenu.classList.remove("active");
}

// document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
//     hamburger.classList.remove('active');
//     navMenu.classList.remove('active');
// }))

//Typewriter Effect
// const typeWriterText = document.querySelector('#hero-header');
// const text = "Hi, I'm Oneilia";

// function typeWriter(element, text, i = 0) {
//     if (i === 0) {
//         element.textContent = ""; // Clear the text content before starting
//     }
    
//     element.textContent += text[i];
    
//     if (i === text.length - 1) {
//     return;
// }
//   setTimeout(() => typeWriter(element, text, i + 1), 100); 
  
// }

// typeWriter(typeWriterText, text); 


  return (
    <>
      <h4 id="page-title">Portfolio</h4>
    <div className="header">
        
    {/* <!-- Navigation Bar--> */}
        <nav id="nav-bar">
            <div className="nav-menu" onClick={mobileMenu}>
                <a href="#home" className="nav-item" onClick= {toggleMenu}>Home</a>
                <a href="#about" className="nav-item" onClick= {toggleMenu}>About</a>
                <a href="#projects" className="nav-item" onClick= {toggleMenu}>Projects</a>
                <a href="#contact-form" className="nav-item" onClick= {toggleMenu}>Contact</a>
            </div>

            <div className="hamburger" onClick={mobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </div>
    {/* <!-- Hero Section --> */}
     <header id="home"> 
        <Typewriter id="hero-header"
  onInit={(typewriter) => {
    typewriter.typeString("Hi, I'm Oneilia!")
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      // .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>      
        <p>Software Development Trainee</p>
        <button type="button" id="hero-button"><span>Check Out My Work</span></button>
     </header>
    {/* <!-- About Section --> */}
    <section id="about">
        <h2 id="about-header">About Me</h2>
        <div className="about-content">
            <img src={NellyImage} alt="Oneilia's Profile Picture" className="profile-pic"/>
            <div className="about-text">
                <p><strong>A motivated woman building knowledge about software.</strong>
                <br/><br/>I'm a software development trainee studying Javascript and Python. I'm eager to learn more about creating eye-catching webpages.</p>   
                <div className="skills">
                    <p className="skills-item">NPower Student</p>
                    <p className="skills-item">HTML</p> 
                    <p className="skills-item">CSS</p>
                </div>                    
            </div>
        </div>
    </section>

    {/* <!-- Projects Section --> */}
    <main>
        <section id="projects">
            <h1 className="project-header">My Projects</h1>
            <div className="project-container">
                <div className="project-wrapper">
                    <div className="card">
                        <img src={TravelImage} alt="Travel Review App" className="project-image"/>
                        <div className="card-content">
                            <h2>Travel Review App</h2>
                            <p className="card-text">An app to review travel destinations built with Javascript.</p>
                            <button type="button" className="project-button">View Project</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={NailImage} alt="Nail Selector App" className="project-image"/>
                        <div className="card-content">
                            <h2>Nail Selector App</h2>
                            <p className="card-text">An app that assists in choosing nail designs.</p>
                            <button type="button" className="project-button">View Project</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={AppImage} alt="App Inventor" className="project-image"/>
                        <div className="card-content">
                            <h2>App Inventor</h2>
                            <p className="card-text">Idea app.</p>
                            <button type="button" className="project-button">View Project</button>
                        </div>
                    </div>
                
                </div>
            </div>    

        </section>
    </main>
    {/* <!-- Contact Form--> */}
    <div id="contact-form">
    <fieldset id="fieldset">
        <form>
             <p id="contact-title" className="contact-item">Let's Connect!</p> 
             <label>
                <input type="text" id="contact-name" className="contact-item" name="name" placeholder="Your Name" required/>
             </label>
             <br/>
             <label>
                  <input type="email" className="contact-item" name="email" placeholder="Your Email Address" required/>
             </label>
             <br/>
             <label>
                <textarea id="contact-text" name="message" className="contact-item" placeholder="Feedback" required></textarea>
             </label>
             <br/>
             <button type="submit" id="contact-button" className="contact-item">Submit</button>
        </form>
    </fieldset>
    </div>
    <footer className="footer">
        <div className="social-links">
            <a href="#"><i className="fa fa-github"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
        </div>
        <p className="footer-text"><i className="fa fa-copyright"></i> Oneilia's Portfolio. All Rights Reserved.</p>
    </footer>
    </>
  )
}

export default App
