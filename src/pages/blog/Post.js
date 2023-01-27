import { useParams } from "react-router-dom";


function Post () {

    const {postId, category} = useParams();

    return (
        <>
            <h4>/blog/{category}/{postId}</h4>
            <h1>Single post</h1>
            <h3>Post CATEGORY: {category}</h3>
            <h3>Post ID: {postId}</h3>
        </>
      );
}

export default Post;