import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import KartuItem from './components/KartuItem.jsx'

const DATA = {
  id: '1',
  judul: 'Arduino Uno',
  kategori: 'Perangkat IoT',
  kodeAlat: 'IOT-001',
  jumlah: 18,
  kondisi: 'baik',
}

function tampilkan() {
  render(
    <MemoryRouter>
      <KartuItem item={DATA} />
    </MemoryRouter>,
  )
}

test('kartu menampilkan judul, kategori, kode alat, dan jumlah', () => {
  tampilkan()
  expect(screen.getByText('Arduino Uno')).toBeInTheDocument()
  expect(screen.getByText(/Perangkat IoT/)).toBeInTheDocument()
  expect(screen.getByText(/IOT-001/)).toBeInTheDocument()
  expect(screen.getByText(/18/)).toBeInTheDocument()
})

test('judul pada kartu menjadi tautan ke halaman detail', () => {
  tampilkan()
  const tautan = screen.getByRole('link', { name: 'Arduino Uno' })
  expect(tautan).toHaveAttribute('href', '/koleksi/1')
})