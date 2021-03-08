import {useState} from "react";
import contact from "./../../api/contact/contact.php";

export default function Contacto (){
    const [email, setEmail] = useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    
    const handleFormSubmit =(event) =>{
        console.log(email);
        const body = {email: email}
        console.log(body);
        event.preventDefault();
        fetch({contact},{
            method: 'POST',
            body: body,
        })
        .then(res => res.json())
        .then(datos => {console.log(datos)})
      };

    return(
    <div className='container'>
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={email} onChange={handleEmailChange}></input>
            <button type="submit">
                enviar
            </button>
        </form> 
    </div>
    )
    ;

}
