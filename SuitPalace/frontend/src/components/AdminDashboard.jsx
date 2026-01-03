import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Shirt, Scissors, Package, ShoppingCart, 
  Plus, Trash2, Edit, Calendar as CalendarIcon, Info, 
  LogOut, Search, FileSpreadsheet, Printer, Menu, X 
} from 'lucide-react';

const AdminDashboard = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('calendar');
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk mobile menu

  const [db] = useState({
    admin: [
      { id: 1, username: 'super_admin', password: '••••' },
      { id: 2, username: 'manager_suit', password: '••••' },
      { id: 3, username: 'admin_tng', password: '••••' }
    ],
    jas: [
      { id: 1, nama: 'Slim Fit Charcoal', size: 'L', warna: 'Abu Tua', stok: 4, kondisi: 'Sangat Baik' },
      { id: 2, nama: 'Classic Tuxedo', size: 'M', warna: 'Hitam', stok: 2, kondisi: 'Sangat Baik' },
      { id: 3, nama: 'Velvet Dinner Jacket', size: 'XL', warna: 'Maroon', stok: 1, kondisi: 'Baru' },
      { id: 4, nama: 'Navy Double Breasted', size: 'L', warna: 'Navy', stok: 3, kondisi: 'Baik' },
      { id: 5, nama: 'Modern Grey Suit', size: 'S', warna: 'Light Grey', stok: 5, kondisi: 'Sangat Baik' },
      { id: 6, nama: 'Deep Blue Wedding', size: 'M', warna: 'Biru Tua', stok: 2, kondisi: 'Baik' }
    ],
    kemeja: [
      { id: 1, nama: 'Classic White Poplin', size: 'L', warna: 'Putih', stok: 15, kondisi: 'Baru' },
      { id: 2, nama: 'Black Satin Luxury', size: 'M', warna: 'Hitam', stok: 10, kondisi: 'Baru' },
      { id: 3, nama: 'Wing Tip Tuxedo', size: 'L', warna: 'Broken White', stok: 8, kondisi: 'Sangat Baik' },
      { id: 4, nama: 'Ivory Silk Shirt', size: 'M', warna: 'Gading', stok: 6, kondisi: 'Baik' }
    ],
    celana: [
      { id: 1, nama: 'Formal Black Trousers', size: 'L', warna: 'Hitam', stok: 12, kondisi: 'Sangat Baik' },
      { id: 2, nama: 'Grey Wool Pants', size: 'M', warna: 'Abu-abu', stok: 7, kondisi: 'Baik' },
      { id: 3, nama: 'Navy Slim Trousers', size: 'L', warna: 'Navy', stok: 9, kondisi: 'Sangat Baik' }
    ],
    paket: [
      { id: 1, nama_paket: 'Wedding Premium', jas_id: 1, kemeja_id: 1, celana_id: 1, durasi_hari: 3, harga_paket: 750000 },
      { id: 2, nama_paket: 'Prom Night Special', jas_id: 2, kemeja_id: 2, celana_id: 2, durasi_hari: 1, harga_paket: 350000 },
      { id: 3, nama_paket: 'Executive Package', jas_id: 4, kemeja_id: 1, celana_id: 3, durasi_hari: 2, harga_paket: 500000 }
    ],
    orders: [
      { id: 1, paket_id: 1, tgl_mulai_sewa: '2026-01-10', tgl_akhir_sewa: '2026-01-13', deskripsi_kustom: 'Jas bagian bahu diperlebar', status_pelunasan: 'Lunas' },
      { id: 2, paket_id: 2, tgl_mulai_sewa: '2026-01-15', tgl_akhir_sewa: '2026-01-16', deskripsi_kustom: 'Lengan kemeja +2 cm', status_pelunasan: 'DP 50%' },
      { id: 3, paket_id: 3, tgl_mulai_sewa: '2026-01-18', tgl_akhir_sewa: '2026-01-20', deskripsi_kustom: 'Sewa untuk acara kantor', status_pelunasan: 'Belum Bayar' }
    ]
  });
  const columns = {
    admin: ['id', 'username', 'password'],
    jas: ['id', 'nama', 'size', 'warna', 'stok', 'kondisi'],
    kemeja: ['id', 'nama', 'size', 'warna', 'stok', 'kondisi'],
    celana: ['id', 'nama', 'size', 'warna', 'stok', 'kondisi'],
    paket: ['id', 'nama_paket', 'jas_id', 'kemeja_id', 'celana_id', 'durasi_hari', 'harga_paket'],
    orders: ['id', 'paket_id', 'tgl_mulai_sewa', 'tgl_akhir_sewa', 'deskripsi_kustom', 'status_pelunasan']
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(db[activeTab]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, activeTab);
    XLSX.writeFile(workbook, `SuitPalace_${activeTab}.xlsx`);
  };

  const filteredData = activeTab !== 'calendar' ? db[activeTab].filter(item => 
    Object.values(item).some(val => val.toString().toLowerCase().includes(searchQuery.toLowerCase()))
  ) : [];

  const getOrderForDate = (day) => {
    const formattedDate = `2026-01-${day < 10 ? '0' + day : day}`;
    return db.orders.find(o => formattedDate >= o.tgl_mulai_sewa && formattedDate <= o.tgl_akhir_sewa);
  };

  const currentOrder = getOrderForDate(selectedDate);
  const currentPaket = currentOrder ? db.paket.find(p => p.id === currentOrder.paket_id) : null;

  return (
    <div className="flex min-h-screen bg-[#F0F2F5] text-[#1A120B] font-sans overflow-x-hidden">
      
      {/* MOBILE HAMBURGER */}
      <div className="lg:hidden fixed top-6 right-6 z-[100] print:hidden">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-3 bg-[#1A120B] text-white rounded-2xl shadow-xl"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* SIDEBAR */}
      <aside className={`
        fixed inset-y-0 left-0 z-[90] w-72 bg-[#1A120B] text-white p-8 flex flex-col transition-transform duration-300 shadow-2xl
        lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        print:hidden
      `}>
        <div className="mb-10 px-2">
          <h1 className="text-2xl font-black italic tracking-tighter uppercase leading-none">Suit<span className="text-[#8D775F]">Palace</span></h1>
          <p className="text-[9px] text-gray-500 font-bold mt-2 tracking-widest uppercase opacity-50">Admin Panel</p>
        </div>

        <nav className="space-y-1 overflow-y-auto pr-2 flex-1">
          <button onClick={() => {setActiveTab('calendar'); setIsSidebarOpen(false);}} className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${activeTab === 'calendar' ? 'bg-[#8D775F]' : 'text-gray-500 hover:bg-white/5'}`}>
            <div className="flex items-center gap-4"><CalendarIcon size={18} /><span className="text-[10px] font-black uppercase tracking-widest">Jadwal</span></div>
          </button>
          
          <div className="h-px bg-white/5 my-4 mx-4" />

          {Object.keys(columns).map((key) => (
            <button key={key} onClick={() => {setActiveTab(key); setIsSidebarOpen(false);}} className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${activeTab === key ? 'bg-[#8D775F]' : 'text-gray-500 hover:bg-white/5'}`}>
              <div className="flex items-center gap-4">
                {key === 'admin' ? <Shield size={18}/> : key === 'orders' ? <ShoppingCart size={18}/> : key === 'paket' ? <Package size={18}/> : <Shirt size={18}/>}
                <span className="text-[10px] font-black uppercase tracking-widest">{key}</span>
              </div>
            </button>
          ))}
        </nav>

        <button onClick={onBack} className="mt-6 w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-white/40 hover:text-white hover:bg-rose-500/10 transition-all group">
          <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Exit Site</span>
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className={`flex-1 transition-all duration-300 lg:ml-72 p-6 lg:p-12 w-full print:ml-0`}>
        {/* HEADER SECTION */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 print:hidden relative z-10">
      <div className="mt-8 lg:mt-0">
        <h2 className="text-3xl lg:text-5xl font-black uppercase italic tracking-tighter leading-none">
          {activeTab === 'calendar' ? 'Jadwal' : 'Table'}_<span className="text-[#8D775F]">{activeTab}</span>
        </h2>
      </div>
      
      {activeTab !== 'calendar' && (
        <div className="flex flex-row flex-wrap gap-2 items-center">
          {/* Search Input Container */}
          <div className="relative flex-grow min-w-[140px] md:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={(e) => e.stopPropagation()} // Mencegah event bubbling
              className="w-full md:w-48 bg-white border border-black/10 rounded-xl py-2.5 pl-9 pr-3 text-[11px] font-bold uppercase outline-none focus:border-[#8D775F] shadow-sm appearance-none"
              style={{ fontSize: '16px' }} // Trik CSS agar iOS tidak auto-zoom saat fokus
            />
          </div>

          {/* Buttons Container */}
          <div className="flex gap-2">
            <button onClick={exportToExcel} className="p-2.5 bg-emerald-600 text-white rounded-xl shadow-lg hover:bg-emerald-700 active:scale-95 transition-all">
              <FileSpreadsheet size={18} />
            </button>
            <button onClick={() => window.print()} className="p-2.5 bg-white border border-black/5 text-black rounded-xl shadow-sm hover:bg-gray-50 active:scale-95 transition-all">
              <Printer size={18} />
            </button>
            <button className="bg-[#1A120B] text-white px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all">
              <Plus size={16} className="text-[#8D775F]" /> New
            </button>
          </div>
        </div>
      )}
    </div>
        {activeTab === 'calendar' ? (
          /* RESPONSIVE CALENDAR GRID */
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-10">
            <div className="xl:col-span-2 bg-white p-6 lg:p-10 rounded-[2rem] lg:rounded-[3rem] shadow-xl border border-black/5 overflow-hidden">
              <div className="grid grid-cols-7 gap-1 lg:gap-4">
                {['M', 'S', 'S', 'R', 'K', 'J', 'S'].map(day => (
                  <div key={day} className="text-center text-[10px] font-black text-gray-400 uppercase mb-4">{day}</div>
                ))}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const hasOrder = getOrderForDate(day);
                  return (
                    <button key={day} onClick={() => setSelectedDate(day)}
                      className={`aspect-square rounded-lg lg:rounded-2xl flex items-center justify-center text-[10px] lg:text-xs font-bold transition-all border
                        ${selectedDate === day ? 'bg-[#1A120B] text-white border-[#1A120B] scale-105 lg:scale-110 shadow-lg' : hasOrder ? 'bg-[#8D775F] text-white border-[#8D775F]' : 'bg-gray-50 text-gray-300 border-transparent hover:border-gray-200'}`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DETAIL ORDER CARD */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                {currentOrder ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-[#1A120B] text-white p-8 rounded-[2rem] lg:rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <h4 className="text-xl lg:text-2xl font-black uppercase italic mb-6 leading-none">{currentPaket?.nama_paket}</h4>
                    <div className="space-y-4 mb-2 text-[10px]">
                      <div className="bg-white/5 p-4 rounded-2xl">
                        <p className="text-gray-500 mb-1 uppercase font-bold">Periode</p>
                        <p className="font-mono text-[11px]">{currentOrder.tgl_mulai_sewa} — {currentOrder.tgl_akhir_sewa}</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl">
                        <p className="text-gray-500 mb-1 uppercase font-bold">Catatan</p>
                        <p className="italic opacity-80 leading-relaxed text-[10px]">"{currentOrder.deskripsi_kustom}"</p>
                      </div>
                    </div>
                    <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                      <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest ${currentOrder.status_pelunasan === 'Lunas' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-amber-500/20 text-amber-500'}`}>
                        {currentOrder.status_pelunasan}
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-white p-8 lg:p-10 rounded-[2rem] lg:rounded-[3rem] border border-dashed border-gray-200 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Pilih tanggal booking
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* RESPONSIVE TABLE (Desktop: Table, Mobile: Cards) */
          <div className="w-full">
            {/* TAMPILAN DESKTOP (TABLE) */}
            <div className="hidden md:block bg-white rounded-[2rem] lg:rounded-[3rem] shadow-xl border border-black/5 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b">
                    <tr className="text-[9px] font-black uppercase text-gray-400 tracking-widest">
                      {columns[activeTab].map((col) => <th key={col} className="p-8">{col.replace(/_/g, ' ')}</th>)}
                      <th className="p-8 text-right print:hidden">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((row, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50 transition-colors text-[11px] font-bold uppercase tracking-tight">
                        {columns[activeTab].map((col) => (
                          <td key={col} className="p-8 whitespace-nowrap">
                            {col === 'status_pelunasan' || col === 'kondisi' ? (
                              <span className="bg-black text-white px-3 py-1 rounded-lg text-[9px]">{row[col]}</span>
                            ) : col === 'harga_paket' ? (
                              <span className="text-[#8D775F]">Rp {row[col].toLocaleString()}</span>
                            ) : row[col]}
                          </td>
                        ))}
                        <td className="p-8 text-right space-x-4 print:hidden">
                          <button className="text-gray-300 hover:text-[#8D775F]"><Edit size={16} /></button>
                          <button className="text-gray-300 hover:text-red-500"><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* TAMPILAN MOBILE (CARDS) */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {filteredData.map((row, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-md border border-black/5">
                  <div className="flex justify-between items-start mb-4 border-b pb-4">
                    <span className="text-[10px] font-black text-[#8D775F] uppercase">ID #{row.id}</span>
                    <div className="flex gap-3">
                      <button className="text-gray-400"><Edit size={16} /></button>
                      <button className="text-red-300"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {columns[activeTab].filter(col => col !== 'id').map(col => (
                      <div key={col} className="flex justify-between items-center">
                        <span className="text-[8px] uppercase font-bold text-gray-400 tracking-widest">{col.replace(/_/g, ' ')}</span>
                        <span className="text-[10px] font-black uppercase text-right">
                          {col === 'harga_paket' ? `Rp ${row[col].toLocaleString()}` : row[col]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* OVERLAY UNTUK SIDEBAR MOBILE */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;