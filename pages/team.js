import styles from '../styles/Home.module.scss'
import team from '../styles/Team.module.scss'
import Image from 'next/image'
import InstagramIcon from '@material-ui/icons/Instagram';


const Team = () => {
    return (
        <div className={team.team}>

            <div className={team.frontpage}>

                <div className={team.frontImage}>
                    <Image src="/assets/Rakettaasen_Square_RGB.png"
                        width={800}
                        height={1000}
                        quality={100}
                        alt="img-front"
                        />
                </div>
            
            <div className={team.text}>
               <h1><strong>The</strong> Team</h1>
        
           </div>

           </div>

           <h1>Rakettåsen <strong>Skilinje</strong></h1>

           <div className={team.box}>

               

            <div className={team.member}>
                <Image src="/assets/CWH.JPG" width={400} height={400} />
                
                <h1>Christian Wainwright Hveem</h1>
                <p>Født: 18.09.1996</p>
                <p>Tidligere klubber: Østre Toten Skilag</p>
                <p>Yrke: Rådgiver (Jobber i bank)</p>                
                <p><InstagramIcon /> <a href="https://www.instagram.com/wainwright_hveem/">@Wainwright_hveem</a></p>
            </div>

            <div className={team.member}>
                <Image src="/assets/sanstr2.jpg" width={400} height={400} />
                <h1>Sander Strandhaug</h1>
                <p>Født: 17.10.1996</p>
                <p>Tidligere klubber: Vind IL</p>
                <p>Yrke: Taxisjåfør</p>                
                <p><InstagramIcon /> <a href="https://www.instagram.com/sanderstrandhaug/">@sanderstrandhaug</a></p>
            </div>

           </div>

           <div className={team.box2}>

           <div className={team.member}>
                <Image src="/assets/amu.JPG" width={400} height={400} />
                <h1>Amund Dalseg</h1>
                <p>Født: 30.11.1996</p>
                <p>Tidligere klubber:Vind IL</p>
                <p>Yrke: Selger</p>                
                <p><InstagramIcon /> <a href="https://www.instagram.com/amunddalseg/">@amunddalseg</a></p>
            </div>

            <div className={team.member}>
                <Image src="/assets/bang.JPG" width={400} height={400} />
                <h1>Jørgen Bang</h1>
                <p>Født: 01.05.1996</p>
                <p>Tidligere klubber: (-)</p>
                <p>Yrke: Soldat</p>                
                <p><InstagramIcon /> <a href="https://www.instagram.com/jorgenlauesen/">@jorgenlauesen</a> </p>
            </div>

            <div className={team.member}>
                <Image src="/assets/fetle.JPG" width={400} height={400} />
                <h1>Vetle Henriksveen</h1>
                <p>Født: 15.05.1996</p>
                <p>Tidligere klubber: Vind IL</p>
                <p>Yrke: Anleggsmaskinfører</p>                
                <p><InstagramIcon /> <a href="https://www.instagram.com/vetlehenriksveen/">@vetlehenriksveen</a> </p>
            </div>

           </div>

           <div className={team.TeamImage}>
               <h1>Lagkamerat Fotografi</h1>
                <Image src="/assets/image1.JPG" width={1400} height={1250} />
                <p>Godt over halvveis på 3-mila under Janteloppet. F.v. Amund, Sander, Vetle, Jørgen og Christian.</p>
           </div>
           <div className={team.bottomImage}>
           <Image src="/assets/Rakettaasen_Square_RGB.png" width={400} height={400} />
           <p>Rakettåsen Skilinje - 2020</p>
           </div>
           
            
        </div>
    )
}
export default Team