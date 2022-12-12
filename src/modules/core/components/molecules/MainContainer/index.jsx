//Realización del pie de pagina Maria Camila Betancourth
import './style.scss';
import background from './images/imagen1.jpg';
// import { Link } from 'react-router-dom';

export default function Experiencia_u() {
  const SubPage = () => {
    alert('Oye, esto aún no está listo, vuelve más tarde');
  };

  return (
    <section className="marvel-insider">
      <div className="contenedor">
        <div className="imagen">
          <img src={background}></img>
        </div>
        <div className="contenedor-main">
          <div className="promo__eyebrow">Marvel Insider</div>
          <div className="promo__title">Watch, Earn, Redeem!</div>
          <div className="promo__description">
            Get rewarded for doing what you already do as a fan.
          </div>
          <div>
            <button onClick={SubPage}>JOIN NOW</button>
          </div>
          {/* <script>
            function mensaje() {alert('Oye, esto aún no está listo, vuelve más tarde')}
          </script> */}
          <div className="promo__legal">Terms and Conditions Apply.</div>
        </div>
      </div>
    </section>
  );
}
