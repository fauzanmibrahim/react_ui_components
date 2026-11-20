import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ComponentsPage from './pages/ComponentsPage';
import LayoutPage from './pages/LayoutPage';
import TodoPage from './pages/TodoPage';

export default function App() {
  const [activePage, setActivePage] = useState('components');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigasi Utama */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Konten Halaman Dinamis */}
      {/* <main style={{ flex: 1 }}>
        {activePage === 'components' ? (
          <ComponentsPage />
        ) : (
          <LayoutPage onSwitchPage={() => setActivePage('components')} />
        )}
      </main> */}
      <main style={{ flex: 1 }}>
        {activePage === 'components' && <ComponentsPage />}
        {activePage === 'layout' && (
          <LayoutPage onSwitchPage={() => setActivePage('components')} />
        )}
        {activePage === 'todo' && <TodoPage />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}