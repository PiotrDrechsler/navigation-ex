import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <>
      <h1>About</h1>
      <p>lorem ipsum</p>
      <ul className="sub-nav">
        <li>
          <Link to="mission">Mission</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <section className='outlet-holder'>
        <Outlet />
      </section>
    </>
  );
}

export default About;
