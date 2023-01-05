import './styles.scss';
import React from 'react';
export default function MainFooter() {
  return (
    <>
      <footer className="marvel-menu-footer">
        <a className="menu-footer-logo" href="">
          <img src="https://i.postimg.cc/MZY0Q1nX/logo-Marvel.png" alt="" />
        </a>
        <nav className="menu-footer-primer-link" aria-label="Primary footer navigation">
          <ul>
            <li className="menu-footer-link">
              <a href="#">ABOUT MARVEL</a>
            </li>
            <li className="menu-footer-link">
              <a href="#">HELP/FAQS</a>
            </li>
            <li className="menu-footer-link">
              <a href="#">CAREERS</a>
            </li>
            <li className="menu-footer-link">
              <a href="#">INTERNSHIPS</a>
            </li>
          </ul>
        </nav>
        <nav className="menu-footer-segundo-link" aria-label="Primary footer navigation">
          <ul>
            <li className="menu-footer-link">
              <a href="#">ADVERTISING</a>
            </li>
            <li className="menu-footer-link">
              <a href="#">DISNEY+</a>
            </li>
            <li className="menu-footer-link">
              <a href="#">MARVELHQ.COM</a>
            </li>
            <li className="menu-footer-link">
              <a href="#">REDEEM DIGITAL COMICS</a>
            </li>
          </ul>
        </nav>
        <nav className="menu-footer-promo">
          <a className="menu-footer-promocion-link" href="#">
            <div className="menu-footer-promocion-imagen">
              <figure className="menu-footer-imagen">
                <img
                  className="menu-footer-promocion-imagen-isider"
                  src="https://i.postimg.cc/zv9WYm8f/insider-Logo.png"
                  alt="Marvel Insider"
                />
              </figure>
            </div>
            <div className="menu-footer-promocion-informacion">
              <h4 className="menu-footer-promocion-titulo">MARVEL INSIDER</h4>
              <p className="menu-footer-promocion-descripcion">
                Get Rewarded for Being a Marvel Fan
              </p>
            </div>
          </a>
          <div className="menu-footer-promocion">
            <a className="menu-footer-promocion-link" href="#">
              <div className="menu-footer-promocion-imagen">
                <figure className="menu-footer-imagen">
                  <img
                    className="menu-footer-promocion-imagen ilimitado"
                    src="https://i.postimg.cc/25H8qP38/unlimited.png"
                    alt="Marvel Insider"
                  />
                </figure>
              </div>
              <div className="menu-footer-promocion-informacion">
                <h4 className="menu-footer-promocion-titulo">MARVEL UNLIMITED</h4>
                <p className="menu-footer-promocion-descrpcion">
                  Acces Over 30,000+ Digital Comics
                </p>
              </div>
            </a>
          </div>
        </nav>
        <nav className="menu-footer-seguir icono-1">
          <h4 className="menu-footer-titulo">FOLLOW MARVEL</h4>
          <ul className="menu-footer-social-links footer-social">
            <li className="menu-footer-social-imagen">
              <a href="">
                <span>
                  <img className="icono" src="https://i.postimg.cc/KcNzCqnN/facebook.png" alt="" />
                </span>
              </a>
            </li>
            <li className="menu-footer-social-imagen">
              <a href="">
                <span>
                  <img className="icono" src="https://i.postimg.cc/W1SxvZ5x/twitter.png" alt="" />
                </span>
              </a>
            </li>
            <li className="menu-footer-social-imagen">
              <a href="">
                <span>
                  <img className="icono" src="https://i.postimg.cc/90KZTLXs/instagram.png" alt="" />
                </span>
              </a>
            </li>
            <li className="menu-footer-social-imagen">
              <a href="">
                <span>
                  <img className="icono" src="https://i.postimg.cc/HW9xfpqR/tumblr.png" alt="" />
                </span>
              </a>
            </li>
            <li className="menu-footer-social-imagen">
              <a href="">
                <span>
                  <img className="icono" src="https://i.postimg.cc/ZnCMFYpn/youtube.png" alt="" />
                </span>
              </a>
            </li>
            <li className="menu-footer-social-imagen">
              <a href="">
                <span>
                  <img className="icono" src="https://i.postimg.cc/nV4kgDcx/snapchat.png" alt="" />
                </span>
              </a>
            </li>
            <li className="menu-footer-social-imagen">
              <a href="">
                <span>
                  <img
                    className="icono"
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
