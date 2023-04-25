import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";
import { ProductsContext } from "../../providers/ProductsContext";

const ProductList = () => {
  const { products, searchTerm } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredProducts(newFilteredProducts);
    }
  }, [searchTerm, products]);

  return (
    <StyledProductList>
      {filteredProducts.length > 0
        ? filteredProducts &&
          Array.isArray(products) &&
          filteredProducts.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })
        : "Nenhum produto encontrado..."}
    </StyledProductList>
  );
};

export default ProductList;
