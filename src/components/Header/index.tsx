import { MdShoppingCart, MdLogout } from "react-icons/md";
import SearchForm from "./SearchForm";
import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";
import { StyledContainer } from "../../styles/grid";
import { IModalOpenProps } from "../CartModal";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";

const Header = ({ setShowModal }: IModalOpenProps) => {
  const navigate = useNavigate();

  const { setCont, cont } = useContext(ProductsContext);

  const handleClick = () => {
    setShowModal(true);
    setCont(0);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />
          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <button
                className="btnCart"
                type="button"
                onClick={() => handleClick()}
              >
                <p>{cont}</p>
                <MdShoppingCart size={28} />
              </button>
              <button type="button" onClick={() => logout()}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
