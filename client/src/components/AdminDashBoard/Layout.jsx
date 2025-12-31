import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
           <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
