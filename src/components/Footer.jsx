export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <strong style={{ color: '#0a0a0a' }}>MONO.UI</strong> — Sistem Desain Minimalis Hitam & Putih.
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <span>Dokumentasi</span>
          <span>Privasi</span>
          <span>Ketentuan</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}