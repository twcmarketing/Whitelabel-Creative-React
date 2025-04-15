import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="steps-text10 thq-heading-2">
              Discover the Power of Our Products
            </h2>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="steps-text11 thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text12 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text13 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="steps-text14 thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text15 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text16 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="steps-text17 thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text18 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text19 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="steps-text20 thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text21 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text22 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step3Title: 'Development & Implementation',
  step1Description:
    'We start by understanding your needs and goals to provide a tailored solution for your business.',
  step4Description:
    'We conduct thorough testing to ensure everything works perfectly before delivering the final product to you.',
  step4Title: 'Quality Assurance & Delivery',
  step2Title: 'Design Phase',
  step2Description:
    'Our team of creative experts will craft unique designs that resonate with your brand identity.',
  step1Title: 'Initial Consultation',
  step3Description:
    'Once the design is approved, we proceed with the development phase and implement the necessary features.',
}

Steps.propTypes = {
  step3Title: PropTypes.string,
  step1Description: PropTypes.string,
  step4Description: PropTypes.string,
  step4Title: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step3Description: PropTypes.string,
}

export default Steps
