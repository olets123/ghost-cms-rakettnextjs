import styles from '../styles/Home.module.scss'
import '../styles/MobileMenu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';

 

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        
        

        <div className={styles.navbar}>
            <div className={styles.logo}>
            <Link href="/">
                <Image src="/assets/Rakettaasen_Square_RGB.png"
                    width={90}
                    height={80} 
                alt="logo" />
                </Link>
            </div>
				<Link href="/">
					<a className={styles.navLeft}>Rakettåsen Skilinje</a></Link>
					<div className={styles.navRight}>
				<Link href="/">Hjem</Link>
				<Link as="/about" href="/about">Om Oss</Link>
				<Link href="/team" as="/team">The Team</Link>
				<button><Link href="/contact" as="/contact">Kontakt Oss</Link></button>
				</div>

                <div className={styles.mobileMenu}>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleClose}>
                    <Link href="/">Hjem</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <Link as="/about" href="/about">Om Oss</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="/team" as="/team">The Team</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                        <Link href="/contact" as="/contact">Kontakt Oss</Link>
                        </MenuItem>
                </Menu>
                </div>

			</div>
    )
}
export default NavBar