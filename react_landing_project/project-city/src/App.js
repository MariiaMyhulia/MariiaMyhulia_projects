import React from 'react';

//Styles
import './App.css';
import './assets/fonts/MontserratLight.css';
import './assets/fonts/HelveticaNeueLTProRoman.css';
import './assets/fonts/merriweather-light-italic.css';

//Components
import Header from "./components/Header/Header";
import Years from "./components/Years/Years";
import Team from "./components/Team/Team";
import Advantages from "./components/Advantages/Advantages";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
	return (
		<div className="page">
			<Header/>
			<Years/>
			<Team/>
			<Advantages/>
			<Contacts/>
			<FooterBlock/>
		</div>
	);
}

export default App;
