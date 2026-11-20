// export default function Navbar({ activePage, setActivePage }) {
//   return (
//     <header className="navbar">
//       <div className="container navbar-inner">
//         <div className="logo">
//           <span className="logo-box"></span>
//           MONO.UI
//         </div>

//         <nav className="nav-links">
//           <button
//             className={`nav-btn ${activePage === 'components' ? 'active' : ''}`}
//             onClick={() => setActivePage('components')}
//           >
//             1. UI Components
//           </button>
//           <button
//             className={`nav-btn ${activePage === 'layout' ? 'active' : ''}`}
//             onClick={() => setActivePage('layout')}
//           >
//             2. Website Layout
//           </button>
//           <button
//             className={`nav-btn ${activePage === 'todo' ? 'active' : ''}`}
//             onClick={() => setActivePage('todo')}
//           >
//             3. Todo App
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// }

// Navbar dengan tombol hamburger untuk menu navigasi di perangkat mobile.
import { useState } from 'react';

export default function Navbar({ activePage, setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelectPage = (page) => {
    setActivePage(page);
    setIsMenuOpen(false); // Otomatis tutup menu setelah memilih halaman di HP
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <div className="logo">
          <span className="logo-box"></span>
          MONO.UI
        </div>

        {/* Tombol Hamburger (Hanya muncul di Mobile) */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Daftar Menu Navigasi */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <button
            className={`nav-btn ${activePage === 'components' ? 'active' : ''}`}
            onClick={() => handleSelectPage('components')}
          >
            1. UI Components
          </button>
          <button
            className={`nav-btn ${activePage === 'layout' ? 'active' : ''}`}
            onClick={() => handleSelectPage('layout')}
          >
            2. Website Layout
          </button>
          <button
            className={`nav-btn ${activePage === 'todo' ? 'active' : ''}`}
            onClick={() => handleSelectPage('todo')}
          >
            3. Todo App
          </button>
        </nav>
      </div>
    </header>
  );
}