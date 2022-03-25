import '../../src/styles/global.scss';
import React from 'react';
import {RPSInfoLogin } from './components/forms/R-P-Script'
import { FooterCPY } from './components/forms/Footer-CPY';


function RegPagInfLogin ()  {
   return (

      <div>
         <h1> Bem Vindo Visitante...</h1>  
         <div className='bacRegister'>
          <RPSInfoLogin />         
      </div>
      <FooterCPY /> 
      
     </div>
   )
  };

  export default RegPagInfLogin

  
    