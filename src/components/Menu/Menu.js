import './Menu.css';
import logo from './../../assets/images/logo.svg';  // this tells webpack to bundle this image together with all the JS files

export default function Menu() {
    return (
        <header className="menu">
            <div className="top-logo">
                <img src={logo} alt='main logo' />
            </div>
            <nav>
                <li>
                    <a href="/">Como fazer</a>
                    /
                </li>
                <li>
                    <a href="/">Ofertas</a>
                    /
                </li>
                <li>
                    <a href="/">Depoimentos</a>
                    /
                </li>
                <li>
                    <a href="/">Vídeos</a>
                    /
                </li>
                <li>
                    <a href="/">Meu carrinho</a>
                </li>
            </nav>
        </header>
    );
}