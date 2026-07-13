import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 text-sm font-semibold text-slate-500 mb-6 px-2 overflow-x-auto whitespace-nowrap">
      <Link to="/" className="hover:text-google-blue transition-colors flex items-center gap-1">
        <Home size={16} />
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const title = value.charAt(0).toUpperCase() + value.slice(1).replace('-', ' ');

        return (
          <React.Fragment key={to}>
            <ChevronRight size={16} className="text-slate-300" />
            {last ? (
              <span className="text-slate-800 font-extrabold">{title}</span>
            ) : (
              <Link to={to} className="hover:text-google-blue transition-colors">
                {title}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
