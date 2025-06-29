import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { DashboardChart } from "./components/DashboardChart";
import './App.css'
import '@fontsource/inter/600.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <main className="content">
          <h2>Dashboard</h2>
          <DashboardChart />
        </main>
      </div>
    </div>
  );
}


export default App
