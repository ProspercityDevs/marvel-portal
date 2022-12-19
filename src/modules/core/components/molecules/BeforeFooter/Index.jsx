import './styles.scss';
import swal from 'sweetalert';
export default function BeforeFooter() {
  const mostrarAlerta=()=>{
    swal({
      title: "Sorry",
      text: "Hey, this is not ready yet, come back later",
      icon: "warning",
      button: "I Agree",
    })
  }
  return (
    <div className="mvl-before-footer">
      <div className="contenedor_left"> </div>
      <div className="contenedor_right">
        <h3>MARVEL INSIDER</h3>
        <h2>Watch, Earn, Redeem!</h2>
        <h4> Get rewarded for doing what you already do as a fan.</h4>
        <button className='boton_join' onClick={()=>mostrarAlerta()}>JOIN NOW</button>
        <h5>Terms and Conditions Apply.</h5>
      </div>
    </div>
  );
}