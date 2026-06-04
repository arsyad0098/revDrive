import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Container from "../components/Container";

export default function MainLayout() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Container>
            <Outlet />
          </Container>
        </main>
      </div>
    </div>
  );
}