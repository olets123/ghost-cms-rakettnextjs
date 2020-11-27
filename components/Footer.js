import footstyles from '../styles/Footer.module.scss'
import Link from 'next/link'


const Footer = () => {
    return (
        <div className={footstyles.bottom}>
        <div className={footstyles.footer}>
        <h1>Rakettåsen Skilinje</h1>
        <div className={footstyles.midFooter}>
        
            <Link href="/">
                Hjem
            </Link>
            <Link href="/about">
                Om Rakettåsen Skilinje
            </Link>
    
        <Link href="/team">
                Vårt Team
            </Link>
            <Link href="/contact">
                Lurer du på noe?
            </Link>
        <a href="https://www.instagram.com/rakettaasen_skilinje/">Følg oss på Instagram</a>
        
        <Link href="/future" as="/future">
                Fremtiden
            </Link>
        </div>

			</div>
            <p>&copy;2020 Rakettåsen Skilinje
                 - Web Development by 
                 <a href="https://www.skogli100.com/"> skogli100.com</a></p>
            </div>
    )
}
export default Footer