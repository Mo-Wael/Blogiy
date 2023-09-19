import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = ({ blogs, title}) => { // you can use propities instead of props
    // ,handleDelete    // deleted because we will use json file to delete data 
    // const blogs = props.blogs;
    // const title = props.title;

    // console.log(props.blogs);
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;