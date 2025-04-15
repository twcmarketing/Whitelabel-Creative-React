import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Position: 'Marketing Director, Company XYZ',
  review4:
    "We are thrilled with the results we've seen since partnering with Creative Copy. Their white label services have truly made a difference for our business.",
  author2Alt: 'Image of Jane Smith',
  author1Name: 'John Doe',
  author3Alt: 'Image of David Johnson',
  author3Src:
    'https://images.unsplash.com/photo-1679562768606-3c09b973a708?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'David Johnson',
  author4Position: 'COO, Tech Solutions Ltd.',
  review1:
    'Working with Creative Copy has been a game-changer for our business. Their white label services have exceeded our expectations.',
  author3Position: 'Founder, Startup123',
  author4Name: 'Sarah Williams',
  author4Alt: 'Image of Sarah Williams',
  content1: 'See what our clients have to say about our white label services.',
  author4Src:
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  author1Src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  review3:
    'Creative Copy has helped us elevate our brand with their white label services. Their attention to detail and dedication to quality are unmatched.',
  heading1: 'Testimonials',
  author2Name: 'Jane Smith',
  author1Position: 'CEO, Company ABC',
  review2:
    'I highly recommend Creative Copy for their exceptional white label services. They are professional, creative, and always deliver on time.',
  author2Src:
    'https://images.unsplash.com/photo-1481437642641-2f0ae875f836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial.propTypes = {
  author2Position: PropTypes.string,
  review4: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author3Name: PropTypes.string,
  author4Position: PropTypes.string,
  review1: PropTypes.string,
  author3Position: PropTypes.string,
  author4Name: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.string,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Src: PropTypes.string,
  review3: PropTypes.string,
  heading1: PropTypes.string,
  author2Name: PropTypes.string,
  author1Position: PropTypes.string,
  review2: PropTypes.string,
  author2Src: PropTypes.string,
}

export default Testimonial
