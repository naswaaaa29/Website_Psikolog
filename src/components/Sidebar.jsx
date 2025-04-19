import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faGraduationCap,
  faChalkboardUser,
  faUserGraduate,
  faTrophy,
  faSchool,
  faClipboardList,
  faBasketball,
  faMedal,
  faMap,
  faImage,
} from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="col-md-2 bg-dark mt-2 pr-3 pt-4">
      <ul className="nav flex-column ml-3 mb-5">
        <li className="nav-item">
          <a className="nav-link active text-white" href="/admin">
            <FontAwesomeIcon icon={faGauge} className="me-2" />
            Dashboard
          </a>
          <hr className="bg-secondary" style={{ height: "2px" }} />
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/daftarsiswa_admin">
            <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
            Daftar Siswa
          </a>
          <hr className="bg-secondary" style={{ height: "2px" }} />
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/daftarwalas_admin">
            <FontAwesomeIcon icon={faChalkboardUser} className="me-2" />
            Daftar Wali Kelas
          </a>
          <hr className="bg-secondary" style={{ height: "2px" }} />
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/data_ptn_admin">
            <FontAwesomeIcon icon={faUserGraduate} className="me-2" />
            Daftar Masuk PTN
          </a>
          <hr className="bg-secondary" style={{ height: "2px" }} />
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/prestasi_admin">
            <FontAwesomeIcon icon={faTrophy} className="me-2" />
            Prestasi Siswa
          </a>
          <hr className="bg-secondary" style={{ height: "2px" }} />
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/kemitraan_admin">
            <FontAwesomeIcon icon={faSchool} className="me-2" />
            Daftar Kemitraan
          </a>
          <hr className="bg-secondary" style={{ height: "2px" }} />
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/tamatan_admin">
            <FontAwesomeIcon icon={faClipboardList} className="me-2" />
            Penelusuran Tamatan
          </a>
          <hr className="bg-secondary" style={{ height: "2px" }} />
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/ekskul_admin">
            <FontAwesomeIcon icon={faBasketball} className="me-2" />
            Ekstrakurikuler
          </a>
          <hr className="bg-secondary" style={{ height: "2px" }} />
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/kejuaraan_admin">
            <FontAwesomeIcon icon={faMedal} className="me-2" />
            Kejuaraan Ekskul
          </a>
          <hr className="bg-secondary" style={{ height: "2px" }} />
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/fasilitas_admin">
            <FontAwesomeIcon icon={faMap} className="me-2" />
            Daftar Fasilitas
          </a>
          <hr className="bg-secondary" style={{ height: "2px" }} />
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/galeri_admin">
            <FontAwesomeIcon icon={faImage} className="me-2" />
            Galeri
          </a>
          <hr className="bg-secondary" style={{ height: "2px" }} />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
