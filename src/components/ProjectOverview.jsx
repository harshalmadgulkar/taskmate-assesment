import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { BsFillCalendarWeekFill } from 'react-icons/bs';

const ProjectOverview = () => {
	return (
		<>
			<div className='min-h-36 bg-yellow-800 text-white flex flex-row justify-between'>
				<div className='p-3 flex flex-row items-end'>
					<div className='flex flex-col text-gray-200 items-start'>
						<p className='text-sm text-gray-300 '>Projects / My Project</p>
						<p className='text-xl mr-1'>My Project</p>
						<HiChevronDown />
					</div>
					<div className='flex '>
						<BsFillCalendarWeekFill />
						<span>12 Feb 2023</span>
					</div>
				</div>
			</div>
		</>
	);
};
export default ProjectOverview;
