import { useEffect } from "react/cjs/react.production.min";

export default function HourHome (){
  
    const [msg,setMsg] = useState(window.document.getElementById('msg'));
    const [fdate,setFdate] = useState(new Date());
    const [fhour,setFhour] = useState(fdate.getHours());
    const [fminuts,setFminuts] = useState(fdate.getMinutes());
    const [ftext,setFtext] = useState(msg.innerHTML);
    useEffect(() =>{
    ftext = 'Bem Vindo Visitante são Hrs:' +fhour+ ' : ' + fminuts +' ' 
    });
  }