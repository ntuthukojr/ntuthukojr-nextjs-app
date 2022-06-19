import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
<>
  <title>Ntuthuko Jr Mashinini - Portfolio App</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
 
  <link
    href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700"
    rel="stylesheet"
  />
  <nav
    className="navbar navbar-expand-lg site-navbar navbar-light bg-light"
    id="pb-navbar"
  >
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-md-center"
        id="navbarsExample09"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="#section-about">
              ABOUT NTUTHUKO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section-contact">
              Get In touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section
    className="site-hero"
    style={{ backgroundImage: "url(images/IMG_6479.jpeg)" }}
    id="section-home"
    data-stellar-background-ratio="0.5"
  >
    <div className="container">
      <div className="row intro-text align-items-center justify-content-center">
        <div className="col-md-10 text-center pt-5">
          <h1 className="site-heading site-animate">
            <b>NTUTHUKO JR MASHININI</b>
          </h1>
         <p><b className="d-block text-white text-uppercase letter-spacing">
            Tech Enthusiast | Software Engineer | Disruptor
          </b></p> 
        </div>
      </div>
    </div>
  </section>
 

  <section className="site-section" id="section-about">
    <div className="container">
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
          <img
            src="images/ntuthuko.png"
            alt="Image placeholder"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-5 pl-lg-5">
          <div className="section-heading">
            <h2>
              Meet <strong>Ntuthuko</strong>
            </h2>
          </div>
          <p><i>You are as wise as to what you have been exposed to, Keep exposing yourself! - Ntuthuko Jr Mashinini</i></p>
         <p ><b>Ntuthuko Jr Mashinini is a Software Engineer professional graduated at the Durban University of
        technology.<br/> He is an ambitious young man that aims to build and uplift others as he rises.<br/> His goal is to be a well-renowned tech professional that has an excellent work ethic and incredible competency to enable him into a catalyst for change & growth wherever he sets his footprint.</b>
        </p>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="row mb-5 align-items-center">
     
        <div className="col-lg-5 pl-lg-5">
          <div className="section-heading">
            <h2>
              His Journey <strong>(Innovate Durban)</strong>
            </h2>
          </div>
          <p>His success obtained from his Software Development projects at DUT afforded him the opportunity to work Durban innovation agency called <b>Innovate Durban</b> for Project Development.</p>

        </div>
        <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
          <img
            src="images/innovate.jpg"
            alt="Image placeholder"
            className="img-fluid"
          />
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
          <img
            src="images/tour.jpg"
            alt="Image placeholder"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-5 pl-lg-5">
          <div className="section-heading">
            <h2>
              Tech awareness campaign
            </h2>
          </div>
          
         <p >Through his love for tech, Ntuthuko Began an awareness campaign, which aimed at giving out knowledge/advice to high school learners in townships about the Impact of 4IR across various career paths. 
        </p>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="row mb-5 align-items-center">
     
        <div className="col-lg-5 pl-lg-5">
          <div className="section-heading">
            <h2>
            Tech awareness campaign <b>(continued...)</b>
            </h2>
          </div>
          <p>The campaign gained traction and landed him an invitation to speak at The Durban
Business Fair <b>Youth Seminar</b> which had other young high-profile young people alongside him doing impactful things in society.</p>

        </div>
        <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
          <img
            src="images/icc.jpg"
            alt="Image placeholder"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>

  <section className="site-section" id="section-contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-5">
          <div className="section-heading text-center">
            <h2>
              
            </h2>
          </div>
        </div>
        <div className="col-md-7 mb-5 mb-md-0">
          <form action="" className="site-form">
            <h3 className="mb-5">Get In Touch</h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control px-3 py-4"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control px-3 py-4"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control px-3 py-4"
                placeholder="Your Phone"
              />
            </div>
            <div className="form-group mb-5">
              <textarea
                className="form-control px-3 py-4"
                cols={30}
                rows={10}
                placeholder="Write a Message"
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary  px-4 py-3"
                defaultValue="Send Message"
              />
            </div>
          </form>
        </div>
        <div className="col-md-5 pl-md-5">
          <h3 className="mb-5">My Contact Details</h3>
          <ul className="site-contact-details">
            <li>
              <span className="text-uppercase">Email</span>
              ntuthukojr07@gmail.com
            </li>
            <li>
              <span className="text-uppercase">Phone</span>
              +27 81 318 7642
            </li>
           
            <li>
              <span className="text-uppercase">Address</span>
              Amsterdam Dr, 
              Olivedale, 
              Randburg, 
              2188
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <footer className="site-footer">
    <div className="container">
      <div className="row mb-5">
        <p className="col-12 text-center">
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © 2022 All rights reserved | Powered by Ntuthuko Inc.
      
         
         
        </p>
      </div>

    </div>
  </footer>
  <script src="https://third-party-script.js" async />
  <script src="js/vendor/jquery.min.js" async />
  <script src="js/vendor/jquery-migrate-3.0.1.min.js" async />
  <script src="js/vendor/popper.min.js" async />
  <script src="js/vendor/bootstrap.min.js" async />
  <script src="js/vendor/jquery.easing.1.3.js" async />
  <script src="js/vendor/jquery.waypoints.min.js" async />
  <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" async />
  <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js" async />
  <script src="js/custom.js" async />
  

</>



  )
}
