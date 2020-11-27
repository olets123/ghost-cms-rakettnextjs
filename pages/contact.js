import styles from '../styles/Home.module.scss'
import contact from '../styles/Contact.module.scss'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import InstagramIcon from '@material-ui/icons/Instagram';
import PlaceIcon from '@material-ui/icons/Place';
import Image from 'next/image'




const Contact = () => {
    return (
        <div className={contact.contact}> 

        <div className={contact.text}>
           <h1><strong>Kontakt</strong> <small>Oss</small></h1>
               <p>Send oss gjerne en melding dersom du har noen spørsmål eller ønsker å komme i kontakt
                   med Rakettåsen Skilinje.</p>
               
        </div>

        <div className={contact.socialContact}>

        <PlaceIcon />
        <p>Rakettåsen vei 23, Hveem Gård, Billit</p>

        <InstagramIcon /> 
        <p><a href="https://www.instagram.com/rakettaasen_skilinje/">@rakettaasen_skilinje</a></p>
        
        <PhoneIphoneIcon />
        <p>+47 911 22 333</p>
        </div>
            
        <div className={contact.form}>

        <form>

        <label for="fname">Fornavn</label>
        <input type="text" id="fname" name="firstname" placeholder="Fornavn" />

        <label for="lname">Etternavn</label>
        <input type="text" id="lname" name="lastname" placeholder="Etternavn" />

        <label for="subject">Emne</label>
        <input type="text" id="lname" name="lastname" placeholder="Skriv emne her" />


        <label for="subject">Melding til Rakettåsen Skilinje</label>
        <textarea id="subject" name="subject" placeholder="Skriv hva du lurer på" />

        <input className={contact.btnSubmit} type="submit" value="Send Rakettmelding" />

        </form>
        </div>
            
        </div>
    )
}
export default Contact