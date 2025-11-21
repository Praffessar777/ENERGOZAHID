import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { TariffsPage } from "./components/pages/TariffsPage";
import { DocumentsPage } from "./components/pages/DocumentsPage";
import { ElectricalSafetyPage } from "./components/pages/ElectricalSafetyPage";
import { ContactsPage } from "./components/pages/ContactsPage";
import { ContractPage } from "./components/pages/ContractPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    document.title = 'ТОВ "ЕНЕРГОЗАХІД"';
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />;
      case "tariffs":
        return <TariffsPage />;
      case "documents":
        return <DocumentsPage />;
      case "electricalSafety":
        return <ElectricalSafetyPage />;
      case "contacts":
        return <ContactsPage />;
      case "contract":
        return <ContractPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <main className="min-h-screen">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <Toaster />
    </div>
  );
}