import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const FoodReport = () => {

	const { id } = useParams();
	const [currentFood, setCurrentFood] = useState();
	const { state } = useLocation();

	useEffect(() => {
		if (id) {
			let url = `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=aEy1HiMf2tIyh0d641XR4amPEGTF3MpUNAiqUiD2`;
			fetch(url).then(res => res.json())
				.then(
					(result) => {
						setCurrentFood(result);
					},
					(error) => {
						console.log(error);
					}
				)
		}

		return () => { };
	}, [id]);

	return (

		<div className="m-8 p-8 rounded-md bg-violet-100">
			{!currentFood && <div className="flex items-center justify-center h-96"><div
				className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
				role="status">
				<span
					className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
				>Loading...</span
				>
			</div></div>}


			{currentFood && <><h2 className="py-4 text-violet-800 uppercase font-semibold">Food Report: {currentFood.description}</h2><div className="overflow-auto h-96 pr-4"><table className="w-full p-4">
				<thead>
					<tr className="flex justify-between my-4 border-solid border-b-2 border-violet-200">
						<th className="text-violet-800">Nutrient name</th>
						<th className="text-violet-800">Value</th>
					</tr>
				</thead>
				<tbody>
					{currentFood.foodNutrients.map(item => <tr key={item.id} className="flex justify-between my-4 border-solid border-b-2 border-violet-200">
						<td className="text-violet-600">
							{item.nutrient.name}
						</td>
						<td className="text-violet-600">
							{item.nutrient.number} {item.nutrient.unitName}
						</td>

					</tr>)}
				</tbody>
			</table></div></>}

		</div>)
}

export default FoodReport;