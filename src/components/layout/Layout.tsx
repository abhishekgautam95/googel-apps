import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../Header';
import Breadcrumbs from '../Breadcrumbs';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F0F4F8] selection:bg-google-blue selection:text-white flex flex-col font-sans">
      <Header />
      <div className="flex-1 max-w-[1400px] mx-auto w-full p-4 md:p-6 lg:p-8 flex flex-col">
        <Breadcrumbs />
        <Outlet />
      </div>
      <footer className="bg-white border-t-2 border-slate-200 py-8 mt-12 shrink-0">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-sans font-semibold">
            © 2024 Learn with Abhishek Sir. Made with ❤️ for curious minds.
          </p>
          <div className="flex gap-4 md:gap-6 text-sm font-bold text-slate-500">
            <Link to="/about" className="hover:text-google-blue transition-colors">About</Link>
            <Link to="/notes" className="hover:text-google-blue transition-colors">Notes</Link>
            <Link to="/videos" className="hover:text-google-blue transition-colors">Videos</Link>
            <Link to="/contact" className="hover:text-google-blue transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
