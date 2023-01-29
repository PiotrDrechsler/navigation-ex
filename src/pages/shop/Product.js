import { useLocation, Link } from 'react-router-dom';

function Product() {
  const location = useLocation();

  return (
    <>
      <h1>Product Details Page</h1>
      <Link to={location.state.from}>Go back to search results</Link>
    </>
  );
}

export default Product;
