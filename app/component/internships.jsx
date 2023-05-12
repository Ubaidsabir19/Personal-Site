import React from "react";

const InternshipData = ({ data }) => {
	const { title,  experience } = data;
	return (
		<section>
			<h2 className='mb-5'> {title}</h2>
			<div className='flex flex-col gap-5'>
				{experience.map(({ SoftwareHouse, InternSubject, StartDate, EndDate }) => (
					<div key={SoftwareHouse} className='flex flex-col rounded-lg'>
						<div className=' p-6'>
							<h3>{SoftwareHouse}---{InternSubject}</h3>
							<p className='mt-2'>{StartDate}-{EndDate}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default InternshipData;