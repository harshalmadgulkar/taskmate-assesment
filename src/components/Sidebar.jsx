import { Outlet } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';
import { BiSolidDashboard } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa6';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import { WiDaySunny } from 'react-icons/wi';
import { FaRegMoon } from 'react-icons/fa6';

const Sidebar = () => {
	return (
		<>
			<div className='min-h-screen m-0 flex flex-row bg-gray-300'>
				<div className='p-4 bg-neutral-100 flex flex-col min-w-fit'>
					<header className='mb-2'>
						<div className='font-bold'>
							<span className='text-xl text-orange-400'>Task</span>mate
						</div>
						<p className='text-slate-400 text-sm'>Focus.Prioritize.Execute.</p>
					</header>
					<div className='flex flex-row items-center border border-gray-500 p-2 rounded-lg mb-5'>
						<div>
							<img
								src='https://www.machinelearningexpedition.com/content/images/2023/08/peeps-avatar-alpha.png'
								alt='Profile'
								className='w-8 h-8 rounded-full'
							/>
						</div>
						<div className='flex flex-col'>
							<div className='flex flex-row'>
								<h2 className='text-sm font-bold'>Irvan Moses</h2>
								<button className='flex items-center text-gray-600 hover:text-gray-900'>
									<HiChevronDown className='ml-2' />
								</button>
							</div>
							<div>
								<p className='text-xs text-gray-600'>irvanmoses10@gmail.com</p>
							</div>
						</div>
					</div>
					<div className='flex flex-row items-center justify-between pb-1'>
						<button className='text-gray-600 '>Menu</button>
						<HiChevronDown />
					</div>
					<ul className='ml-2 text-gray-500 pb-3'>
						<li className='flex flex-row items-center p-1 hover:bg-orange-400 hover:text-white rounded-md'>
							<BiSolidDashboard />
							<button className='ml-2'>Overview</button>
						</li>
						<li className='flex flex-row items-center p-1 hover:bg-orange-400 hover:text-white rounded-md'>
							<FaListUl />
							<button className='ml-2'>Task List</button>
						</li>
						<li className='flex flex-row items-center p-1 hover:bg-orange-400 hover:text-white rounded-md'>
							<MdOutlineDoubleArrow />
							<button className='ml-2'>Project Overview</button>
						</li>
						<li className='flex flex-row items-center p-1 hover:bg-orange-400 hover:text-white rounded-md'>
							<BsFillCalendarWeekFill />
							<button className='ml-2'>Calender</button>
						</li>
						<li className='flex flex-row items-center p-1 hover:bg-orange-400 hover:text-white rounded-md'>
							<IoSettingsSharp />
							<button className='ml-2'>Settings</button>
						</li>
					</ul>
					<div className='flex flex-row items-center justify-between pb-1'>
						<button className='text-gray-600 '>List</button>
						<HiChevronDown />
					</div>
					<ul className='ml-2 text-gray-500 pb-3'>
						<li className='flex flex-row items-center p-1 hover:bg-orange-400 hover:text-white rounded-md'>
							<BiSolidDashboard />
							<button className='ml-2'>Personal</button>
						</li>
						<li className='flex flex-row items-center p-1 hover:bg-orange-400 hover:text-white rounded-md'>
							<FaListUl />
							<button className='ml-2'>Design</button>
						</li>
						<li className='flex flex-row items-center p-1 hover:bg-orange-400 hover:text-white rounded-md'>
							<MdOutlineDoubleArrow />
							<button className='ml-2'>Development</button>
						</li>
						<li className='flex flex-row items-center p-1 hover:bg-orange-400 hover:text-white rounded-md'>
							<BsFillCalendarWeekFill />
							<button className='ml-2'>Research</button>
						</li>
					</ul>
					<div className='bg-gray-200 rounded-md py-1 bottom-0'>
						<div className='flex justify-around'>
							<div className='flex flex-row items-center px-1 rounded-lg bg-white text-black'>
								<WiDaySunny />
								<button className='flex flex-row h-6 px-2 text-sm items-center'>
									Light
								</button>
							</div>
							<div className='flex flex-row items-center'>
								<FaRegMoon />
								<button className='h-6 px-2 rounded-lg text-sm border border-slate-200 text-slate-900'>
									Dark
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='w-screen bg-white'>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
