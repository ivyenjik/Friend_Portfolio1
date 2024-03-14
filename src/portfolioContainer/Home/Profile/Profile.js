import React from 'react';
import "./Profile.css";

export default function Profile() {
  return (
	<div className='profile-container'>
		<div className='profile-parent'>
			<div className='profile-details'>
				<div className='colz'>
				<div className='colz-icon'>
				<a href='#'>
						<i className='fa fa-facebook-square'></i>
					</a>
					<a href='#'>
						<i className='fa fa-google-plus-square'></i>
					</a>
					<a href='#'>
						<i className='fa fa-instagram'></i>
					</a>
					<a href='#'>
						<i className='fa fa-youtube-square'></i>
					</a>
					<a href='#'>
					<i className='fa fa-twitter'></i>
					</a>
				</div>
				</div>
				<div className='profile-details-name'>
					<span className='primary-text'>
						{" "}
						Hello, I'm  <span className='highlighted-text'>Pierre Leopold NGAKO YOSSA</span> 
					</span>
				</div>
				<div className='profile-details-role'>
					<span className='primary-text'>
						{" "}
						<h1 className='highlighted-text'>
							{" "}
						Web Developper
						</h1> 
						<span className='profile-role-tagline'>
						Knack of building applications with front and back end 
						operations.
						</span>
					</span>
				</div>
				<div className='profile-options'>
				<button className='btn primary-btn'>
					{" "}
					Hire Me {" "}
				</button>
				<a href='cv.pdf' download="Pierre cv.pdf"> 
					<button className='btn highlighted-btn'> Get Resume </button>
				</a>
				</div>
			</div>
			<div className='profile-picture'>
			<div className='profile-picture-background'>

			</div>
			</div>
		</div>
	</div>
  )
}
