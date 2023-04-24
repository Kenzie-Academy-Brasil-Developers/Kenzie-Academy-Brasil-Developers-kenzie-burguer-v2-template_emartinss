import { MdDelete } from "react-icons/md";

import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";
import { IProduct } from "../../../../types";
import { useContext } from "react";
import { ProductsContext } from "../../../../providers/ProductsContext";

const CartProductCard = (product: IProduct) => {
  const { removeCart } = useContext(ProductsContext);

  return (
    <StyledCartProductCard key={product.id}>
      <div className="imageBox">
        <img src={product.img} alt="Hamburguer" />
      </div>
      <div className="contentBox">
        <StyledTitle tag="h3" $fontSize="three">
          {product.name}
        </StyledTitle>
        <button
          type="button"
          aria-label="Remover"
          onClick={() => removeCart(product.id)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
