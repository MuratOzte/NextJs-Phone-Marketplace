import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import BurgerTsx from './Burger';
import Search from './Search';


const BurgerBar = () => {
    return (
        <>
            <nav style={navStyle}>
                <Link href="/" style={logoLinkStyle}>
                    <Image src={logo} alt="logo" width={32} height={32} />
                </Link>
                <Search />
                <BurgerTsx />
            </nav>
        </>
    );
};

const navStyle: React.CSSProperties = {
    position: 'relative',
    backgroundColor: '#ffffff',
    height: '50px',
    borderBottom: '2px solid #e8e9ed',
};

const logoLinkStyle: React.CSSProperties = {
    position: 'absolute',
    top: '1%',
    left: '6%',
    alignItems: 'center',
    marginBottom: '3%',
    display: 'flex',
    padding: '0.3%',
    color: 'black',
};

export default BurgerBar;