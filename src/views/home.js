import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Whitelabel Creative - Whitelabeled.ca</title>
      </Helmet>
      <Navbar
        link3="Portfolio"
        heading1="Unlock Your Brand's Potential with White Label Services"
      ></Navbar>
      <Hero
        link4="About Us"
        heading1="Unlock Your Brand's Potential with White Label Services"
      ></Hero>
      <Features1
        feature1Title="Creative Website Designs"
        feature2Title="Custom Packaging Design"
      ></Features1>
      <CTA></CTA>
      <Features2
        feature1Title="Custom Website Design"
        feature2Title="Professional Packaging Design"
        feature3Title="SEO Optimization"
      ></Features2>
      <Pricing
        content2="Choose from our flexible pricing plans for digital creative services to suit your needs and budget. Whether you need creative copy, website design, packaging, or SEO services, we have a plan for you. Contact us to discuss customized pricing options."
        heading1="Pricing plan"
        feature2Title="Professional Packaging Design"
      ></Pricing>
      <Steps></Steps>
      <Contact
        email1="contact@whitelabeled.ca"
        phone1="+1 (778) 903-1350"
        heading1="Contact Us"
      ></Contact>
      <Footer
        content2="© 2025 Whitelabel Creative."
        content3="Designed by Whitelabel Creative"
      ></Footer>
    </div>
  )
}

export default Home
