import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Post from "./pages/Post";
import Page404 from "./pages/404";
function App() {
  return (
    <>
    <nav>
        <NavLink to="/">Anasayfa</NavLink>
        <NavLink to="/contact">Iletisim</NavLink>
        <NavLink to="/blog">Blog</NavLink>
    </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blog" element={<Blog>
          <Route index={true} element={<Blog></Blog>}></Route>
          <Route path="categories" element={<Categories></Categories>}></Route>
          <Route path="post/:url-:id" element={<Post></Post>}></Route>
        </Blog>}></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
    </>
  );
}

export default App;
