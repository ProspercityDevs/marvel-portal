import './styles.scss';
import React from 'react';
export default function MainFooter() {
  return (
    <>
      <footer className="mvl-main-footer">
        <a className="main-footer-logo" href="">
          <img src="https://i.postimg.cc/MZY0Q1nX/logo-Marvel.png" alt="" />
        </a>
        <nav className="main-footer-first-links" aria-label="Primary footer navigation">
          <ul>
            <li className="main-footer-link">
              <a href="#">ABOUT MARVEL</a>
            </li>
            <li className="main-footer-link">
              <a href="#">HELP/FAQS</a>
            </li>
            <li className="main-footer-link">
              <a href="#">CAREERS</a>
            </li>
            <li className="main-footer-link">
              <a href="#">INTERNSHIPS</a>
            </li>
          </ul>
        </nav>
        <nav className="main-footer-second-links" aria-label="Primary footer navigation">
          <ul>
            <li className="main-footer-link">
              <a href="#">ADVERTISING</a>
            </li>
            <li className="main-footer-link">
              <a href="#">DISNEY+</a>
            </li>
            <li className="main-footer-link">
              <a href="#">MARVELHQ.COM</a>
            </li>
            <li className="main-footer-link">
              <a href="#">REDEEM DIGITAL COMICS</a>
            </li>
          </ul>
        </nav>
        <nav className="main-footer-promo">
          <a className="main-footer-promotions-link" href="#">
            <div className="main-footer-promotions-image-wrapper">
              <figure className="main-footer-image-wrapper">
                <img
                  className="main-footer-promotions-image-isider"
                  src="https://i.postimg.cc/zv9WYm8f/insider-Logo.png"
                  alt="Marvel Insider"
                />
              </figure>
            </div>
            <div className="main-footer-promotions-info">
              <h4 className="main-footer-promotions-title">MARVEL INSIDER</h4>
              <p className="main-footer-promotions-description">
                Get Rewarded for Being a Marvel Fan
              </p>
            </div>
          </a>
          <div className="main-footer-promotions">
            <a className="main-footer-promotions-link" href="#">
              <div className="main-footer-promotions-image-wrapper">
                <figure className="main-footer-image-wrapper">
                  <img
                    className="main-footer-promotions-image unlimited"
                    src="https://i.postimg.cc/25H8qP38/unlimited.png"
                    alt="Marvel Insider"
                  />
                </figure>
              </div>
              <div className="main-footer-promotions-info">
                <h4 className="main-footer-promotions-title">MARVEL UNLIMITED</h4>
                <p className="main-footer-promotions-description">
                  Acces Over 30,000+ Digital Comics
                </p>
              </div>
            </a>
          </div>
        </nav>
        <nav className="main-footer-follow icono">
          <h4 className="main-footer-title">FOLLOW MARVEL</h4>
          <ul className="main-footer-social-links footer-social">
            <li className="main-footer-social-img">
              <a href="">
                <span>
                  <img className="icons" src="https://i.postimg.cc/KcNzCqnN/facebook.png" alt="" />
                </span>
              </a>
            </li>
            <li className="main-footer-social-img">
              <a href="">
                <span>
                  <img className="icons" src="https://i.postimg.cc/W1SxvZ5x/twitter.png" alt="" />
                </span>
              </a>
            </li>
            <li className="main-footer-social-img">
              <a href="">
                <span>
                  <img className="icons" src="https://i.postimg.cc/90KZTLXs/instagram.png" alt="" />
                </span>
              </a>
            </li>
            <li className="main-footer-social-img">
              <a href="">
                <span>
                  <img className="icons" src="https://i.postimg.cc/HW9xfpqR/tumblr.png" alt="" />
                </span>
              </a>
            </li>
            <li className="main-footer-social-img">
              <a href="">
                <span>
                  <img className="icons" src="https://i.postimg.cc/ZnCMFYpn/youtube.png" alt="" />
                </span>
              </a>
            </li>
            <li className="main-footer-social-img">
              <a href="">
                <span>
                  <img className="icons" src="https://i.postimg.cc/nV4kgDcx/snapchat.png" alt="" />
                </span>
              </a>
            </li>
            <li className="main-footer-social-img">
              <a href="">
                <span>
                  <img
                    className="icons"
                    src="https://i.postimg.cc/MHnjWg2g/pinterest2.png"
                    alt=""
                  />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}