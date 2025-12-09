import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { getAllProducts } from "../../../redux/productsRedux";
import { useAppSelector } from "../../../redux/hooks";
import { CATEGORY_LABEL } from "../../../config";

type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
  category: string;
  setCategory: (category: string) => void;
};

function SearchBar({ search, setSearch, category, setCategory }: SearchBarProps) {

  const products = useAppSelector(getAllProducts);
  const categoryList = Array.from(new Set(products.map(p => p.category)));

  return (
    <Container className="my-4">
      <Row>
        <Col sm={12} md={10} lg={8} className="mx-auto">
          <Form className="d-flex flex-column flex-md-row" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Szukaj produktów..."
              className="me-md-2 mb-3 mb-md-0"
              aria-label="Szukaj"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Form.Select
              className="ms-md-2 "
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Wszystkie kategorie</option>
              {categoryList.map((cat) => (
                <option key={cat} value={cat}>
                  {CATEGORY_LABEL[cat] ?? cat}
                </option>
              ))}
            </Form.Select>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
