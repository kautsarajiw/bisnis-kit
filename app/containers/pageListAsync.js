import Loadable from 'react-loadable';
import Loading from 'enl-components/Loading';

//Pages Menu Dashboard
export const DashboardPages = Loadable({
  loader: () => import('./Pages/Dashboard'),
  loading: Loading,
});

//Pages Menu Pesanan
export const SemuaPesanan = Loadable({
  loader: () => import('./Pages/Pesanan/SemuaPesanan'),
  loading: Loading,
});
export const PesananBaru = Loadable({
  loader: () => import('./Pages/Pesanan/PesananBaru'),
  loading: Loading,
});
export const PesananDiterima = Loadable({
  loader: () => import('./Pages/Pesanan/PesananDiterima'),
  loading: Loading,
});
export const PesananTerkirim = Loadable({
  loader: () => import('./Pages/Pesanan/PesananTerkirim'),
  loading: Loading,
});
export const PesananBerhasil = Loadable({
  loader: () => import('./Pages/Pesanan/PesananBerhasil'),
  loading: Loading,
});
export const PesananDibatalkan = Loadable({
  loader: () => import('./Pages/Pesanan/PesananDibatalkan'),
  loading: Loading,
});

//Pages Menu Produk
export const KategoriProduk = Loadable({
  loader: () => import('./Pages/Produk/KategoriProduk'),
  loading: Loading,
});
export const SemuaProduk = Loadable({
  loader: () => import('./Pages/Produk/SemuaProduk'),
  loading: Loading,
});
export const HampirHabis = Loadable({
  loader: () => import('./Pages/Produk/HampirHabis'),
  loading: Loading,
});

//Pages Menu Website
export const HubungiKami = Loadable({
  loader: () => import('./Pages/WebsitePages/HubungiKami'),
  loading: Loading,
});
export const BrandAssets = Loadable({
  loader: () => import('./Pages/WebsitePages/BrandAssets'),
  loading: Loading,
});

//Pages Inbox Pelanggan
export const InboxPelanggan = Loadable({
  loader: () => import('./Pages/Email/'),
  loading: Loading,
});

export const Table = Loadable({
  loader: () => import('./Pages/Table/BasicTable'),
  loading: Loading,
});
export const Form = Loadable({
  loader: () => import('./Pages/Forms/ReduxForm'),
  loading: Loading,
});
export const Login = Loadable({
  loader: () => import('./Pages/Users/Login'),
  loading: Loading,
});
export const ResetPassword = Loadable({
  loader: () => import('./Pages/Users/ResetPassword'),
  loading: Loading,
});
export const ComingSoon = Loadable({
  loader: () => import('./Pages/ComingSoon'),
  loading: Loading,
});
export const BlankPage = Loadable({
  loader: () => import('./Pages/BlankPage'),
  loading: Loading,
});
export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});
export const Error = Loadable({
  loader: () => import('./Pages/Error'),
  loading: Loading,
});
export const Maintenance = Loadable({
  loader: () => import('./Pages/Maintenance'),
  loading: Loading,
});
export const Parent = Loadable({
  loader: () => import('./Parent'),
  loading: Loading,
});
export const NotFoundDedicated = Loadable({
  loader: () => import('./Pages/Standalone/NotFoundDedicated'),
  loading: Loading,
});
