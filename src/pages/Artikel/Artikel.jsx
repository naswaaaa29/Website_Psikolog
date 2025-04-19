import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Artikel.css';
import Artikel1 from '../../img/artikel1.jpg';
import Artikel2 from '../../img/artikel2.jpg';
import Artikel3 from '../../img/artikel3.jpg';
import Artikel4 from '../../img/artikel4.jpg';
import Artikel5 from '../../img/artikel5.jpg';
import Artikel6 from '../../img/artikel6.jpg';

const artikelData = [
  {
    image: Artikel1,
    title: "Jebakan Circle Depresi: Kenali, Pahami, dan Atasi dengan Langkah Tepat",
    category: "Edukasi | Remaja",
    link: "#"
  },
  {
    image: Artikel2,
    title: "Manfaat Olahraga dalam Perspektif Neuropsikologi",
    category: "Edukasi | Remaja",
    link: "#"
  },
  {
    image: Artikel3,
    title: "No Screen Time Before Two: Aturan Screen Time pada Anak Usia Dini ",
    category: "Kampus",
    link: "Edukasi | Anak"
  },
  {
    image: Artikel4,
    title: "Bagaimana Pikiran Membentuk Kenyataan?",
    category: "Edukasi | Remaja",
    link: "#"
  },
  {
    image: Artikel5,
    title: "Virtual Reality (VR) sebagai Alat Terapi",
    category: "Edukasi | Remaja",
    link: "#"
  },
  {
    image: Artikel6,
    title: "Mobile Games: Cara Asik Mencegah Risiko Demensia",
    category: "Edukasi | Semua Kalangan",
    link: "#"
  },
];

const Artikel = () => {
  return (
    <div>
      {/* Title */}
      <div className="container text-center my-5">
        <h3>Artikel Umum</h3>
      </div>

      {/* Article Cards */}
      <div className="container mb-5">
        <div className="row g-4">
          {artikelData.map((artikel, i) => (
            <div className="col-md-4" key={i}>
              <div className="img h-100">
                <img src={artikel.image} className="card-img-top" alt={artikel.title} />
                <div className="card-body">
                  <h6 className="card-title">{artikel.title}</h6>
                  <p className="card-text text-muted">Kategori: {artikel.category}</p>
                  <a href={artikel.link} className="btn btn-sm btn-primary">Selengkapnya</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="container text-center mb-5">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item"><a className="page-link" href="#">Sebelumnya</a></li>
            <li className="page-item active">
              <a className="page-link" href="#" style={{ backgroundColor: '#8cc63e' }}>1</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">Berikutnya</a></li>
          </ul>
        </nav>
      </div>

      {/* Live Chat */}
      <div className="chat-float">ChatBot<br /><small>line</small></div>
    </div>
  );
};

export default Artikel;
