import React, { useState } from "react";
import "./App.css";
import Seacrh from "./components/Search";
import axios from "axios";
import Results from './components/Results'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;


function App() {

	const [state, setState] = useState({
		s: "",
		results: []
  });

  const apiurl = `https://api.github.com/search/users?q=${state.s}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  
  const search = (e) => {
    if(e.key === "Enter"){

      axios(apiurl).then(({ data }) => {
        let result = data.items;
        setState(prevState => {
          return {...prevState, results:result}
        })
      });

    }
  }

	const handleInput = (e) => {
		let s = e.target.value;

		setState(prevState => {
			return { ...prevState, s: s };
		});
  };
  


	return (
		<div className="App">
			<header className="App-header">
				<h1 className="title"> Github Database</h1>
			</header>
			<main >
				<Seacrh handleInput={handleInput} search={search} />
        < Results results={state.results} />
			</main>
		</div>
	);
}

export default App;
