import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ProductsContext } from '../../providers/ProductsContext';

const ProductList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <StyledProductList>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </StyledProductList>
  );
};

export default ProductList;
