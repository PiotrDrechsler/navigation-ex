import { Link } from 'react-router-dom';

function Blog() {
  return (
    <>
      <ul>
        <li>
          <Link to="/blog/sport/post-1">Post 1</Link>
        </li>
        <li>
          <Link to="/blog/food/jak-zrobic-jajecznice">
            Jak zrobić jajecznicę
          </Link>
        </li>
        <li>
          <Link to="/blog/nature/3">Co dobrego w pogodzie</Link>
        </li>
      </ul>
    </>
  );
}

export default Blog;
