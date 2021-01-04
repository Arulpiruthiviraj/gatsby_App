import React, { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';

import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';
import video1 from '../assets/muqo/video/video1.mp4';
import video2 from '../assets/muqo/video/video2.mp4';
import video3 from '../assets/muqo/video/video3.mp4';
import video4 from '../assets/muqo/video/video4.mp4';
import video5 from '../assets/muqo/video/video5.mp4';
import video6 from '../assets/muqo/video/video6.mp4';
import video7 from '../assets/muqo/video/video7.mp4';
import video8 from '../assets/muqo/video/video8.mp4';
import video9 from '../assets/muqo/video/video9.mp4';
import video10 from '../assets/muqo/video/video10.mp4';
import { Container, Col, Row } from 'react-bootstrap';
import { ImQrcode } from 'react-icons/im';
import { BsCameraVideo } from 'react-icons/bs';
import { FaSearchengin } from 'react-icons/fa';
import userProfileScreenImage from '../assets/muqo/images/profileMuqoAppScree.png';

const IndexPage = () => {
  const [playingVideo, setPlayingVideo] = useState(video1);

  useEffect(() => {
    var bool = true;

    setInterval(() => {
      if (bool) {
        setPlayingVideo(video2);
        bool = !bool;
      } else {
        setPlayingVideo(video3);

        bool = !bool;
      }
    }, 1000 * 10);
  }, []);
  return (
    <Layout>
      <Header />

      <header className="masthead">
        <div className="container h-100">
          <div
            style={{
              padding: '10',
              textAlign: 'center',
              top: '65px',
              position: 'relative',
            }}
          >
            <h6>Music Meets Social Media</h6>
            <h6>#MusicMovement</h6>
          </div>
          <div className="row h-100">
            <div className="col-lg-7 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mb-5">Create,Explore and Share Music Videos</h1>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                  consequat urna. Morbi a bibendum metus. Donec scelerisque
                  sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in
                  pretium orci vestibulum eget. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum
                  lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer
                  eu nibh at nisi ullamcorper sagittis id vel leo. Integer
                  feugiat faucibus libero, at maximus nisl suscipit posuere
                </h6>
                <h2 className="section-heading">Download Muqo Now</h2>
                <p>
                  Our app is available on any mobile device! Download now to get
                  started!
                </p>
                <div className="badges">
                  <a className="badge-link" href="/#">
                    <img
                      src={gplay}
                      alt=""
                      style={{ width: '200px', height: 'auto' }}
                    />
                  </a>
                  <a className="badge-link" href="/#">
                    <img
                      src={astore}
                      alt=""
                      style={{ width: '200px', height: 'auto' }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-auto">
              <div className="device-container">
                <div className="device-mockup iphone6_plus portrait black">
                  <div className="device">
                    <div className="screen">
                      {/* <img src={demo1} className="img-fluid" alt="" /> */}
                      {/* <iframe
                    width="560"
                    height="315"
                    src="//www.youtube.com/embed/f890SC1schE"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe> */}

                      <div id="video-container">
                        <video autoPlay loop muted className="fillWidth">
                          <source src={playingVideo} type="video/mp4" />
                          {/* <source
                        src="http://yourwebsite.com/your-video-file.ogg"
                        type="video/ogg"
                      />
                      <source
                        src="http://yourwebsite.com/your-video-file.webm"
                        type="video/webm"
                      /> */}
                          Your browser does not support the video tag. I suggest
                          you upgrade your browser.
                        </video>
                      </div>
                    </div>
                    <div className="button"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="download bg-primary text-center" id="features">
        <Container>
          <Row>
            <Col sm>
              {' '}
              <BsCameraVideo size={70} />
              <h4>Make Your Own Videos</h4>
              <h6>
                In some cases you may need to change the base class "prefix" of
                one or more Components. You can control how a Component prefixes
                its classes locally by changing the bsPrefix prop. Or globally
                via the ThemeProvider Component.
              </h6>
            </Col>
            <Col sm>
              {' '}
              <FaSearchengin size={70} />
              <h4>Make Your Own Videos</h4>
              <h6>
                In some cases you may need to change the base class "prefix" of
                one or more Components. You can control how a Component prefixes
                its classes locally by changing the bsPrefix prop. Or globally
                via the ThemeProvider Component.
              </h6>
            </Col>
            <Col sm>
              <ImQrcode size={70} />
              <h4>Make Your Own Videos</h4>
              <h6>
                In some cases you may need to change the base class "prefix" of
                one or more Components. You can control how a Component prefixes
                its classes locally by changing the bsPrefix prop. Or globally
                via the ThemeProvider Component.
              </h6>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features" id="features">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Satrt You Music Career with Muqo</h2>

            <hr />
          </div>
          <Row>
            <Col
              sm={true}
              style={{
                textAlign: 'center',
                alignItems: 'center',
                color: 'black',
              }}
            >
              <img src={userProfileScreenImage} alt="profile screen" />
              <h6
                style={{
                  textAlign: 'center',
                  alignItems: 'center',
                  color: 'black',
                }}
              >
                Show Your Talent
              </h6>
            </Col>
            <Col
              sm={true}
              style={{
                textAlign: 'center',
                alignItems: 'center',
                color: 'black',
              }}
            >
              {' '}
              <img src={userProfileScreenImage} alt="profile screen" />
              <h6
                style={{
                  textAlign: 'center',
                  color: 'black',
                }}
              >
                Gain Subcribers
              </h6>
            </Col>
            <Col
              sm={true}
              style={{
                textAlign: 'center',
                alignItems: 'center',
                color: 'black',
              }}
            >
              {' '}
              <img src={userProfileScreenImage} alt="profile screen" />
              <h6>Get Paid for What you love</h6>
            </Col>
          </Row>
        </div>
      </section>

      {/* <Footer /> */}
    </Layout>
  );
};

export default IndexPage;
