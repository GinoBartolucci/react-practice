import {useState} from "react";

export default function Form (){
    const [mail, setMail] = useState({
        name:"",
        mail: "",
        subjet:"",
        message:"",
    });

    const handleChange = (event) => {
        setMail({...mail, 
            [event.target.name]: event.target.value,});
    };
    
    const handleFormSubmit =(event) =>{
        const emailData = new FormData();
        emailData.append("name", mail.name);
        emailData.append("mail", mail.mail);
        emailData.append("subjet", mail.subjet);
        emailData.append("message", mail.message);
        console.log(mail)

        const url = 'http://pincen.com.ar/formulario/contact.php';
        const req = {
            method: 'POST',
            mode: 'no-cors',
            body: emailData,
        };
        event.preventDefault();
        sendEmail(url, req);
      };

    async function sendEmail(url, req){
        try{
            const response = await fetch(url, req);
            console.log('Server response: ', response);
        }catch (error){
            Promise.reject(error);
        }
    }

    return(
    <div className='container'>
        <form onSubmit={handleFormSubmit}>
            <input type="text" name='name' 
                placeholder='Su nombre' required="" 
                onChange={handleChange} 
                value={mail.name}>
            </input>
            <input type='email' name='mail' 
                placeholder='Su email de contato' required="" 
                onChange={handleChange} 
                value={mail.email}>
            </input>
            <input type='text' name='subjet' 
                required="" placeholder='Asunto de consulta' 
                onChange={handleChange} 
                value={mail.subjet}>
            </input>
            <textarea name='message'
                placeholder='Su consulta' required="" 
                onChange={handleChange} 
                value={mail.message}>
            </textarea>

            <button type="submit">
                enviar
            </button>
        </form> 
    </div>
    )
    ;
}