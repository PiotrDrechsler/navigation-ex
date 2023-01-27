import { Link } from "react-router-dom";

function Home() {
    return ( <>
    <h1>HOME PAGE</h1>
        <p>
            This is my HOME PAGE. Check my <Link to="/about">About page</Link>
        </p>
    </> );
}

export default Home; 