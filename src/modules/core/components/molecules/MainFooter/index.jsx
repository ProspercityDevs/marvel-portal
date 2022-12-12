import './styles.scss';
export default function MainFooter() {
  return (
    <div className="content-footer">
      <div className="main-footers_links">
        <a href="">
          <span>
            <svg></svg>
          </span>
        </a>
        <nav className="main-footer-links1">
          <ul>
            <li>
              <a href="" className="main-footer-link">
                ACERCA DE MARVEl
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                AYUDA/PREGUNTAS FRECUENTES
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                CARRERAS
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                PASANTIAS
              </a>
            </li>
          </ul>
        </nav>
        <nav className="main-footer-links2">
          <ul>
            <li>
              <a href="" className="main-footer-link">
                PUBLICIDAD
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                DISNEY+
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                MARVELHQ.COM
              </a>
            </li>
            <li>
              <a href="" className="main-footer-link">
                CANJEAR COMICS DIGITALES
              </a>
            </li>
          </ul>
        </nav>
        <div className="main-footer-prom">
          <nav className="nav-footer-prom">
            <a href="">
              <div>
                <figure>
                  <img
                    src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png"
                    alt="Logotipo de Marvel Insider"
                    className="main-footer__promotion-image"
                    width="60px"
                  />
                </figure>
              </div>
              <div>
                <h4 className="text-prom">INFORMACION PRIVILEGIADA DE MARVEL</h4>
                <p className="p-prom">Obten recompensas por ser fanàtico de marvel</p>
              </div>
            </a>
          </nav>
        </div>
      </div>
      <div></div>
    </div>
  );
}
