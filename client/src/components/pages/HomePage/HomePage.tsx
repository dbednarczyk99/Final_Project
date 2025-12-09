import React, { useEffect } from 'react';
import { fetchProducts, getAllProducts } from '../../../redux/productsRedux';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Product } from '../../../types';
import ProductCard from '../../common/ProductCard/ProductCard';
import { Container, Row } from 'react-bootstrap';
import Header from '../../layout/Header/Header';
import SearchBar from '../../layout/SearchBar/SearchBar';

function HomePage () {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getAllProducts);

  const [searchFrase, setSearchPhrase] = React.useState<string>('');
  const [searchCategory, setSearchCategory] = React.useState<string>('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchFrase.toLowerCase()) &&
    (searchCategory === '' || product.category === searchCategory)
  );

  return (
    <>
      <Header />
      <SearchBar
        search={searchFrase}
        setSearch={setSearchPhrase}
        category={searchCategory}
        setCategory={setSearchCategory}
      />

      <Container className="mt-4">
        <Row>
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
