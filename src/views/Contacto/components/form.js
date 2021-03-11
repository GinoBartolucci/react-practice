import {useState} from "react";

export default function Form (){
    const [mail, setMail] = useState({
        name:"",
        email: "",
        subject:"",
        message:"",
    });

    const handleChange = (event) => {
        setMail({...mail, 
            [event.target.name]: event.target.value,});
    };
    
    const handleFormSubmit =(event) =>{
        const mailData = new FormData();
        mailData.append("name", mail.name);
        mailData.append("email", mail.email);
        mailData.append("subject", mail.subject);
        mailData.append("message", mail.message);
        console.log(mail)

        const url = 'http://pincen.com.ar/formulario/contact.php';
        const req = {
            method: 'POST',
            mode: 'no-cors',
            body: mailData,
        };
        event.preventDefault();
        sendEmail(url, req);
      };
    function sendEmail(url, req){
        fetch(url, req)
            .then(res=> res)
            .then(response=> console.log(response))
    }
    return(
    <div className='container'>
        <form onSubmit={handleFormSubmit}>
            <input type="text" name='name' 
                placeholder='Su nombre' required="" 
                onChange={handleChange} 
                value={mail.name}>
            </input>
            <input type='email' name='email' 
                placeholder='Su email de contato' required="" 
                onChange={handleChange} 
                value={mail.email}>
            </input>
            <input type='text' name='subject' 
                required="" placeholder='Asunto de consulta' 
                onChange={handleChange} 
                value={mail.subject}>
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