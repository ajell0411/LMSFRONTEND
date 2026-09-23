"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fitur = [
    {
      title: "Materi Pembelajaran",
      desc: "Akses materi belajar kapan saja dan di mana saja dengan format yang mudah dipahami.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 5.5C4 4.67157 4.67157 4 5.5 4H12V20H5.5C4.67157 20 4 19.3284 4 18.5V5.5Z"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M20 5.5C20 4.67157 19.3284 4 18.5 4H12V20H18.5C19.3284 20 20 19.3284 20 18.5V5.5Z"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Tugas dan Asesmen",
      desc: "Buat, kumpulkan, dan nilai tugas maupun asesmen siswa secara terstruktur.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="3" width="14" height="18" rx="2" stroke="#2563EB" strokeWidth="1.5" />
          <path d="M8 8H16" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 12H16" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 16H12" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Quiz",
      desc: "Uji pemahaman siswa dengan quiz interaktif yang dapat diselesaikan langsung online.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="1.5" />
          <path
            d="M9.5 9.5C9.5 8 11 7.5 12 7.5C13 7.5 14.5 8 14.5 9.5C14.5 11 12 11 12 13"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="16" r="0.9" fill="#2563EB" />
        </svg>
      ),
    },
    {
      title: "Pemantauan Pembelajaran",
      desc: "Pantau perkembangan dan progres belajar siswa secara real-time melalui dashboard.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20V10" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 20V4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 20V13" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 20H20" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Manajemen Siswaa",
      desc: "Kelola data dan aktivitas siswa dengan mudah dalam satu sistem terintegrasi.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="8" r="3" stroke="#2563EB" strokeWidth="1.5" />
          <path
            d="M3.5 19C3.5 15.9624 5.96243 13.5 9 13.5C12.0376 13.5 14.5 15.9624 14.5 19"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="17" cy="9" r="2.2" stroke="#2563EB" strokeWidth="1.5" />
          <path
            d="M15.5 13.7C18.2 13.9 20.3 16.1 20.3 19"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Manajemen Guru",
      desc: "Atur jadwal, kelas, dan aktivitas mengajar guru secara efisien dan terpusat.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 19.5C4 17 6 15 9 15C10 15 10.8 15.2 11.5 15.6"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="9" cy="9" r="3.2" stroke="#2563EB" strokeWidth="1.5" />
          <path
            d="M14 8.5L15.3 9.8L18 7"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="8.5" r="4.3" stroke="#2563EB" strokeWidth="1.2" />
        </svg>
      ),
    },
  ];

  const alur = [
    { label: "Login", desc: "Masuk ke akun E-CLASS" },
    { label: "Akses Materi", desc: "Pelajari materi yang tersedia" },
    { label: "Kerjakan Tugas", desc: "Selesaikan tugas yang diberikan" },
    { label: "Ikuti Asesmen", desc: "Uji pemahaman melalui asesmen" },
    { label: "Lihat Hasil", desc: "Pantau hasil dan progres belajar" },
  ];

  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="logo">
            <img src="/logok.png" alt="E-CLASS" className="logo-full" />
          </div>

          <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
            <a href="#beranda" onClick={() => setMenuOpen(false)}>
              Beranda
            </a>
            <a href="#fitur" onClick={() => setMenuOpen(false)}>
              Fitur
            </a>
            <a href="#cara-kerja" onClick={() => setMenuOpen(false)}>
              Cara Kerja
            </a>
            <a href="#tentang" onClick={() => setMenuOpen(false)}>
              Tentang
            </a>
            <Link href="/login" className="btn btn-primary nav-cta">
              Masuk
            </Link>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Buka menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="beranda">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1>E-CLASS</h1>
              <span className="badge">Platform Pembelajaran Digital</span>
              <p className="hero-desc">
                mendukung kegiatatan belajar mengajar secara digital melalui materi pembelajaran, quiz, ujian online,tugas, serta pengelolaan data dalam satu platfrom terintegrasi
              </p>
              <div className="hero-actions">
                <Link href="/login" className="btn btn-primary">
                  Mulai Sekarang
                </Link>
                <a href="#fitur" className="btn btn-outline">
                  Lihat Fitur
                </a>
              </div>
            </div>

            <div className="hero-illustration">
              <img src="/cewek.png" alt="Ilustrasi siswa belajar menggunakan laptop" />
            </div>
          </div>
        </section>

        {/* FITUR UTAMA */}
        <section className="section" id="fitur">
          <div className="container">
            <h2 className="section-title">Fitur-fitur Utama Di E-CLASS</h2>
            <p className="section-subtitle">
              Semua kebutuhan belajar mengajar tersedia dalam satu platform yang
              terintegrasi.
            </p>

            <div className="feature-grid">
              {fitur.map((item) => (
                <div className="feature-card" key={item.title}>
                  <div className="feature-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ALUR PEMBELAJARAN */}
        <section className="section section-alt" id="cara-kerja">
          <div className="container">
            <h2 className="section-title">Alur Pembelajaran</h2>
            <p className="section-subtitle">
              Proses belajar yang sederhana dan mudah diikuti oleh setiap siswa.
            </p>

            <div className="flow">
              {alur.map((step, idx) => (
                <div className="flow-step" key={step.label}>
                  <div className="flow-step-inner">
                    <span className="flow-number">{idx + 1}</span>
                    <h4>{step.label}</h4>
                    <p>{step.desc}</p>
                  </div>
                  {idx < alur.length - 1 && <span className="flow-arrow">→</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE HIGHLIGHT */}
        <section className="section" id="tentang">
          <div className="container highlight">
            <div className="highlight-illustration">
              <img src="/cowo.png" alt="Ilustrasi fitur E-CLASS" />
            </div>
            <div className="highlight-text">
              <h2>Akses Semua Kebutuhan Belajar dalam Satu Platform</h2>
              <p>
                Dengan E-CLASS, siswa dan guru dapat mengakses materi, tugas,
                asesmen, dan hasil belajar tanpa perlu berpindah aplikasi. Semua
                kebutuhan pembelajaran digital tersedia secara terpusat, praktis,
                dan mudah digunakan.
              </p>
              <Link href="/login" className="btn btn-primary highlight-cta">
                Mulai Sekarang
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-col">
            <div className="logo">
              <img src="/l.png" alt="E-CLASS" className="logo-fulll" />
            </div>
            <p>Platform pembelajaran digital</p>
            <p>untuk mendukung proses belajar </p>
            <p>mengajar yang mudah dan efektif.</p>
          </div>

          <div className="footer-col">
            <h4>Navigasi</h4>
            <a href="#beranda">Beranda</a>
            <a href="#fitur">Fitur</a>
            <a href="#cara-kerja">Cara Kerja</a>
            <a href="#tentang">Tentang</a>
          </div>

          <div className="footer-col">
            <h4>Kontak</h4>
            <p>Email: info@eclass.id</p>
            <p>Telepon: (021) 555-0123</p>
            <p>Alamat: Jakarta, Indonesia</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 E-CLASS. Seluruh hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}