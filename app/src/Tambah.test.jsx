import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'

const DATA = {
  id: '1',
  judul: 'Arduino Uno',
  kategori: 'Perangkat IoT',
  kodeAlat: 'IOT-001',
  jumlah: 18,
  kondisi: 'baik',
}

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(DATA))))
})

function buka(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

test('rute yang tidak diketahui menampilkan halaman 404', async () => {
  buka('/Cihuy')
  expect(await screen.findByText('Halaman tidak ditemukan.')).toBeInTheDocument()
})

test('form menolak judul kosong', async () => {
  buka('/tambah')
  await userEvent.click(screen.getByRole('button', { name: 'Simpan' }))
  expect(screen.getByRole('alert')).toHaveTextContent('Nama alat wajib diisi, minimal 3 karakter.')
})

test('halaman Tentang menampilkan Nama, NIM, dan Kelas', async () => {
  buka('/tentang')
  expect(await screen.findByText('Feldy')).toBeInTheDocument()
  expect(await screen.findByText('124140083')).toBeInTheDocument()
  expect(await screen.findByText('RB')).toBeInTheDocument()
})