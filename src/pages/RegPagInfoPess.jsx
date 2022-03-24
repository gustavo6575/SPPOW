import '../../src/styles/global.scss';
import React from 'react';
import {RPSInfoChar} from './components/forms/R-P-Script'
import { FooterCPY } from './components/forms/Footer-CPY';



function RegPagInfPes ()  {
   return (

      <div>
         <h1> Bem Vindo Visitante...</h1>  
         <div className='bacRegister'>
          <RPSInfoChar />         
      </div>
      <FooterCPY />  
     </div>
   )
  };

  export default RegPagInfPes

  
    