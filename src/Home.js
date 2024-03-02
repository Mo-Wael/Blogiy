import BlogList from "./BlogList";
import useFetch from "./usefetch";

// for running the json file
// npx json-server --watch data/db.json --port 8000

const Home = () => {
    // // let name = 'Mario';
    // const [name, setName] = useState('Mario');
    // const [age, setAge] = useState(25);

    // const [blogs, setBlogs] = useState([
    //     {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    //     {title: 'Welcome party!', body: 'lorem ipsum...', author: 'youshi', id: 2},
    //     {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
    // ]);
    // using json file instead
    // const [name, setName] = useState('Mario');

    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');  // the link is the url parameters 

    // we will delete from json file 
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // Video 8 UseState
    // const handleClick = () => {        /*e is object will be shown in console*/
    //     setName('Luigi');
    //     setAge(22);
    // }

    // Video 7 ClickEvent
    // const handleClickAgain = (name) => {
    //     console.log('Hello ' + name);
    // }

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs👌" />}
            {/* <BlogList blogs={blogs} title="All Blogs👌" handleDelete={handleDelete}/> */}
            {/* <button onClick={() => setName('Luigi')}>Change name</button> */}
            {/* <p>{name}</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => (blog.author === 'mario'))} title="Mario's blogs🎮" /> */}
            {/* <h2>HomePage</h2> */}
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={handleClick}>Click Me</button><br /> */}
            {/* <button onClick={() => {(handleClickAgain('Mario'))}}>Click Me Again</button> */}
        </div>
     );
}
 
export default Home;