import './App.css'
import FoodReport from './components/FoodReport';
import Home from './components/Home';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FavFoods from "./components/FavFoods";
import Modal from './components/Modal';
import { Link } from "react-router-dom";

function App() {

	const [open, setOpen] = useState(false);
	const handleShowFav = () => {
		setOpen(true);
	}

	return (
		<>
			<Modal openModal={open} closeModal={() => setOpen(false)}>
				<FavFoods closeModal={() => setOpen(false)}/>
			</Modal>
			<header className='relative flex w-full items-center justify-between bg-violet-100 py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700'>
				<div className='flex items-center justify-start px-3'>
					<p className="text-violet-800 uppercase font-bold">
						<Link to={`/`}>Food Reports</Link>
					</p>
				</div>
				<div className='flex items-center justify-end px-3'>
					<button className="text-violet-700" onClick={handleShowFav}>Favorites<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg></button>
				</div>

			</header>
			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route path="/report/:id" element={<FoodReport />} />
			</Routes>

			<footer>
				<div
					className="bg-violet-200 p-4 text-center text-violet-700">
					© 2023 Copyright:
					<a
						className="text-violet-800 dark:text-violet-400"
						href="https://tw-elements.com/"
					>Food Report</a
					>
				</div>
			</footer>

		</>
	)
}

export default App;
