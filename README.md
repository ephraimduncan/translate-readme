# Terjemahkan Tindakan Readme

## Terjemahan README
- [Bahasa Inggris](README.md)
- [简体中文](BACA.zh-CN.md)
- [繁体中文](BACA.zh-TW.md)
- [हिंदी](BACA.hi.md)
- [Française](README.fr.md)
- [عربى](BACA.ar.md)

**GitHub Action untuk menerjemahkan Readme ke bahasa apa pun**

Ini adalah Tindakan GitHub yang secara otomatis menerjemahkan readme di repo Anda ke bahasa tertentu.

_Pengajuan untuk [DEV: GitHub Actions For Open Source!](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn) hackathon_

## Mempersiapkan

1. **Tambahkan file alur kerja** ke proyek Anda (mis. `.github/workflows/readme.yml`):
```
nama: Terjemahkan README

pada:
  dorongan:
    ranting:
      - utama
      - tuan
pekerjaan:
  membangun:
    berjalan-on: ubuntu-terbaru
    Langkah:
      - menggunakan: tindakan/checkout@v2
      - nama: Setup Node.js
        menggunakan: tindakan/setup-node@v1
        dengan:
          versi simpul: 12.x
      # Kode Bahasa ISO: https://cloud.google.com/translate/docs/languages  
      - nama: Menambahkan README - Bahasa Mandarin Sederhana
        menggunakan: dephraiim/translate-readme@main
        dengan:
          LANG: zh-CN
      - nama: Menambahkan README - Tradisional Cina
        menggunakan: dephraiim/translate-readme@main
        dengan:
          LANG: zh-TW
      - nama: Menambahkan README - Hindi
        menggunakan: dephraiim/translate-readme@main
        dengan:
          LANG: hai
      - nama: Menambahkan README - Arab
        menggunakan: dephraiim/translate-readme@main
        dengan:
          LANG: ar
      - nama: Menambahkan README - Prancis
        menggunakan: dephraiim/translate-readme@main
        dengan:
          LANG: dari
```

## Konfigurasi

### Pilihan

Anda dapat mengonfigurasi tindakan lebih lanjut dengan opsi berikut:

- `LANG`: Bahasa yang ingin Anda terjemahkan readme Anda. Standarnya adalah Cina Sederhana. (Saya seorang Ghana) Bahasa yang didukung dapat ditemukan di bawah.
  (default: `zh-CH`) (wajib: `false`)

## Bahasa yang Didukung

Bahasa yang didukung dapat ditemukan di sini https://cloud.google.com/translate/docs/languages

### Masalah

Periksa [di sini](https://github.com/dephraiim/translate-readme/issues/1) untuk masalah yang terkait dengan tindakan ini.

### Perkembangan

Saran dan kontribusi selalu diterima!

### LISENSI

[MIT](./LISENSI)
