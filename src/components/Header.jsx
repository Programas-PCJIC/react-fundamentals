import '../styles/Header.css';
const Header = ({opciones}) => {
    return (
        <header className="fondo">
            <nav>
                <ul>
                    <li>
                        {opciones.name}
                    </li>
                    <li>
                        {opciones.opcion2}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;