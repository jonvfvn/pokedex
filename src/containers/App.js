import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from '../components/Table';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App() {
	
	const [pokedex, setPokedex] = useState([]);
	const [searchfield, setSearchfield] = useState('');
	
	const getData = () => {
		fetch('https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
		,{
			headers : {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then(response => response.json())
		.then(pokedex => {
			pokedex.pokemon.sort((a, b) => {
				let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
				if (fa < fb) return -1;
				if (fa > fb) return 1;
				return 0;
			});
			setPokedex(pokedex.pokemon);
			console.log(pokedex.pokemon);
		});
	}
	
	useEffect(() => getData(),[]);
	
	const onSearchChange = (event) => setSearchfield(event.target.value);
	
	const filteredpokedex = pokedex.filter(pokemon => 
		pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
	);
	
	return ( !pokedex.length ? 
		<div className='tc'>
			<h1>Loading...</h1>
			<a
			href='https://cors-anywhere.herokuapp.com/corsdemo'
			rel='noreferrer'
			target='_blank'>
				<h2>CORS error, click to enable content</h2>
			</a>
		</div> :
		(
		<BrowserRouter>
			<Routes>
				<Route path="/pokedex" element={
					<div>
						<div className='tc'>
							<h1 className='title'>Pokédex</h1>
							<SearchBox searchChange={onSearchChange} />
						</div>
						<Scroll>
							<ErrorBoundary>
								<table>
									<thead>
										<tr>
											<th>Image</th>
											<th>Num</th>
											<th>Name</th>
											<th>Type</th>
											<th>+</th>
										</tr>
									</thead>
									<Table pokedex={filteredpokedex} />
								</table>
							</ErrorBoundary>
						</Scroll>
					</div>
				}></Route>
			</Routes>
		</BrowserRouter>
		)
	)
}

export default App;