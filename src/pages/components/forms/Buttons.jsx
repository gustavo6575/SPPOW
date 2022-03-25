import "../../../styles/global.scss"
import "./styles-form/button.scss"


  export default function ButtonR (){
  return(
   <a href="../../../../RegisterPagePes"> <button  className="Cbutton">Registrar </button> </a>
  );  
  };


 

  export function ButtonL (){
    return(
      <button className="Cbutton" onClick = {() => alert("Login")}>Entrar </button>
    );  
    };


    export function BRegAddress (){
      return(
        <a href="../../../../RegisterPageAddress">   <button className="Cbutton" >Ir Etapa 2 </button> </a>
      );  
      };
      export function BRegbackPess (){
        return(

          <a href="../../../../RegisterPagePes">  Voltar Etapa 1 </a>         
        );  
        };


        export function BRegLogin (){
          return(
            <a href="../../../../RegisterPageLogin">   <button className="Cbutton" >Ir Etapa 3 </button> </a>
          );  
          };
          export function BRegBackAddress (){
            return(
    
              <a href="../../../../RegisterPageAddress">  Voltar Etapa 2 </a>         
            );  
            };

            export function CreatACC (){
              return(
                <button className="Cbutton" onClick = {() => alert("Criou Conta")}>Criar Conta </button>
              );  
              }

              export function BBackLoginHome (){
                return(
        
                  <a href="../../../../LoginPage">  Voltar para Login </a>         
                );  
                };

        

  
    
