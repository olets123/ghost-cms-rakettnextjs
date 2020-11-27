import about from '../styles/About.module.scss'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'


const About = () => {
    return (
        <div className={about.about}>
           
           <div className={about.text}>
           <h1><strong>Om</strong> <small>Oss</small></h1>
               <p>- Rosa fart i minst mulig luftmotstand.</p>
               
           </div>

           <div className={about.image}>
              {/* <Image src="/assets/image1.JPG" width={800} height={650} quality={100} /> */}
           </div>

           <div className={about.mobileImage}>
              <Image src="/assets/image1.JPG" width={380} height={350} quality={100} /> 
           </div>

           <div className={about.story}>

               <div className={about.storytext}>
                   <h1><strong>Vår</strong> Historie</h1>
                   <p><strong>Rakettåsen Skilinje </strong>-	
                   ble stiftet 12.04.2019 i forbindelse med Janteloppet samme år. 
                   Meningen med skilinjen var å skape ekstra liv å røre under Janteloppet. 
                   Dette gjorde vi og fikk en opplevelse som var over all forventning. 
                   Teamet består av fem entusiastiske skiløpere i kledd rosa kondomdrakt. 
                   Etter Janteloppet hvor vi fikk masse oppmerksomhet har vi jobbet med å 
                   promotere oss på sosiale medier og videreutvikle konseptet. </p>
                   <p><strong>Takk til </strong>
                        -	Uten om teamet har vi fått god støtte 
                            innenfor ulikeområder, 
                            herunder blant annet 
                            fotografering, redigering, 
                            filming, oppsettelse av nettside, 
                            promotering og design av dresser og logo. <strong>Trimtex</strong> har 
                            vært veldig behjelpelig med design av vår karematriske rosa skidresser. </p>
                            <p> - <strong>Marius Amundsen</strong> for logo, <strong>Morten Bjaanes</strong> for filming og redigering, og <strong>Ole Thomas Skogli</strong> for nettsiden. </p>

                    <Image src="/assets/IMG_0274.JPG" width={600} height={550} quality={100} />

               </div>

               <div className={about.gallery}>
                   <div className={about.galleryBox}></div>
                   <div className={about.galleryBox2}></div>
               <Image src="/assets/IMG_0237.JPG" width={500} height={450} quality={100} />
               <Image src="/assets/IMG_0147.JPG" width={600} height={400} quality={100} />
               
               </div>
           </div>

           <div className={about.bottom}>
                   <Link href="/team">
                       <a className={about.button}>View The Team</a>
                   </Link>
               </div>

               <div className={styles.bottomImage}>
           <Image src="/assets/Rakettaasen_Square_RGB.png" width={400} height={400} />
           <p>Rakettåsen Skilinje - 2020</p>
           </div>
        </div>
    )
}
export default About