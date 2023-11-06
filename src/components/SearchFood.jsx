
const SearchFood = ({ search }) => {
	return (
			<input className="w-full p-1 border-b-2 rounded-md border-violet-300 bg-violet-100 text-violet-600 focus:outline-none focus:border-violet-600" onChange={(e) => search(e)} type="text" name="search" placeholder="Search food here.." />
	)
}

export default SearchFood;