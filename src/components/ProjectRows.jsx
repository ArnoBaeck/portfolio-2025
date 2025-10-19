import "../Styles/ProjectRows.css";
import Mockup_Image_MakeItBrussels from "../Assets/Mockup_Make_It_Brussels.png";
import Mockup_Image_SwimCast from "../Assets/Mockup_SwimCast.png";
import Mockup_Image_Fairytale from "../Assets/Mockup_Fairytale.png";
import Mockup_Image_MyNameIsData from "../Assets/Mockup_MyNameIsData.png";

const projects = [
	{
		id: 1,
		title: "Make It Brussels",
		blurb:
			"For the course Full Projects 2, I worked in a team on the MediaLab/Equipment Lending platform for Erasmushogeschool Brussel. I actively contributed to the user flow, design, and development of the website as part of a close collaboration with my teammates.",
		img: Mockup_Image_MakeItBrussels,
		skills: ["Adobe XD", "HTML", "CSS", "JavaScript"],
		cta: { label: "View project", href: "https://ehb-mct.github.io/full-projects-2-2023-2024-lab1-mct/index.html" },
	},
	{
		id: 2,
		title: "SwimCast",
		blurb: "Voor het vak Full Projects 4 moesten we aan de slag voor een klant die wou dat we verschillende parameters van het open water in brussen bij zouden houden. Deze parameters werden verwerkt en zo kon je zien of je kon zwemmen in het weter of niet.",
		img: Mockup_Image_SwimCast,
		skills: ["Figma", "HTML", "CSS", "JavaScript", "Express.js"],
		cta: { label: "", href: "#" },
	},
	{
		id: 3,
		title: "Fairytale",
		blurb: "For the Frontend course, I created a portal website showcasing all the fairy tales made by my fellow students. I also created my own fairy tale for this project, and the design of the portal website was entirely made by me.",
		img: Mockup_Image_Fairytale,
		skills: ["Figma", "React", "CSS", "JavaScript", "Framer Motion"],
		cta: { label: "View Project", href: "https://ehb-mct.github.io/cp-frontend-ArnoBaeck/" },
	},
  {
    id: 4,
    title: "My name is data",
    blurb: "For the Design course, I transformed collected data into a visual design.",
    img: Mockup_Image_MyNameIsData,
    skills: ["Adobe Illustrator", "Data Visualization", "Graphic Design"],
    cta: { label: "", href: "" },
  }
];

function ProjectPane({ p }) {
  return (
	<div className="project-pane">
	  <img className="project-media" src={p.img} alt={p.title} loading="lazy" />
	  <div className="project-noise" />
	  <div className="project-content">
		<h3>{p.title}</h3>
		<p>{p.blurb}</p>
		{p.cta?.label ? (
		  <a className="cta" href={p.cta.href} target="_blank" rel="noopener noreferrer">
			{p.cta.label}
		  </a>
		) : null}
	  </div>
	</div>
  );
}

function SkillsPane({ p }) {
	return (
		<div className="skills-pane" aria-label={`Skills for ${p.title}`}>
			<h4>Skills</h4>
			<ul className="skill-chips">
				{p.skills.map((s) => (
					<li key={s} className="chip">
						{s}
					</li>
				))}
			</ul>
		</div>
	);
}

export default function ProjectRows() {
	return (
		<div className="project-rows-container">
			<div className="project-rows-inner">
				<div className="project-rows-header">
					<h1>Projects</h1>
				</div>

				<div className="project-rows-list">
					{projects.map((p, idx) => {
						const isEven = idx % 2 === 1;
						return (
							<section key={p.id} className={`project-item ${isEven ? "even" : "odd"}`}>
								{isEven ? (
									<>
										<ProjectPane p={p} />
										<SkillsPane p={p} />
									</>
								) : (
									<>
										<SkillsPane p={p} />
										<ProjectPane p={p} />
									</>
								)}
							</section>
						);
					})}
				</div>
			</div>
		</div>
	);
}
