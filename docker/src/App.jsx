import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          ☁️ <span>DevOps Dashboard</span>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Online
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        <section className="hero">
          <p className="small-text">MY FIRST AWS DEPLOYMENT</p>

          <h1>React + Docker + AWS EC2</h1>

          <p className="description">
            A simple DevOps project deployed on an AWS EC2 instance.
          </p>
        </section>

        {/* Status Cards */}
        <section className="cards">
          <div className="card">
            <div className="card-icon">⚛️</div>

            <h2>React</h2>

            <p>Frontend Application</p>

            <div className="card-status">
              <span>✓</span> Running
            </div>
          </div>

          <div className="card">
            <div className="card-icon">🐳</div>

            <h2>Docker</h2>

            <p>Container Platform</p>

            <div className="card-status">
              <span>✓</span> Running
            </div>
          </div>

          <div className="card">
            <div className="card-icon">☁️</div>

            <h2>AWS EC2</h2>

            <p>Cloud Server</p>

            <div className="card-status">
              <span>✓</span> Connected
            </div>
          </div>
        </section>

        {/* Deployment Status */}
        <section className="deployment">
          <div className="section-header">
            <div>
              <h2>Deployment Status</h2>
              <p>Application successfully deployed</p>
            </div>

            <strong>100%</strong>
          </div>

          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </section>

        {/* Server Information */}
        <section className="server">
          <h2>Server Information</h2>

          <div className="server-grid">
            <div>
              <span>Environment</span>
              <strong>Production</strong>
            </div>

            <div>
              <span>Server</span>
              <strong>AWS EC2</strong>
            </div>

            <div>
              <span>Container</span>
              <strong>Docker</strong>
            </div>

            <div>
              <span>Port</span>
              <strong>80</strong>
            </div>
          </div>
        </section>

        {/* Button */}
        <button
          className="deploy-button"
          onClick={() => alert("Deployment triggered!")}
        >
          🚀 Deploy Again
        </button>
      </main>

      {/* Footer */}
      <footer>
        <p>Built with React • Docker • AWS EC2</p>
      </footer>
    </div>
  );
}

export default App;