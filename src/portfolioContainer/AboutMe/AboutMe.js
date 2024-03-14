import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
	return (
		<div className="about-me-container">
			<h3 className="about-me-title">About Me</h3>
			<p className="why">Why choose Me ? </p>
			<div className="title-underline"></div>
			<div className="row d-flex justify-content-center pt-4 ">
				<div className="col-lg-4 col-sm-5 card shadow">
					<img className='img-fluid ' src={require ('../../assets/home/pierre.jpg')} alt="No internet connection"/>
				</div>
				<div className="col-lg-4 col-sm-5 card shadow">
				<div className='about-me-description pt-4'>I am a full-stack web and 
                mobile developer with a passion for creating elegant, high-performance applications. 
                I am an expert in React.js, Flutter, Node.js and Express, and 
                I am determined to deliver exceptional user experiences. My versatility 
                enables me to design innovative solutions, while my passion for 
                lifelong learning keeps me up to date with the latest technologies.
				</div>
				<ul className="ma-liste pt-5">
					<div className='list-title pb-3'>Here are a few highlights:</div>
			      <li>Full Stack web development</li>
			      <li>Mobile development</li>
			      <li>Managing Database</li>
			      <li>Building REST API </li>
			      <li>Software testing</li>
			    </ul>
			    <div className='profile-options pt-5'>
				<button className='btn primary-btn'>
					{" "}
					Hire Me {" "}
				</button>
				<a href='cv.pdf' download="Pierre cv.pdf"> 
					<button className='btn highlighted-btn'> Get Resume </button>
				</a>
				</div>
				</div>
			</div>
		</div>
	)
}