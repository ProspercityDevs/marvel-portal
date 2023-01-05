import './styles.scss';
// import { IoLogoFacebook } from "react-icons/io";
// import { IoLogoTwitter } from "react-icons/io";
// import { ImInstagram } from "react-icons/im";
// import { IoLogoTumblr } from "react-icons/io";
// import { IoLogoYoutube } from "react-icons/io";
// import { BsSnapchat } from "react-icons/bs";
// import { IoLogoPinterest } from "react-icons/io";


export default function MainFooter() {
  return (
    <footer>
      <div className='mvl-main-footer'>
        <div className='Container-footer'>
          <footer className="main-footer" data-top-component="footer" data-page-position="footer">
            <div className='Contedor-1'>
              <div className='Section-1_Container-1_Links'>
                <a className="main-footer__logo">
                  <span className="icon--svg main-footer__logo--svg" aria-hidden="true">
                    <img src="https://www.marvel.com/static/images/favicon/mstile-150x150.png"></img>
                  </span>
                </a>

                <nav className="main-footer__primary-links" aria-label="Navegación de pie de página principal">
                  <ul>
                    <li className="main-footer__link">
                      <a className='Acerca-de-Marvel'> ABOUT MARVEL</a>
                    </li>

                    <li className="main-footer__link">
                      <a> HELP/FAQS</a>
                    </li>

                    <li className="main-footer__link">
                      <a>CAREERS</a>
                    </li>

                    <li className="main-footer__link">
                      <a> INTERNSHIPS</a>
                    </li>
                  </ul>
                </nav>

                <nav className="main-footer__secondary-links" aria-label="Navegación de pie de página secundario">
                  <ul>
                    <li className="main-footer__link_1">
                      <a>ADVERTISING</a>
                    </li>

                    <li className="main-footer__link_1">
                      <a>DISNEY+</a>
                    </li>

                    <li className="main-footer__link_1">
                      <a>MARVELHQ.COM</a>
                    </li>

                    <li className="main-footer__link_1">
                      <a>REDEEM DIGITAL COMICS</a>
                    </li>
                  </ul>
                </nav>

                <nav className="main-footer__promo-links" aria-label="Navegación de pie de página promocional">
                  <div className="main-footer__promotion">
                    <a>
                      <img src="https://i.annihil.us/u/prod/marvel/html_pages_assets/marvel-insider-sellpage/qa/insider-logo.98ce6f6d.png" alt="" className='Marvel_Insider' />
                      <div className="main-footer__promotion-info">
                        <h4 className="main-footer__promotion-title">
                          <a>MARVEL INSIDER</a>
                        </h4>
                        <p className="main-footer__promotion-description">
                          <a>Get Rewarded for Being a Marvel Fan</a>
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="main-footer__promotion">
                    <a>
                      <img src="https://i.annihil.us/u/prod/marvel/images/mu/web/2021/mu-logo-full-light.png" alt="" className='
                    Marvel_Inlimited'/>
                      <div className="main-footer__promotion-info">
                        <h4 className="main-footer__promotion-title-2">
                          <a>MARAVILLA ILIMITADA</a>
                        </h4>
                        <p className="main-footer__promotion-description">
                          <a>Access Over 30,000+ Digital Comics</a>
                        </p>
                      </div>
                    </a>
                  </div>
                </nav>

                {/* <nav className="main-footer__follow" aria-label="Navegación de pie de página social">
                <h4 className="main-footer__title">
                <a>SIGUE A MARVEL</a>
                </h4>
    
              <ul className="social_links_footer__social-2">
                <li className='footer__social__img'>
                  <a><IoLogoFacebook/></a>
                </li>
    
                <li className='footer__social__img'>
                  <a><IoLogoTwitter/></a>
                </li>
    
                <li className='footer__social__img'>
                  <a><ImInstagram/></a>
                </li>
    
                <li className='footer__social__img'>
                  <a> <IoLogoTumblr/> </a>
                </li>
    
                <li className='footer__social__img'>
                  <a><IoLogoYoutube/></a>
                </li>
    
                <li className='footer__social__img'>
                  <a> <BsSnapchat/></a>
                </li>
    
                <li className='footer__social__img'>
                  <a> <IoLogoPinterest/></a>
                </li>
              </ul>
            </nav> */}

                {/* <div className="main-footer__legal-wrapper"> 
              <nav className="main-footer__legal_flex-wrapper_main-footer__legal-main" aria-label="Navegación de pie de página legal">
                <a className='Sub_Barra'>Terms of Use</a>
    
                <a className='Sub_Barra'>Privacy Policy</a>
    
                <a className='Sub_Barra'>Your US State Privacy Rights</a>
    
                <a className='Sub_Barra'>Childrens Online Privacy Policy</a>
    
                <a className='Sub_Barra'>License Agreement</a>
    
                <a className='Sub_Barra'>Interest-Based Ads</a>
    
                <a className='Sub_Barra'>MARVEL UNLIMITED</a>
    
                <a className='Sub_Barra'> © 2022 MARVEL</a>
    
              </nav>
              </div> */}


              </div>
            </div>
          </footer>
        </div>


      </div>
    </footer>

  );
}
