import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { useContext } from "react";
import { ProductsContext } from "../../../providers/ProductsContext";

const SearchForm = () => {
  const { handleSearch } = useContext(ProductsContext);

  return (
    <StyledSearchForm>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        onChange={handleSearch}
      />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
