import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loading from "../Pages/Misc/Loading/Loading";
import { useEffect, useState } from "react";

function AuthGuard({ children }) {

  const navigate = useNavigate();
  const [user, isLoading] = useAuth();
  const [passCheck, setPassCheck] = useState(false);
  const currentPage = window.location.pathname.slice(1);
  const authPages = [
    'login',
    'forgot-password',
    'reset-password'
  ];
  const isInAuthPage = authPages.some(i => currentPage.startsWith(i));

  useEffect(() => {

    if (isLoading || currentPage === 'error') return;
    if (currentPage === '') navigate(user ? '/dashboard' : '/login', { replace: true });
    if (!user?.isAdmin && currentPage.startsWith('admin')) navigate('/dashboard', { replace: true });
    if (user && isInAuthPage) navigate('/dashboard', { replace: true });
    if (!user && !isInAuthPage) navigate('/login', { replace: true });
    setPassCheck(true);

  }, [currentPage, isLoading])

  return (!passCheck || isLoading) ? <Loading /> : children;
}

export default AuthGuard;
