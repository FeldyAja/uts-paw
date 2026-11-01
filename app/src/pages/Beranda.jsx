import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import '../components/X1.css'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <h1 id="judul-beranda">Inventaris Laboratorium IoT</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p>
          Ada {items.length} alat dalam {jumlahKategori} kategori.
        </p>
      )}
      <Link to="/koleksi">Lihat semua alat</Link>
    </section>
  )
}