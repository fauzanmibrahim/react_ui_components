import { useState } from 'react';

export default function ComponentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="container">
      {/* Header Halaman */}
      <section className="section">
        <span className="badge badge-outline">HALAMAN 01</span>
        <h1 className="section-title" style={{ fontSize: '2.25rem', marginTop: '12px' }}>
          Katalog Komponen Website
        </h1>
        <p className="section-desc">
          Kumpulan komponen UI standar dengan kontras monokrom hitam dan putih.
        </p>
      </section>

      {/* 1. Buttons & Badges */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Buttons & Badges</h2>
          <p className="section-desc">Variasi tombol aksi dan label status.</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
          <button className="btn btn-primary">Primary Action</button>
          <button className="btn btn-outline">Secondary Outline</button>
          <button className="btn btn-ghost">Ghost Button</button>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            Buka Modal Dialog
          </button>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span className="badge badge-dark">Active</span>
          <span className="badge badge-outline">Draft / Pending</span>
          <span className="badge badge-dark">v2.0</span>
        </div>
      </section>

      {/* 2. Forms & Inputs */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Form & Input Controls</h2>
          <p className="section-desc">Elemen formulir standar untuk interaksi pengguna.</p>
        </div>

        <div className="grid-2">
          <div className="card">
            <div className="form-group">
              <label className="label">Nama Lengkap</label>
              <input
                type="text"
                className="input"
                placeholder="Masukkan nama Anda..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="label">Kategori Layanan</label>
              <select className="select">
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>System Architecture</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <input type="checkbox" id="agree" defaultChecked />
              <label htmlFor="agree" style={{ fontSize: '0.9rem' }}>
                Saya menyetujui syarat dan ketentuan
              </label>
            </div>

            <button className="btn btn-primary" style={{ width: '100%' }}>
              Kirim Formulir
            </button>
          </div>

          {/* 3. Alerts & Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="alert">
              <div>
                <strong>Notifikasi Sistem</strong>
                <p style={{ fontSize: '0.875rem', color: '#525252' }}>
                  {inputValue ? `Halo, ${inputValue}! Data siap diproses.` : 'Perubahan pengaturan telah berhasil disimpan.'}
                </p>
              </div>
              <span className="badge badge-dark">INFO</span>
            </div>

            <div className="card">
              <span className="badge badge-outline" style={{ marginBottom: '12px' }}>ARTICLE CARD</span>
              <h3 style={{ marginBottom: '8px' }}>Prinsip Desain Monokrom</h3>
              <p style={{ color: '#525252', fontSize: '0.95rem', marginBottom: '16px' }}>
                Penggunaan warna hitam dan putih memaksa fokus pengguna tertuju pada hierarki tipografi, spasi, dan fungsi utama.
              </p>
              <button className="btn btn-outline">Baca Selengkapnya →</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Data Table */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="section-header">
          <h2 className="section-title">Data Table</h2>
          <p className="section-desc">Komponen tabel terstruktur untuk menampilkan daftar data.</p>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Project</th>
                <th>Status</th>
                <th>Tanggal Rilis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>Sistem Manajemen Inventaris</td>
                <td><span className="badge badge-dark">Selesai</span></td>
                <td>12 Nov 2026</td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Portal E-Commerce Minimalis</td>
                <td><span className="badge badge-outline">Proses</span></td>
                <td>19 Nov 2026</td>
              </tr>
              <tr>
                <td>#003</td>
                <td>Dashboard Analitik Keuangan</td>
                <td><span className="badge badge-dark">Selesai</span></td>
                <td>01 Des 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginBottom: '8px' }}>Konfirmasi Tindakan</h3>
            <p style={{ color: '#525252', fontSize: '0.95rem', marginBottom: '24px' }}>
              Ini adalah contoh komponen Modal / Dialog interaktif yang muncul di atas konten utama.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <button className="btn btn-outline" onClick={() => setIsModalOpen(false)}>
                Batal
              </button>
              <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}