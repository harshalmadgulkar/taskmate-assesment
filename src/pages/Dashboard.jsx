import React from 'react';
import Sidebar from '../components/Sidebar';
import ProjectOverview from '../components/ProjectOverview';

export const Dashboard = () => {
	return (
		<>
			<div className='flex flex-row'>
				<Sidebar />
				<ProjectOverview />
			</div>
		</>
	);
};
