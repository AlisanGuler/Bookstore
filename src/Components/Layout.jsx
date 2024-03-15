
import { NavLink, Outlet, useNavigate, Navigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  // api'dan alındğını varsayalım
  const user = {
    name: 'Ali',
    type: 'admin',
  };

  // eğerki kullanıcı tipi admin değilse alt route'lara erişime izin verme
  if (user.type !== 'admin') {
    //? 1) hook kullanımı
    // render işlemi bitmeden önce yönlendirdiği için uyarı veriyor
    // navigate('/');
    //? 2) bileşen ile yönlendirme
    return <Navigate to={'/'} />;
  }

  return (
    <div className="d-flex gap-5 p-4">
      <aside className="d-flex flex-column bg-light p-3 rounded">
        <NavLink to={'/ekstra/kategoriler'}>Kategoriler</NavLink>
        <NavLink to={'/ekstra/kampanyalar'}>Kampanyalar</NavLink>
        <NavLink to={'/ekstra/ayarlar'}>Ayarlar</NavLink>
      </aside>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
