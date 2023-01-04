import './styles.scss';
import { AiFillFacebook } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';
import { ImInstagram } from 'react-icons/im';
import { IoLogoTumblr } from 'react-icons/io';
import { IoLogoYoutube } from 'react-icons/io';
import { GrSnapchat } from 'react-icons/gr';
import { RiPinterestFill } from 'react-icons/ri';

const img = require.context('@/assets/images', true);

export default function MainFooter() {
  return (
    <footer className="main-footer">
      <div className="mvl-main-footer">
        <div className="footer-logo">
          <img src={img(`./logo-footer.jpg`)} alt="logo-marvel" />
        </div>
        <div className="footer-links">
          <nav className="footer-links-left">
            <ul className="list">
              <li>ABOUT MARVEL</li>
              <li>HELP/FAQS</li>
              <li>CAREERS</li>
              <li>INTERNSHIPS</li>
            </ul>
          </nav>
          <nav className="footer-links-right">
            <ul className="list">
              <li>ADVERTISING</li>
              <li>DISNEY+</li>
              <li>MARVELHQ.COM</li>
              <li>REDEEM DIGITAL COMICS</li>
            </ul>
          </nav>
        </div>
        <div className="footer-promo">
          <div className="footer-promo-inside"></div>
          <div className="footer-promo-logo">
            <img className="logos" src={img(`./logo-insider.jpg`)} alt="logo-insider" />
          </div>
          <div className="footer-promo-info">
            <h4>MARVEL INSIDER</h4>
            <p>Get Rewarded for Being a Marvel Fan</p>
          </div>
          <div className="footer-promo-inside"></div>
          <div className="footer-promo-logo">
            <img className="logos" src={img(`./logo-unlimited.jpg`)} alt="logo-unlimited" />
          </div>
          <div className="footer-promo-info">
            <h4>MARVEL UNLIMITED</h4>
            <p>Access Over 30,000+ Digital Comics</p>
          </div>
        </div>
        <nav className="footer-media">
          <h4>FOLLOW MARVEL</h4>
          <ul className="footer-media-links">
            <li className="footer-media-img">
              <AiFillFacebook />
            </li>
            <li className="footer-media-img">
              <IoLogoTwitter />
            </li>
            <li className="footer-media-img">
              <ImInstagram />
            </li>
            <li className="footer-media-img">
              <IoLogoTumblr />
            </li>
            <li className="footer-media-img">
              <IoLogoYoutube />
            </li>
            <li className="footer-media-img">
              <GrSnapchat />
            </li>
            <li className="footer-media-img">
              <RiPinterestFill />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
