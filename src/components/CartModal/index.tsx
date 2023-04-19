import { MdClose } from "react-icons/md";
import CartProductList from "./CartProductList";

import { StyledCartModalBox } from "./style";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";

export interface IModalOpenProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal = ({ setShowModal }: IModalOpenProps) => {
  const { productCart } = useContext(ProductsContext);

  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag="h2" $fontSize="three">
            Carrinho de compras
          </StyledTitle>
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setShowModal(false)}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className="cartBox">
          <CartProductList />
          {productCart.length === 0 ? (
            <div className="emptyBox">
              <StyledTitle tag="h3" $fontSize="three" textAlign="center">
                Sua sacola está vazia
              </StyledTitle>
              <StyledParagraph textAlign="center">
                Adicione itens
              </StyledParagraph>
            </div>
          ) : null}
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
