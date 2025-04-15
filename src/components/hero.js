import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-max-width thq-section-padding">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button2">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero-content2">
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image6Src:
    'https://images.unsplash.com/photo-1585165130758-f1586c96354a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1586114728926-fc10c981b7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1639600281191-ebb5407e59b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Get Started',
  image7Alt: 'Hero Image',
  image2Alt: 'Website Design',
  image4Src:
    'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTA0MHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Offering top-notch white label services for creative copy, website design, packaging, and SEO to help your clients succeed.',
  image9Alt: 'Hero Image',
  image12Src:
    'https://images.unsplash.com/photo-1617024068348-43a5a9b618da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Packaging Services',
  image1Src:
    'https://images.unsplash.com/photo-1569481707596-1759a001251a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTA0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Hero Image',
  heading1: "Unlock Your Brand's Potential with White Label Services",
  image10Src:
    'https://images.unsplash.com/photo-1553394966-0b093c3af063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTA0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Src:
    'https://images.unsplash.com/photo-1581111013354-bb08a686a73d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1600172454520-134a542a2255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1571990678217-9ea41a3a06e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Alt: 'Hero Image',
  action2: 'Learn More',
  image12Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image1Alt: 'Creative Copy',
  image7Src:
    'https://images.unsplash.com/photo-1535270969328-27b968457185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'SEO Services',
  image8Src:
    'https://images.unsplash.com/photo-1605952276257-59536038fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc0MTAzOXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero.propTypes = {
  image6Src: PropTypes.string,
  image2Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Src: PropTypes.string,
  action1: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Src: PropTypes.string,
  content1: PropTypes.string,
  image9Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image10Alt: PropTypes.string,
  heading1: PropTypes.string,
  image10Src: PropTypes.string,
  image11Src: PropTypes.string,
  image3Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.string,
  image12Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image8Src: PropTypes.string,
}

export default Hero
