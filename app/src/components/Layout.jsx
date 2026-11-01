import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'
import './X1.css'

const MENU = [
    { ke: '/', label: 'Beranda' },
    { ke: "/koleksi", label: 'Koleksi' },
    { ke: "/tambah", label: 'Tambah' },
    { ke: "/statistik", label: 'Statistik' },
    { ke: "/tentang", label: 'Tentang' },
]

export default function Layout() {
    return (
        <div className= "kerangka">
            <header className= "kepala">
                <strong>Inventaris Laboratorium</strong>
                <nav className="menu">
                    {MENU.map(({ ke, label }) => (
                        <NavLink key={ke} to={ke} end={ke === '/'}>
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </header>
            <main className="isi">
                <Outlet />
            </main>
            <footer id="footer-uts" className="kaki">
                Ujian Tengah Semester Pengembangan Aplikasi Web
            </footer>
        </div>
    )
}