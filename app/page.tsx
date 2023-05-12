import React from "react";
import AboutMe from "./component/about-me";
import { aboutMe, skills, professionalData, internshipData } from "../Data/p-data";
import ProfessionalExperience from "./component/professional-experience";
import InternshipData from "./component/internships";

const page = () => {
	return (
		<div>
			<AboutMe data={aboutMe} skills={skills} />
			<ProfessionalExperience data={professionalData} />
			<InternshipData data={internshipData} />

		</div>
	);
};

export default page;