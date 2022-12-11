import './styles.scss';
import swal from 'sweetalert';
const mostrarAlert = () => {
  swal({
    text: '¡Oye, esto aún no está listo, vuelve más tarde!',
    icon: 'success',
    button: 'Aceptar'
  });
};
export default function MainFooter() {
  return (
    <div className="mvl-main-footer">
      <div className="footer-img"></div>

      <div className="footer-win">
        <button onClick={() => mostrarAlert()}>ÙNETE AHORA</button>
      </div>
    </div>
  );
}
