import { useState, useEffect } from 'react';
import SearchFood from './SearchFood';
import FoodList from './FoodList';
import { useDispatch } from 'react-redux';
import { updateList } from '../redux/foodListSlice';


const Home = () => {

	const [searchInput, setSearchInput] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		if (searchInput) {
			let url = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=aEy1HiMf2tIyh0d641XR4amPEGTF3MpUNAiqUiD2&query=';
			url += searchInput;
			fetch(url).then(res => res.json())
				.then(
					(result) => {
						dispatch(updateList(result.foods));
					},
					(error) => {
						console.log(error);
					}
				)
		}

		return () => { };
	}, [searchInput]);

	const handleSearchInput = (event) => {
		if (event.target.value.trim().length > 2) {
			setSearchInput(event.target.value);
		}
	}

	return (
		<>
			<div className="flex gap-8 m-8">
				<SearchFood search={handleSearchInput} />
			</div>
			<div className="flex m-8">
				<FoodList/>
			</div>
		</>
	)
}

export default Home;