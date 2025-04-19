import React from 'react';
import './Psikolog.css';

const Psikolog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Psikolog</h1>
        <span className="tag">Psikolog</span>
        <p className="subtitle">
          Mau Mulai Konsultasi?
          <br />
          Yuk Kenali Psikolog Yang Ada!
        </p>
      </section>

      {/* Cards Section */}
      <section className="cards">
        <div className="card-container">
          <div className="card">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Foto Psikolog"
            />
            <h3>Oliver, M.Psi.</h3>
            <p>Psikolog Klinis</p>
            <div className="btn-group">
              <button className="btn green">Lihat profil</button>
              <button className="btn orange">Konsultasi</button>
            </div>
          </div>
          <div className="card">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Foto Psikolog"
            />
            <h3>Michelle Rossi, M.Psi.</h3>
            <p>Psikolog Klinis</p>
            <div className="btn-group">
              <button className="btn green">Lihat profil</button>
              <button className="btn orange">Konsultasi</button>
            </div>
          </div>
          <div className="card">
            <img
              src="https://randomuser.me/api/portraits/women/8.jpg"
              alt="Foto Psikolog"
            />
            <h3>Alexandria, M.Psi.</h3>
            <p>Psikolog Klinis</p>
            <div className="btn-group">
              <button className="btn green">Lihat profil</button>
              <button className="btn orange">Konsultasi</button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat */}
      <div className="chat-float">
        ChatBot
        <br />
        <small>line</small>
      </div>
    </div>
  );
};

export default Psikolog;
