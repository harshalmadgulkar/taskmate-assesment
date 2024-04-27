import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProjectOverview from './components/ProjectOverview';

function App() {
	const router = createBrowserRouter([
		{
			path: 'dashboard',
			element: <Sidebar />,
			// errorElement: <ErrorPage/>,
			children: [{ index: true, element: <ProjectOverview /> }],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
