import '../../src/styles/global.scss';
import React from 'react';
import { RPSInfoHome } from './components/forms/R-P-Script'
import { FooterCPY } from './components/forms/Footer-CPY';



function RegPagInfoAddress ()  {
   return (

      <div>
         <h1> Bem Vindo Visitante...</h1>  
         <div className='bacRegister'>
         <RPSInfoHome />         
      </div>
      <FooterCPY />  
     </div>
   )
  };

  export default RegPagInfoAddress

  
    