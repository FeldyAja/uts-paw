import mahasiswa from '../../mahasiswa.json'
import foto from "../../docs/Foto Git.jpg"
import '../components/X1.css'

const REPO = 'https://github.com/FeldyAja/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section>
      <h1 id="judul-statistik">Tentang</h1>
      <img className="foto-profil" src={foto} alt={`Foto ${nama}`} />
      <dl>
        <dt>Nama</dt>
        <dd>{nama}</dd>
        <dt>NIM</dt>
        <dd>{nim}</dd>
        <dt>Kelas</dt>
        <dd>{kelas}</dd>
        <dt>Tema</dt>
        <dd>{tema}</dd>
      </dl>
      <p>
        Kode sumber: <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}