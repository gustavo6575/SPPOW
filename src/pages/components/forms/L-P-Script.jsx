import "../../../styles/global.scss"
import iconImg from "../../../assets/images/Logo-Spow-new.png"
import './styles-form/L-P-style.scss'
import ButtonR from '../forms/Buttons';
import {ButtonL} from '../forms/Buttons';
import HourHome from '../VarGlobal';



function LoP (){
    return(
        <div>
            <link className="Logo-Loading" rel="shortcut icon" href= {iconImg} type="image/x-icon" />    
            <h1 id="msg" onLoad={() => HourHome()} > Bem Vindo Visitante...</h1>  
                <div className="bacLogin">           
                        <source media="(max-width:600px)" srcSet='image/sppow-d.png'></source>                
                        <img src ={iconImg} alt = "logotipo"/>                        
                        <p >Shopping Online Web</p>  
                        <div>
                        <ButtonR /> 
                        <ButtonL />                        
                        </div>     
                        <div>
                        <a href="../../registerLogist">Registrar sua Loja</a>
                        </div>       
                </div>
  </div>

  )
}

export default LoP;