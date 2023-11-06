import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addFav, removeFav } from '../redux/favListSlice';

const FoodList = () => {
	const foods = useSelector((state) => state.foodList.foods);
	const favFoodArray = useSelector((state) => state.favs.favFoods);
	const dispatchFav = useDispatch();

	if (foods.length === 0) {
		return <ul className="flex justify-center items-center p-4 mt-8 grow rounded-md text-violet-700 bg-violet-100 overflow-auto h-96">
			<h2>Do search of food to see the results.</h2>
		</ul>;
	}

	return (
		<ul className="p-4 mt-8 grow rounded-md bg-violet-100 overflow-auto h-96">
			{foods.length > 0 && foods.map(item => <li className="flex justify-between my-4" key={item.fdcId}>
				<p className="text-violet-700">{item.description}</p>
				<div className="flex">
					{!favFoodArray.some(e => +e.id == +item.fdcId) && <span className="mx-2 text-violet-700" onClick={() => dispatchFav(addFav({id: item.fdcId, name: item.description}))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg></span>}
					{favFoodArray.some(e => +e.id == +item.fdcId) && <span className="mx-2 text-violet-700" onClick={() => dispatchFav(removeFav(item.fdcId))}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg></span>}
					<Link to={`/report/${item.fdcId}`} state={foods}><button className="px-4 py-2 text-xs md:text-base rounded-md bg-violet-700 text-violet-200 hover:bg-violet-600 hover:text-violet-100">Show Report</button></Link>
				</div>
			</li>)}
		</ul>
	)
}

export default FoodList;