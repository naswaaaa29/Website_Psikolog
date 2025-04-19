import React from 'react';
import './Kontak.css';
import Kontak from '../../img/kontak1.jpg';
import KontakRuangHati from '../../img/kontak2.jpg';
import Layanan1 from '../../img/layanan1.jpg';
import Layanan2 from '../../img/layanan2.jpg';
import Layanan3 from '../../img/layanan3.jpg';
import Layanan4 from '../../img/layanan5.jpg';

const TentangKami = () => {
  return (
    <div>
      {/* Intro */}
      <section className="intro">
        <h1>Tentang Kami</h1>
        <h2>Selamat Datang di <span className="blue">RuangHati</span></h2>
        <p>Untuk klien perusahaan, silakan kunjungi <a href="#">RuangHati for Business</a></p>
        <p className="desc">
        Di RuangHati, kami menyediakan layanan konsultasi psikologis online dengan dukungan dari para profesional berlisensi dan berpengalaman. 
        Kami hadir dengan tujuan untuk meningkatkan kualitas hidup dan menghilangkan stigma terkait kesehatan mental di Indonesia, memberikanmu ruang yang aman, nyaman, dan penuh kepercayaan untuk berbagi.
          <br /><br />
          Dengan dukungan dari <a href="#">NiceDay</a>, klinik kesehatan jiwa di Belanda, kami bisa menghubungkan kamu dengan psikolog psikolog ternama.
        </p>
      </section>

      {/* Profil Psikolog */}
      <section className="profil">
        <div className="left">
          <span className="tag">Psikolog</span>
          <h3>Semua psikolog <span className="blue">RuangHati</span> sudah memiliki:</h3>
          <ul>
            <li>🎓 Gelar master di bidang psikologi klinis</li>
            <li>📄 Berpengalaman menangani kasus klinis</li>
            <li>💼 Terdaftar sebagai tenaga kesehatan</li>
            <li>📝 Memiliki izin praktek</li>
            <li>💻 Memiliki kemampuan E-Counseling</li>
          </ul>
          <p>Bersama <span className="blue">RuangHati</span>, kamu akan mendapatkan layanan yang nyaman dan aman untuk Konsultasi.</p>
        </div>
        <div className="right">
          <img src={Kontak} alt="Ilustrasi Psikolog" />
        </div>
      </section>

      {/* Layanan Kami */}
      <section className="siap">
        <h4>Layanan Kami</h4>
        <h2>RuangHati siap untuk...</h2>
        <div className="cards">
          <div className="card">
            <img src={Layanan1} alt="" />
            <p>Memberikan konsultasi tatap muka via video chat dengan nyaman</p>
          </div>
          <div className="card">
            <img src={Layanan4} alt="" />
            <p>Menjaga dan menjamin privasi kamu</p>
          </div>
          <div className="card">
            <img src={Layanan3} alt="" />
            <p>Menerapkan standar profesionalisme tertinggi demi kenyamanan kamu</p>
          </div>
          <div className="card">
            <img src={Layanan2} alt="" />
            <p>Mengutamakan keamanan data selalu menjadi prioritas kami</p>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="visi-misi">
        <span className="tag">Tentang Kami</span>
        <h2>Visi dan Misi <span className="blue">RuangHati</span></h2>
        <div className="visimisi-box">
          <div className="box">
            <h3>VISI</h3>
            <p>Menjadikan layanan kesehatan mental yang berkualitas dapat diakses oleh semua orang di Indonesia.</p>
          </div>
          <div className="box">
            <h3>MISI</h3>
            <p>Menjadi layanan kesehatan mental terbaik untuk Masarakat Indonesia.</p>
          </div>
        </div>
      </section>

      {/* Nilai RuangHati */}
      <section className="nilai">
        <span className="tag">Tentang Kami</span>
        <h2><span className="blue">RuangHati</span> mengutamakan...</h2>
        <ul>
          <li><strong>People</strong>: Menggunakan jasa dan melatih tenaga profesional...</li>
          <li><strong>Culture</strong>: Mengembangkan budaya integritas...</li>
          <li><strong>Patient’s Care</strong>: Menempatkan kepentingan klien...</li>
          <li><strong>Community/Society</strong>: Meningkatkan kesadaran mengenai gangguan mental.</li>
        </ul>
        <img src={KontakRuangHati} alt="Ilustrasi Konsultasi" />
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

export default TentangKami;
