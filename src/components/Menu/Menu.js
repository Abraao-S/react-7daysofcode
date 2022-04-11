import {Header, NavBar} from './styles'
import logo from './../../assets/images/logo.svg';  // this tells webpack to bundle this image together with all the JS files

export default function Menu() {
    return (
        <Header >
            <div >
                <img src={logo} alt='a leaft representing Casa Verde logo' />
            </div>
            <NavBar>
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
            </NavBar>
        </Header>
    );
}