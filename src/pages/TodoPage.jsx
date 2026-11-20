import { useState, useEffect } from 'react';

export default function TodoPage() {
  // Mengambil data awal dari localStorage jika ada
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('mono_todos');
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, text: 'Setup struktur project React JS', completed: true },
          { id: 2, text: 'Membuat katalog komponen tema hitam putih', completed: true },
          { id: 3, text: 'Menyelesaikan halaman To-Do App', completed: false },
        ];
  });

  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'completed'

  // State khusus untuk fitur Edit / Update
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Simpan otomatis ke localStorage setiap ada perubahan
  useEffect(() => {
    localStorage.setItem('mono_todos', JSON.stringify(todos));
  }, [todos]);

  // Tambah tugas baru
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputText.trim(),
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInputText('');
  };

  // Ubah status selesai / belum
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Hapus satu tugas
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Hapus semua tugas yang sudah selesai
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Mulai mode Edit
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Simpan hasil Update
  const saveEdit = (id) => {
    if (!editText.trim()) return;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo
      )
    );
    setEditingId(null);
    setEditText('');
  };

  // Batal Edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  // Dukungan tombol Enter & Escape saat mengedit
  const handleEditKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      saveEdit(id);
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  // Filter daftar tugas
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="container">
      <section className="section" style={{ borderBottom: 'none' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          {/* Header Halaman */}
          <div style={{ marginBottom: '32px' }}>
            <span className="badge badge-outline">HALAMAN 03</span>
            <h1 className="section-title" style={{ fontSize: '2.25rem', marginTop: '12px' }}>
              Minimalist Task Manager
            </h1>
            <p className="section-desc">
              Kelola daftar pekerjaan harian Anda secara fokus. Data tersimpan otomatis di browser.
            </p>
          </div>

          {/* Form Input Tugas */}
          <form onSubmit={handleAddTodo} className="todo-form">
            <input
              type="text"
              className="input"
              style={{ flex: 1 }}
              placeholder="Tulis tugas baru..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              + Tambah
            </button>
          </form>

          {/* Bar Filter & Statistik */}
          <div className="todo-toolbar">
            <span style={{ fontSize: '0.875rem', color: '#525252', fontWeight: 500 }}>
              <strong>{activeCount}</strong> tugas tersisa
            </span>

            <div className="todo-filters">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                Semua ({todos.length})
              </button>
              <button
                className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                onClick={() => setFilter('active')}
              >
                Aktif
              </button>
              <button
                className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                onClick={() => setFilter('completed')}
              >
                Selesai
              </button>
            </div>
          </div>

          {/* Daftar Tugas */}
          <div className="todo-list">
            {filteredTodos.length === 0 ? (
              <div className="todo-empty">
                Tidak ada tugas pada kategori ini.
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={`todo-item ${todo.completed ? 'completed' : ''}`}
                >
                  {editingId === todo.id ? (
                    /* --- MODE EDIT --- */
                    <div className="todo-edit-wrapper">
                      <input
                        type="text"
                        className="input todo-edit-input"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => handleEditKeyDown(e, todo.id)}
                        autoFocus
                      />
                      <div className="todo-actions">
                        <button
                          type="button"
                          className="todo-action-btn save"
                          onClick={() => saveEdit(todo.id)}
                        >
                          Simpan
                        </button>
                        <button
                          type="button"
                          className="todo-action-btn"
                          onClick={cancelEdit}
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* --- MODE TAMPILAN NORMAL --- */
                    <>
                      <div className="todo-label">
                        <input
                          type="checkbox"
                          className="todo-checkbox"
                          checked={todo.completed}
                          onChange={() => toggleTodo(todo.id)}
                        />
                        <span
                          className="todo-text"
                          onDoubleClick={() => startEdit(todo)}
                          title="Klik dua kali untuk mengedit"
                        >
                          {todo.text}
                        </span>
                      </div>

                      <div className="todo-actions">
                        <button
                          type="button"
                          className="todo-action-btn"
                          onClick={() => startEdit(todo)}
                          title="Edit tugas"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="todo-delete"
                          onClick={() => deleteTodo(todo.id)}
                          title="Hapus tugas"
                        >
                          ✕
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer Action */}
          {todos.some((t) => t.completed) && (
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn btn-outline" onClick={clearCompleted}>
                Bersihkan Tugas Selesai
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}