import "../../../styles/global.scss"
import iconImg from "../../../assets/images/Logo-Spow-new.png"
import './styles-form/R-P-style.scss'
import { BRegAddress, BRegLogin,BRegBackAddress, BRegbackPess, CreatACC } from './Buttons';


export function RPSInfoChar (){
    return(
        <div>
            <link rel="shortcut icon" href= {iconImg} type="image/x-icon" />    
            
                <div>           
                        <source media="(max-width:600px)" srcSet='image/sppow-d.png'></source>                
                      <div className="teste">
                
                    <p className="TitleRP">Informações Pessoais</p>

                    <label className="TextIfoPess">Nome</label>
                    <input className="InputInfoPess" type="text" name="name"/>
                    <label className="TextIfoPess">Sobrenome</label>
                    <input className="InputInfoPess" type="text" name="lastName" />
                    <div className="div 5">
                    <label className="TextIfoPessSex">Sexo</label>
                    <label className="TextIfoPessAge">Idade</label>
                    </div>
                    <div>
                    <input className="InputInfoPessSex" type="text" name="Sexo"  />
                    <input className="InputInfoPessAge" type="number" name="age"  />                   
                    
                    </div>
                    <BRegAddress/>
                    
                    </div>
                    </div>
                </div>
)
}
    export function RPSInfoHome (){
        return(
                <div >
                    <p className="TitleRP">Informações de Endereço </p>
                    <label className="TextIfoAddress">Rua </label>                    
                    <input className="InputInfoAddress"type="text" name="adderss" />
                    
                    
                    <div className="div1">
                    <label className="TextIfoAddressCep">CEP </label>
                    <label className="TextIfoAddressCity">Cidade </label>
                    </div>
                   
                    
                    <div className="div2"> 
                    <input className="InputInfoAddressCep"type="number" name="CEP" />                     
                   <input className="InputInfoAddressCity"type="city" name="city" /> 
                   </div>
                   <div className="div3">             
                   <label className="TextIfoAddressNumber">Numº </label>
                  <label className="TextIfoAddressState">Estado </label>                   
                  </div>

                   <div className="div4">
                   <input className="InputInfoAddressNumber"type="number" name="number"/>                    
                   <input className="InputInfoAddressState"type="text" name="estado" />
                
                   </div> 
                  
                   
                    <label className="TextIfoAddress">Outras Informações </label>
                    <input className="InputInfoAddress"type="text" name="others" />   
                    <BRegLogin />
                    <BRegbackPess />
                 </div>            
              
                )
}




export function RPSInfoLogin (){
    return(
            <div >
                <p className="TitleRP">Informações de Login </p>
                <label className="TextIfoAddress">Rua </label>                    
                <input className="InputInfoAddress"type="text" name="adderss" />
                
                
                <div className="div1">
                <label className="TextIfoAddressCep">CEP </label>
                <label className="TextIfoAddressCity">Cidade </label>
                </div>
               
                
                <div className="div2"> 
                <input className="InputInfoAddressCep"type="number" name="CEP" />                     
               <input className="InputInfoAddressCity"type="city" name="city" /> 
               </div>
               <div className="div3">             
               <label className="TextIfoAddressNumber">Numº </label>
              <label className="TextIfoAddressState">Estado </label>                   
              </div>

               <div className="div4">
               <input className="InputInfoAddressNumber"type="number" name="number"/>                    
               <input className="InputInfoAddressState"type="text" name="estado" />
            
               </div> 
              
               
                <label className="TextIfoAddress">Outras Informações </label>
                <input className="InputInfoAddress"type="text" name="others" />   
                <CreatACC />
                <BRegBackAddress id='10' /> 
             </div>            
          
            )
}