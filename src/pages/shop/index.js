import { useSearchParams, Link } from 'react-router-dom';

function StoreWall() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category');
  const size = searchParams.get('size');
  const color = searchParams.get('color');

  const setFilter = () => {
    setSearchParams({
      category: 'jacket',
      size: 'xl',
      color: 'dark-blue',
      maxPrice: '1000',
    });
  };

  return (
    <>
      <h1>Welcome to our store! {category}</h1>
      {category && <h3>Category: {category}</h3>}
      {size && <h3>Category: {size}</h3>}
      {color && <h3>Category: {color}</h3>}
      <button onClick={setFilter}>Set Filters</button>
      <hr />
      <Link
        to="/product/123"
        state={{
          from: `/shop?category=${category}&size=${size}&color=${color}`,
        }}
      >
        Product 123
      </Link>
    </>
  );
}

export default StoreWall;
