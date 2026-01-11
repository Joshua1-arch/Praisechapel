import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Give from './pages/Give';
import Contact from './pages/Contact';
import Branches from './pages/Branches';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Books from './pages/Books';
import Meditation from './pages/Meditation';
import Lessons from './pages/Lessons';
import Tracts from './pages/Tracts';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-brand-red/30">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/books" element={<Books />} />
          <Route path="/resources/meditation" element={<Meditation />} />
          <Route path="/resources/lessons" element={<Lessons />} />
          <Route path="/resources/tracts" element={<Tracts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
