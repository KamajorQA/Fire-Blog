import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { CreatePostPage } from './pages/CreatePostPage';
import { ContactsPage } from './pages/ContactsPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="createpost" element={<CreatePostPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="userinfo" element={<UserInfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
