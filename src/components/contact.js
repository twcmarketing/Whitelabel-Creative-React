import React from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-contact20 thq-section-padding">
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-content1">
            <h2 className="contact-text2 thq-heading-2">{props.heading1}</h2>
            <p className="contact-text3 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-contact-info1">
              <div className="contact-content3">
                <h3 className="contact-text4 thq-heading-3">Email</h3>
                <p className="contact-text5 thq-body-large">{props.content3}</p>
              </div>
              <span className="contact-email thq-body-small">
                {props.email1}
              </span>
            </div>
          </div>
          <div className="contact-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact-contact-info2">
              <div className="contact-content5">
                <h3 className="contact-text6 thq-heading-3">Phone</h3>
                <p className="contact-text7 thq-body-large">{props.content4}</p>
              </div>
              <span className="contact-phone thq-body-small">
                {props.phone1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  content4: 'Follow us on social media for updates and tips:',
  heading1: 'Contact Us',
  phone1: '+1 (778) 903-1350',
  email1: 'contact@whitelabeled.ca',
  content3: 'We are available Monday to Friday, from 9am to 5pm.',
  content2:
    'Fill out the form below and we will get back to you as soon as possible.',
  content1:
    'Get in touch with us for all your white label service needs. We are here to help you grow your business.',
}

Contact.propTypes = {
  content4: PropTypes.string,
  heading1: PropTypes.string,
  phone1: PropTypes.string,
  email1: PropTypes.string,
  content3: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
}

export default Contact
