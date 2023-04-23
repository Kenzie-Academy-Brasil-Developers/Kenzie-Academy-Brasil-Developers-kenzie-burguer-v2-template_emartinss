import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const ShopPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <StyledShopPage>
      {showModal ? <CartModal setShowModal={setShowModal} /> : null}
      <Header setShowModal={setShowModal} />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
      <ToastContainer/>
    </StyledShopPage>
  );
};

export default ShopPage;
