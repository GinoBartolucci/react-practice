import {useState} from "react";

export default function Contacto (){
    const [email, setEmail] = useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    
    const handleFormSubmit = async (event) =>{
        console.log(email);
        let formData = new FormData();
        formData.append("mail", email);
        console.log(formData);
        event.preventDefault();
        await fetch("http://localhost:80/react-app-1/contact.php",{
            mode: "no-cors",
            method: 'POST',
            body: formData,
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
