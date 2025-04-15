import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="features2-feature1-title thq-heading-2">
                {props.feature1Title}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="features2-feature2-title thq-heading-2">
                {props.feature2Title}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal3"
          >
            <div className="features2-divider-container3">
              {activeTab === 2 && <div className="features2-container5"></div>}
            </div>
            <div className="features2-content3">
              <h2 className="features2-feature3-title thq-heading-2">
                {props.feature3Title}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1484562794569-bb5754cf5a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'SEO Optimization Image',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1585827792689-dbb22e0b034f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Custom Website Design',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1567201864585-6baec9110dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Unique and visually appealing website designs tailored to your brand.',
  feature2Description:
    'Eye-catching packaging designs that stand out on the shelves.',
  feature3Title: 'SEO Optimization',
  feature2ImgAlt: 'Professional Packaging Design Image',
  feature2Title: 'Professional Packaging Design',
  feature1ImgAlt: 'Custom Website Design Image',
  feature3Description:
    'Optimize your website for search engines to improve visibility and ranking.',
}

Features2.propTypes = {
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
}

export default Features2
