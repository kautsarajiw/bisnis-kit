module.exports = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    linkParent: '/app',
  },
  {
    key: 'pesanan_pages',
    name: 'Pesanan',
    icon: 'shopping_basket',
    child: [
      {
        key: 'pesanan_baru',
        name: 'Pesanan Baru',
        icon: 'shopping_basket',
        link: '/app/pesanan/baru'
      },
      {
        key: 'pesanan_diterima',
        name: 'Pesanan Diterima',
        icon: 'shopping_basket',
        link: '/app/pesanan/diterima'
      },
      {
        key: 'pesanan_terkirim',
        name: 'Pesanan Terkirim',
        icon: 'shopping_basket',
        link: '/app/pesanan/terkirim'
      },
      {
        key: 'pesanan_berhasil',
        name: 'Pesanan Berhasil',
        icon: 'shopping_basket',
        link: '/app/pesanan/berhasil'
      },
      {
        key: 'pesanan_dibatalkan',
        name: 'Pesanan Dibatalkan',
        icon: 'shopping_basket',
        link: '/app/pesanan/dibatalkan'
      },
      {
        key: 'semua_pesanan',
        name: 'Semua pesanan',
        icon: 'shopping_basket',
        link: '/app/pesanan'
      },
    ]
  },
  {
    key: 'produk_pages',
    name: 'Produk',
    icon: 'storefront',
    child: [
      {
        key: 'kategori_produk',
        name: 'Kategori',
        icon: 'storefront',
        link: '/app/produk/kategori'
      },
      {
        key: 'semua_produk',
        name: 'Semua Produk',
        icon: 'storefront',
        link: '/app/produk'
      },
      {
        key: 'hampir_habis',
        name: 'Hampir Habis',
        icon: 'storefront',
        link: '/app/produk/hampir-habis'
      },
    ]
  },
  {
    key: 'website_pages',
    name: 'Website',
    icon: 'web',
    child: [
      {
        key: 'halaman_utama',
        name: 'Halaman Utama',
        icon: 'web',
        link: '/app/pesanan/baru'
      },
      {
        key: 'hubungi_kami',
        name: 'Hubungi Kami',
        icon: 'web',
        link: '/app/website/hubungi-kami'
      },
      {
        key: 'brand_asset',
        name: 'Brand Asset',
        icon: 'web',
        link: '/app/website/brand-assets'
      },
      {
        key: 'website_analytics',
        name: 'Analytics',
        icon: 'web',
        link: '/app/pesanan/terkirim'
      },
    ]
  },
  {
    key: 'ulasan_oages',
    name: 'Ulasan',
    icon: 'star_half',
    child: [
      {
        key: 'ulasan_terbaru',
        name: 'Terbaru',
        icon: 'star_half',
        link: '/app/pesanan/baru'
      },
      {
        key: 'ulasan_ditampilkan ',
        name: 'Ditampilkan',
        icon: 'star_half',
        link: '/app/pesanan/diterima'
      },
      {
        key: 'ulasan_disembunyikan',
        name: 'Disembunyikan',
        icon: 'star_half',
        link: '/app/pesanan/terkirim'
      },
    ]
  },
  {
    key: 'laporan_pages',
    name: 'Laporan (BETA)',
    icon: 'insert_chart_outlined',
    child: [
      {
        key: 'laporan_pembeli',
        name: 'Pembeli',
        icon: 'insert_chart_outlined',
        link: '/app/pesanan/baru'
      },
      {
        key: 'laporan_pendapatan ',
        name: 'Pendapatan',
        icon: 'insert_chart_outlined',
        link: '/app/pesanan/diterima'
      },
      {
        key: 'laporan_penjualan',
        name: 'Penjualan',
        icon: 'insert_chart_outlined',
        link: '/app/pesanan/terkirim'
      },
    ]
  },
  {
    key: 'pengaturan_pages',
    name: 'Pengaturan',
    icon: 'settings',
    child: [
      {
        key: 'pengaturan_seo',
        name: 'SEO Halaman',
        icon: 'settings',
        link: '/app/pesanan/baru'
      },
      {
        key: 'pengaturan_sistem_pembayaran ',
        name: 'Sistem Pembayaran',
        icon: 'settings',
        link: '/app/pesanan/diterima'
      },
      {
        key: 'pengaturan_jasa_pengiriman',
        name: 'Jasa Pengiriman',
        icon: 'settings',
        link: '/app/pesanan/terkirim'
      },
      {
        key: 'pengaturan_peraturan_toko',
        name: 'Peraturan Toko',
        icon: 'settings',
        link: '/app/pesanan/terkirim'
      },
      {
        key: 'pengaturan_status_toko',
        name: 'Status Toko',
        icon: 'settings',
        link: '/app/pesanan/terkirim'
      },
    ]
  },
];
