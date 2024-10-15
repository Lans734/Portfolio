import React, { useState, useEffect } from 'react';
import './Portfolio.css'; 
import LandingImage from './Landing.png'; 
import ProfileImage from './Profile.jpg';

const SimplePage = () => {
  const [loading, setLoading] = useState(false); 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer); 
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    setLoading(true); 

    setTimeout(() => {
      window.open("https://wp2-faculty.vercel.app/login", ); 
      setLoading(false); 
    }, 800); 
  };

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const checkFade = () => {
        const triggerBottom = window.innerHeight * 0.8; 
        const triggerTop = window.innerHeight * 0.3; 

        fadeElements.forEach(element => {
            const boxTop = element.getBoundingClientRect().top;
            const boxBottom = element.getBoundingClientRect().bottom;

            if (boxTop < triggerBottom && boxBottom > triggerTop) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkFade);
    checkFade();

    return () => {
        window.removeEventListener('scroll', checkFade);
    };
  }, []);

  return (
    <div className="body-container">
      <div className="page-container">
        <section className="profile-section fade-in">
          <div className="profile-box flex items-center border p-4 shadow-lg">
            <img 
              src={ProfileImage} 
              alt="Profile"
              className="profile" 
            />
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
              rel="stylesheet"
            />
            <link 
              href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" 
              rel="stylesheet"
            />
            <div>
              <p className="profile-name text-xl font-semibold">Lance Enric Estrella</p>
              <p className="profile-name1 text-xl font-semibold">Front-End Developer / Quality Assurance Tester</p>
              <div className="contact-info mt-4">
                <p className="profile-bio text-gray-600 d-flex align-items-center">
                  <i className="bi bi-envelope-fill me-2"></i>
                  Email: **********************
                </p>
                <p className="profile-bio text-gray-600 d-flex align-items-center">
                  <i className="bi bi-telephone-fill me-2"></i>
                  Contact: ***********
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider between Profile and Content */}
        <div className="divider"></div>

        <main className="main-content fade-in mt-4">
          <div className="content-box">
            <h2 className="content-text text-2xl d-flex align-items-center">
              <i className="bi bi-person-circle me-2"></i>
              About Me
            </h2>
            <p className="content-text">
              "I am a recent graduate with a Bachelor of Science in Information Technology at Bulacan State University, specializing in Web and Mobile application development with a passion for improving skills and learning in the IT world, an aspiring Front End Developer or Quality Assurance professional."
            </p>
          </div>

          {/* Divider between Content Boxes */}
          <div className="divider"></div>

<div className="content-box">
  <h2 className="content-text text-2xl d-flex align-items-center">
    <i className="bi bi-mortarboard me-2"></i> {/* Graduation Cap Icon */}
    Educational Attainment  (College Level)
  </h2>
  <p className="content-text">
  Bachelor of Science in Information Technology
  (Bulacan State University - Main Campus) 
  
  </p>
</div>

{/* Additional content boxes with dividers */}
<div className="divider"></div>

<div className="content-box">
  <h2 className="content-text text-2xl d-flex align-items-center">
    <i className="bi bi-mortarboard me-2"></i> {/* Graduation Cap Icon */}
    Educational Attainment  (Senior High School)
  </h2>
  <p className="content-text">
  Science, Technology, Engineering, and Mathematics (La Consolation University Philippines)
  </p>
</div>


          <div className="divider"></div>

          <div className="content-box">
            <h2 className="content-text text-2xl d-flex align-items-center">
              <i className="bi bi-tools me-2"></i>
              Skills
            </h2>
            <p className="content-text">
              "Manual and Automation Testing"
            </p>
          </div>

          <div className="divider"></div>

          <div className="content-box">
            <h2 className="content-text text-2xl d-flex align-items-center">
              <i className="bi bi-tools me-2"></i>
              Skills
            </h2>
            <p className="content-text">
             "Knowledege of using Firebase"
            </p>
          </div>
        </main>



        <main className="main-content fade-in mt-4">
          <div className="content-box2">
            <h2 className="content-text text-2xl d-flex align-items-center">
              <i className="bi bi-person-circle me-2"></i>
              About Me
            </h2>
            <p className="content-text">
              "I am a recent graduate with a Bachelor of Science in Information Technology at Bulacan State University, specializing in Web and Mobile application development with a passion for improving skills and learning in the IT world, an aspiring Front End Developer or Quality Assurance professional."
            </p>
          </div>

          {/* Divider between Content Boxes */}
          <div className="divider"></div>

          <div className="content-box2">
  <h2 className="content-text text-2xl d-flex align-items-center">
    <i className="bi bi-book me-2"></i>
    Front-End Development
  </h2>
  <p className="content-text">
    "Knowledge in Front-end development (HTML, CSS, JavaScript)"
  </p>
</div>

{/* Additional content boxes with dividers */}
<div className="divider"></div>

<div className="content-box2">
  <h2 className="content-text text-2xl d-flex align-items-center">
    <i className="bi bi-book me-2"></i>
    ReactJS
  </h2>
  <p className="content-text">
    "Understanding of ReactJS and its component-based architecture."
  </p>
</div>

<div className="divider"></div>

<div className="content-box2">
  <h2 className="content-text text-2xl d-flex align-items-center">
    <i className="bi bi-book me-2"></i>
    Testing Methodologies
  </h2>
  <p className="content-text">
    "Knowledge in manual and automation testing techniques."
  </p>
</div>

<div className="divider"></div>

<div className="content-box2">
  <h2 className="content-text text-2xl d-flex align-items-center">
    <i className="bi bi-book me-2"></i>
    Firebase
  </h2>
  <p className="content-text">
    "Familiarity with using Firebase for backend services."
  </p>
</div>

        </main>





        <div className="divider"></div>

        <section className="portfolio-section fade-in">
          <div className="content-box1"> 
            <h2 className="portfolio-title">PORTFOLIO</h2>
            <div className="portfolio-center">
              {loading ? ( 
                <div className="loader"></div> 
              ) : (
                <a 
                  href="#!" 
                  onClick={handleLinkClick} 
                  className="portfolio-box"
                >
                  <img 
                    src={LandingImage}  
                    alt="Project Preview" 
                    className="portfolio-preview-image"
                  />
                  <p className="portfolio-box-description">Project: Faculty Website</p>
                  <p className="portfolio-box-description">A responsive faculty website showcasing different departments and faculty members.</p>
                </a>
              )}
            </div>
          </div> 
        </section>
      </div>
      
      <footer className="footer">
        <p className="footer-text">© 2024 Note this page is made using ReactJS. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SimplePage;
