import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { IProduct } from "../../../types";
import { useContext } from "react";
import { ProductsContext } from "../../../providers/CartContext";

interface IProductCartProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCartProps) => {
  const { addProductToCart } = useContext(ProductsContext);

  return (
    <StyledProductCard key={product.id}>
      <div className="imageBox">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
          {product.name}
        </StyledTitle>
        <StyledParagraph className="category">
          {product.category}
        </StyledParagraph>
        <StyledParagraph className="price">
          {product.price.toFixed(2)}
        </StyledParagraph>
        <StyledButton
          $buttonSize="medium"
          $buttonStyle="green"
          onClick={() => addProductToCart(product.id)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
