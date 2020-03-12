import React from "react";

function Search({ handleInput, search }) {
	return (
		<div>
			<input
				className="search-box"
				type="text"
				placeholder="Please enter username..."
				onChange={handleInput}
				onKeyPress={search}
			></input>
		</div>
	);
}

export default Search;
