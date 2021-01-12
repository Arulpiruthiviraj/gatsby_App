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
import Video from '../components/Video';

const IndexPage = () => {
  const sectionOfVideos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
  ];
  const [selectedVideo, setSelectedVideo] = useState(video1);
  console.log(selectedVideo);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedVideo(video5);
    }, 5000);
  }, []);

  // useEffect(() => {
  //   var bool = true;

  //   setInterval(() => {
  //     if (bool) {
  //       setSectionOfVideos([video2, video4, video6, video8, video10]);
  //       bool = !bool;
  //     } else {
  //       setSectionOfVideos([video1, video3, video5, video7, video9]);

  //       bool = !bool;
  //     }
  //   }, 1000 * 10);
  // }, []);

  return (
    <Layout>
      <Header />

      <header
        className="masthead"
        id="page-top"
        style={{ padding: '0 0 90px  0' }}
      >
        <div className="container h-100">
          <div
            style={{
              padding: '10',
              textAlign: 'center',
              top: '65px',
              position: 'relative',
            }}
          >
            <h6 style={{ fontFamily: "'Redressed', cursive", fontSize: 40 }}>
              Music Meets Social Media
            </h6>
            <h6
              style={{
                fontFamily: "'Lobster Two', cursive",
                fontSize: 35,
                color: 'red',
              }}
            >
              #MusicMovement
            </h6>
          </div>
          <div className="row h-100">
            <div className="col-lg-7 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mb-5" style={{ fontFamily: 'Special Elite' }}>
                  Create,Explore and Share Music Videos
                </h1>
                <p style={{ padding: '0', fontFamily: 'Sacramento' }}>
                  Your all-in-one music destination. Mq Music enables musicians
                  around the world to pursue a full time music career with
                  weekly payouts, daily virtual concerts and fan subscriptions.
                  Mq Music provides music fans with a social music experience
                  like none other. Your music tribe lives here - listen to
                  music, watch music content and create your own music videos.
                </p>
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
                      <Video video={selectedVideo} />
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
                Make your own music videos: Record personal music videos,
                whether it's a dance challenge or a song cover you're the
                rockstar here.
              </h6>
            </Col>
            <Col sm>
              {' '}
              <FaSearchengin size={70} />
              <h4>Explore Music Content</h4>
              <h6>
                Explore music content: Browse different music categories and
                discover the latest trends, songs and artists.
              </h6>
            </Col>
            <Col sm>
              <ImQrcode size={70} />
              <h4>Refer & Receive</h4>
              <h6>
                Every referral is worth $5 of in app money. You can receive
                music merchandise, tickets and musician subscriptions.
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
