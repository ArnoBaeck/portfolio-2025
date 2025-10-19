import "../Styles/Contact.css";

export default function Contact() {
	return (
		<div
			className="contact-container contact-section"
			id="contact"
			data-ids="contact contact-section"
		>
			<span id="about-me" style={{ display: "none" }} aria-hidden="true" />
			
			<div className="contact-title">
				<h2>GET IN TOUCH</h2>
			</div>
			<div className="contact-content">
				<div className="content-text">
					<p>
						I am a third-year Multimedia &amp; Creative Technologies student with a passion for full-stack
						development and design, aiming to create projects that are both functional and visually engaging
					</p>
				</div>
				<div className="content-buttons">
					<div className="card card-linkedin blue">
						<a href="https://www.linkedin.com/in/arno-baeck-854188304/" target="_blank" rel="noopener noreferrer">
							<div className="icon-linkedin-logo">
								<svg xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32" fill="none">
									<path
										d="M23 11C25.3869 11 27.6761 11.9482 29.364 13.636C31.0518 15.3239 32 17.6131 32 20V30.5H26V20C26 19.2044 25.6839 18.4413 25.1213 17.8787C24.5587 17.3161 23.7957 17 23 17C22.2044 17 21.4413 17.3161 20.8787 17.8787C20.3161 18.4413 20 19.2044 20 20V30.5H14V20C14 17.6131 14.9482 15.3239 16.636 13.636C18.3239 11.9482 20.6131 11 23 11Z"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M8 12.5H2V30.5H8V12.5Z"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<p>linkedin.com/in/arno-baeck</p>
						</a>
					</div>

					<div className="card card-email gray">
						<a href="mailto:arno.baeck@student.ehb.be" target="_blank" rel="noopener noreferrer">
							<div className="icon-email-logo">
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
									<path
										d="M33 10.5L19.5135 19.0905C19.0558 19.3563 18.536 19.4963 18.0068 19.4963C17.4775 19.4963 16.9577 19.3563 16.5 19.0905L3 10.5M6 6H30C31.6569 6 33 7.34315 33 9V27C33 28.6569 31.6569 30 30 30H6C4.34315 30 3 28.6569 3 27V9C3 7.34315 4.34315 6 6 6Z"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<p>arno.baeck@student.ehb.be</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
