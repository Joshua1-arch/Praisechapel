import { Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import AdminLayout from './pages/admin/AdminLayout';

// Public Pages
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
import DailyCharge from './pages/DailyCharge';
import Gallery from './pages/Gallery';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSermons from './pages/admin/AdminSermons';
import AdminEvents from './pages/admin/AdminEvents';
import AdminResources from './pages/admin/AdminResources';
import AdminContact from './pages/admin/AdminContact';
import AdminBranches from './pages/admin/AdminBranches';
import AdminDailyCharge from './pages/admin/AdminDailyCharge';
import AdminSettings from './pages/admin/AdminSettings';

import './App.css';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
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
        <Route path="/resources/daily-charge" element={<DailyCharge />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>

      {/* Admin Portal Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="daily-charge" element={<AdminDailyCharge />} />
        <Route path="sermons" element={<AdminSermons />} />
        <Route path="events" element={<AdminEvents />} />
        <Route path="resources" element={<AdminResources />} />
        <Route path="branches" element={<AdminBranches />} />
        <Route path="contact" element={<AdminContact />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
