import CartProductCard from "./CartProductCard";
import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { ProductsContext } from "../../../providers/CartContext";

const CartProductList = () => {
  const { productCart, removeAll } = useContext(ProductsContext);

  const TotalMoney = productCart.reduce((previousValue, totalValue) => {
    return previousValue + totalValue.price;
  }, 0);

  return (
    <>
      {productCart.length !== 0 ? (
        <StyledCartProductList>
          <ul>
            {productCart.map(({ id, category, name, price, img }) => {
              return (
                <CartProductCard
                  id={id}
                  category={category}
                  name={name}
                  price={price}
                  img={img}
                  key={id}
                />
              );
            })}
          </ul>

          <div className="totalBox">
            <StyledParagraph>
              <strong>Total</strong>
            </StyledParagraph>
            <StyledParagraph className="total">
              R$ {TotalMoney.toFixed(2)}
            </StyledParagraph>
          </div>
          <StyledButton
            $buttonSize="default"
            $buttonStyle="gray"
            onClick={() => removeAll(0)}
          >
            Remover todos
          </StyledButton>
        </StyledCartProductList>
      ) : null}
    </>
  );
};

export default CartProductList;
