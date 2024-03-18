import React, { useState } from "react";
import "./Resume.css"; 

function Sidebar({ sections, onSectionClick }) {
  return (
    <div className="sidebar">
      {sections.map((section, index) => (
        <div
          key={index}
          className="sidebar-item"
          onClick={() => onSectionClick(index)}
        >
          <span className="sidebar-icon">{section.icon}</span>
          <span className="sidebar-title">{section.title}</span>
        </div>
      ))}
    </div>
  );
}

// Composant principal de l'application
function Resume() {
  const [currentSection, setCurrentSection] = useState(0); // État pour suivre la section actuelle affichée

  // Sections du CV avec les icônes correspondantes
  const sections = [
    {
      title: "Education",
      icon: <span className="fa fa-graduation-cap text-light"></span>,
    },
    { 
      title: "Work History", 
      icon: <span className="fa fa-briefcase text-light"></span> 
    },
    {
      title: "Programming Skills",
      icon: <span className="fa fa-code text-light"></span>,
    },
    { 
      title: "projects", 
      icon: <span className="fa fa-tasks text-light"></span> 
    },
  ];

  // Gestionnaire de clic pour changer de section
  const handleSectionClick = (index) => {
    setCurrentSection(index);
  };

  const contents = [
    <p>
      <ul className="puce">
      <li className="esgi1">Web engineering(L3)</li>
      </ul>
      <p className="esgi2">ESGI, Paris 2024-2026 </p>
      <p className="">Web Engineer</p>
      <p className="pt-3">
      <ul className="puce">
      <li className="esgi1">Engineering Computer Science</li>
      </ul>
      <p className="esgi2">Institut UCAC-ICAM, Douala-Cameroun 2021-2023 </p>
      <p className="">Computer Engineer</p>
    </p>
    </p>
    ,

    <p>
      <ul className="puce">
      <li className="esgi1">Research Internship - Full Stack Developer (06 months)</li>
      </ul>
      <p className="esgi2">  ICAM, Lieusaint, Carré-Sénart, France || September 2023 - January 2024
    
      </p>
      <ul>
        <li>Design, develop and test interactive visual, auditory and verbal software</li>
        <li>Modelling a database for patient registration</li>
        <li>Modifying and testing patient monitoring software for the nephrology department</li>
      </ul>
      
      <p className="pt-3">
      <ul className="puce">
      <li className="esgi1">Academic internship (04 months)</li>
      </ul>
      <p className="esgi2"> AFRILAND FIRST BANK || January 2023 - April 2023</p>
      <ul>
        <li>Automate Document Production</li>
        <li>Traceability and auditing of customer information</li>
        <li>Reduces errors during data processing</li>
      </ul>
    </p>

    <p className="pt-3">
      <ul className="puce">
      <li className="esgi1">Academic internship (04 months)</li>
      </ul>
      <p className="esgi2"> EMC SARL || May 2022 - July 2022</p>
      <ul>
        <li>Designing the database structure (MCD)</li>
        <li>Development of data models (MLD)</li>
        <li>Creating the database</li>
        <li>Maintaining data integrity</li>
      </ul> 
    </p>
    </p>
    , 
    <div className="col-lg-9 col-sm-5">
			<img className='img-fluid ' src={require ('../../assets/home/skills.png')} 
      alt="No Internet connection"/>
		</div>,
    <p>
    <ul className="puce">
    <li className="esgi1">To Do List ------------- 2022</li>
    </ul>
    <p className="esgi2">  Technologies used: HTML; CSS; JS.</p>
    <p className="col-lg-10 ">A To do list to help people stay organised in their daily tasks.</p>
    
    <p className="pt-3">
    <ul className="puce">
    <li className="esgi1">Product rating system --------- 2023</li>
    </ul>
    <p className="esgi2">  Technologies used: Next JS, Talwind CSS; React JS.</p>
    <p className="col-lg-10 ">A product rating system  for rating and commenting on any product with an 
      IA that can write what the user says in audio.</p>
   
  </p>
  </p>,
  ];

  return (
    <div>
      <div className="about-me-container pt-5 ">
        <h3 className="about-me-title">Resume</h3>
        <p className="why">My Format Bio Details</p>
        <div className="title-underline"></div>
      </div>
      <div className="app offset-lg-2 offset-sm-1 pt-3">
        {/* Sidebar */}
        <Sidebar sections={sections} onSectionClick={handleSectionClick} />

        {/* Contenu de la section pb-3 -3 ée */}
        <div className="main-content ml-lg-5">
          <h4 className="section-title">{sections[currentSection].title}</h4>
          <p>{contents[currentSection]}</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
