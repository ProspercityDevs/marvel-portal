import './style.scss';
import { useState } from 'react'; // Hooks paquete
import Modal from "./modal_2"
import { AiFillCaretDown} from "react-icons/ai";
import { icons } from 'react-icons';



export default function Filter_2(){
    const[estado_filter2, setestado_filter2] = useState(false);
      
    const openModal_filter2 = () =>{
        if(estado_filter2 == true){
            setestado(false);
         }else{
            setestado(true);
         }
      } 
     
         
    return( 
        
        <div className="boton_filter2">
             <button className="btn_filter2"onClick={openModal_filter2}>
                    Filter_2<AiFillCaretDown className={`icon_filter2 ${estado_filter2 && icon_filter2-open}`}/>
             </button>

        </div>
    );

}