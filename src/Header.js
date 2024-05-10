import './Header.css';

function Header(props) {
  return (
    <div className="Header">
      <div className="headerLogo">
         <h2>Logo</h2>
      </div>
      <div className="headerMenu">
         <a href="">Home</a>
         <a href="">Sobre</a>
         <a href="">Galeria</a>
         <a href="">Contato</a>
      </div>
    </div>
  );
}

export default Header;