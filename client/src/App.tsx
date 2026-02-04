import { Route, Routes, NavLink } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { ClientsPage } from "./pages/ClientsPage";

export const App = () => {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="logo">ProductCRM</h1>
        <nav className="nav">
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/clients">Clients</NavLink>
        </nav>
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/clients" element={<ClientsPage />} />
        </Routes>
      </main>
    </div>
  );
};
