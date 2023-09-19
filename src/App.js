import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './notFound';

function App() {
// const title = 'Welcome to the new blog';
// const likes = 50;
// const person = {name: 'Mo', age: 20};
// const link = "http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <h1>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/Create'>
                <Create />
              </Route>
              <Route path='/Blogs/:id'>
                <BlogDetails />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
            {/* <Home /> */}
            {/* App Compnonets */}
            {/* Lesson 4 */}
            {/* <h1>{title}</h1> */}
            {/* <p>linked {likes}</p> */}
            {/* <p>{person.name}</p>
            <p>{person.age}</p> */}
            {/* <p>{ 10 }</p> */}
            {/* <p>{ 'Hello, ninjas' }</p> */}
            {/* <p>{ [1,2,3,4,5] }</p> */}
            {/* <p>{ Math.random() }</p> */}
            {/* <a href={link}>Google</a> */}
            {/* ///////////////////////// */}
          </h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
