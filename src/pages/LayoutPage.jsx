import previewImg from '../assets/coba_image_gerak.gif';

export default function LayoutPage({ onSwitchPage }) {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container">
          <span className="badge badge-outline">HALAMAN 02 — TATA LETAK WEBSITE</span>
          <h1 className="hero-title">
            Bangun Produk Digital dengan Presisi & Kejelasan.
          </h1>
          <p className="hero-subtitle">
            Struktur tata letak standar untuk website modern: Hero section yang tegas, grid fitur terukur, dan ajakan bertindak yang jelas.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={onSwitchPage}>
              Lihat Katalog Komponen
            </button>
            <button className="btn btn-outline">
              Pelajari Dokumentasi
            </button>
          </div>
        </div>
      </section>

      {/* 2. FEATURE GRID (3 KOLOM) */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <h2 className="section-title">Arsitektur Tata Letak Utama</h2>
            <p className="section-desc">
              Pola grid 3 kolom yang paling umum digunakan untuk memaparkan keunggulan layanan atau produk.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ fontWeight: '800', fontSize: '1.25rem', marginBottom: '12px' }}>01.</div>
              <h3 style={{ marginBottom: '8px' }}>Hierarki Visual</h3>
              <p style={{ color: '#525252', fontSize: '0.95rem' }}>
                Menggunakan ukuran font dan ketebalan kontras untuk memandu mata pembaca dari judul utama ke detail konten.
              </p>
            </div>

            <div className="card">
              <div style={{ fontWeight: '800', fontSize: '1.25rem', marginBottom: '12px' }}>02.</div>
              <h3 style={{ marginBottom: '8px' }}>Responsif Otomatis</h3>
              <p style={{ color: '#525252', fontSize: '0.95rem' }}>
                Setiap blok konten menyesuaikan ukuran layar desktop, tablet, maupun ponsel secara proporsional.
              </p>
            </div>

            <div className="card">
              <div style={{ fontWeight: '800', fontSize: '1.25rem', marginBottom: '12px' }}>03.</div>
              <h3 style={{ marginBottom: '8px' }}>Kontras Tinggi</h3>
              <p style={{ color: '#525252', fontSize: '0.95rem' }}>
                Kombinasi hitam pekat (#0A0A0A) dan putih bersih (#FFFFFF) menjamin keterbacaan maksimal di segala kondisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPLIT CONTENT SECTION (2 KOLOM TEKS + VISUAL) */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            <div>
              <span className="badge badge-dark" style={{ marginBottom: '12px' }}>SPLIT SECTION</span>
              <h2 className="section-title" style={{ marginBottom: '16px' }}>
                Kombinasi Teks dan Media Visual
              </h2>
              <p style={{ color: '#525252', marginBottom: '20px' }}>
                Tata letak dua kolom sangat efektif untuk menjelaskan alur kerja produk, studi kasus, atau profil perusahaan tanpa membuat halaman terasa penuh sesak.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <li>✓ Navigasi tetap (Sticky Header) di bagian atas</li>
                <li>✓ Pembatas antar bagian (Section Divider) yang rapi</li>
                <li>✓ Footer informatif di bagian paling bawah</li>
              </ul>
              <button className="btn btn-outline">Eksplorasi Lebih Lanjut</button>
            </div>

            {/* <div className="media-placeholder">
              [ VISUAL / IMAGE PLACEHOLDER 16:9 ]
            </div> */}
            <div className="media-wrapper">
              <img 
                src={previewImg} 
                alt="Preview Tampilan Website" 
                className="media-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION (CTA) BANNER */}
      <section className="section" style={{ background: '#0a0a0a', color: '#ffffff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 className="section-title" style={{ color: '#ffffff', marginBottom: '12px' }}>
            Siap Mengembangkan Project?
          </h2>
          <p style={{ color: '#a3a3a3', marginBottom: '28px' }}>
            Gunakan kerangka kerja ini sebagai fondasi awal dan kembangkan sesuai kebutuhan aplikasi atau website.
          </p>
          <button
            className="btn"
            style={{ background: '#ffffff', color: '#0a0a0a', borderColor: '#ffffff' }}
            onClick={onSwitchPage}
          >
            Kembali ke Halaman Komponen
          </button>
        </div>
      </section>
    </div>
  );
}