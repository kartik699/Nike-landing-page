import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" height={29} width={130} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="Hamburger"
                        height={25}
                        width={25}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Nav;