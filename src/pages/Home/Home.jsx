import React from 'react';
import './Home.css';
import Psikolog from '../../img/psikologhome.jpg';
import Konsultasi from '../../img/konsultasi.jpg';

const emotions = [
  {
    title: 'Kecemasan',
    desc: 'Perasaan takut atau khawatir berlebihan terhadap situasi tertentu.',
  },
  {
    title: 'Stres',
    desc: 'Respons tubuh terhadap tekanan atau tantangan dalam hidup.',
  },
  {
    title: 'Trauma',
    desc: 'Reaksi emosional akibat pengalaman yang sangat menyakitkan atau menakutkan.',
  },
  {
    title: 'Burnout',
    desc: 'Kelelahan fisik dan emosional akibat tekanan pekerjaan atau aktivitas yang berlebihan.',
  },
  {
    title: 'Depresi',
    desc: 'Gangguan suasana hati yang menyebabkan perasaan sedih mendalam dan kehilangan minat.',
  },
];

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="text">
          <h1>
            Yuk, Mulai Perjalanan Kesehatan Mental Kamu Bersama <span style={{ color: '#00a5e0' }}>RuangHati!</span>
          </h1>
          <p>
            Kami tidak harus menghadapi semuanya sendiri. Kami hadir untuk memberikan layanan konseling online dengan psikolog profesional dan berlisensi.
          </p>
          <div className="buttons">
            <button className="btn-green">Konsultasi Sekarang</button>
            <button className="btn-outline">Tes Gratis</button>
          </div>
        </div>
        <div className="image">
          <img src={Psikolog} alt="Ilustrasi Konsultasi" />
        </div>
      </section>

      <section className="section">
        <h2>Apa Yang Sedang Kamu Rasakan?</h2>
        <p>Pilih perasaan yang sedang kamu hadapi dan temukan bantuan yang kamu butuhkan sekarang!</p>
        <div className="cards">
          {emotions.map((item, index) => (
            <div key={index} className="emotion-card">
              <h4>{item.title}</h4>
              <p className="emotion-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Konsultasi Sekarang</h2>
        <div className="cards">
          {['Sesi Plong', 'Cek Plong', 'Duo Plong', 'Paket Plong', 'EMDR Plong'].map((item, index) => (
            <div key={index} className="card">{item}</div>
          ))}
        </div>
      </section>

      <section className="info-section">
        <h2>Butuh informasi lebih lanjut tentang RuangHati?</h2>
        <p>Jangan ragu untuk menghubungi kami di sini!</p>
      </section>

      <section className="features">
        {[{
          title: 'Konsultasi Nyaman',
          desc: 'Memberikan konsultasi tatap muka via video chat dengan nyaman'
        }, {
          title: 'Privasi Terjamin',
          desc: 'Menjaga dan menjamin privasi kamu'
        }, {
          title: 'Profesionalisme',
          desc: 'Menerapkan standar profesionalisme tertinggi demi kenyamanan kamu'
        }, {
          title: 'Layanan Terbaik',
          desc: 'Mengutamakan kebutuhan kamu dan selalu memberikan pelayanan terbaik'
        }].map((feature, index) => (
          <div key={index} className="feature">
            <div className="feature-icon">🌟</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      <section className="cta">
        <div>
          <h2>
            Yuk, konsultasi bersama psikolog profesional <span style={{ color: '#00a5e0' }}>RuangHati</span> sekarang juga!
          </h2>
        </div>
        <img src={Konsultasi} alt="Ilustrasi Video Call" />
      </section>

      <div className="chat-float">ChatBot<br /><small>line</small></div>
    </div>
  );
};

export default Home;
