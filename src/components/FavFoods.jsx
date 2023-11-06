import { useDispatch, useSelector } from 'react-redux';
import { removeFav } from '../redux/favListSlice';
import { Link } from 'react-router-dom';

const FavFoods = ({closeModal}) => {
	const favFoodArray = useSelector((state) => state.favs.favFoods);
	const dispatchFav = useDispatch();
	return (
		<ul className="p-4 grow">
			{favFoodArray.length === 0 && <p className="text-violet-600 mb-4">No Fav added yet!</p>}
			{
				favFoodArray.length > 0 && favFoodArray.map(food =>
					<li key={food.id} className="flex justify-between my-4">
						<p className="mx-2">{food.name}</p>
						<div className="flex gap-2">
						<div>
							<button className="px-4 py-2 text-xs md:text-base rounded-md bg-violet-700 text-violet-100 hover:bg-violet-100 hover:text-violet-900" onClick={() => dispatchFav(removeFav(food.id))}>Remove</button>
						</div>
						<Link to={`/report/${food.id}`}>
							<button className="px-4 py-2 text-xs md:text-base rounded-md bg-violet-700 text-violet-200 hover:bg-violet-600 hover:text-violet-100" onClick={closeModal}>Report</button>
						</Link>
						</div>
					</li>
				)
			}
		</ul>
	)
}

export default FavFoods;