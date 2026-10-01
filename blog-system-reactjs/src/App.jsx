import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Blog from './components/pages/Blog.jsx';
import BlogDetails from './components/pages/BlogDetails.jsx';
import Contact from './components/contact/Contact.jsx';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router';

function App() {
    return (
        <>
            
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pages" element={<Blog />} />
                <Route path="/pages" element={<BlogDetails />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <div>
                <h1>Hello, React!</h1>
            </div>

            <nav>
                <NavLink className={({isActive}) => isActive ? styles['selected-link'] : ''} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? styles['selected-link'] : ''} to="/">About</NavLink>
                <NavLink className={({isActive}) => isActive ? styles['selected-link'] : ''} to="/">Pages</NavLink>
                <NavLink className={({isActive}) => isActive ? styles['selected-link'] : ''} to="/">Contact</NavLink>
            </nav>
        </>
    )
}

export default App
