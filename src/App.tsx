import { useEffect, useState } from 'react'
import WhoIam from './WhoIam'
import './App.css'
import Navbar from './components/Navbar'
import Projects from './Projects'
import LoadingPage from './LoadingPage'
import CustomAlert from './components/CustomAlert'

function App() {

	return (
    	<div className="App">
			{/* <header>
				<h3>if you see this message, soo this project has not finish yet, thank you for your visite.</h3>
			</header> */}
			<CustomAlert message="Thank you for visiting my website! Please note that my portfolio is currently under construction, but we hope you found everything else you were looking for." />
			<Navbar />
			<WhoIam />
			{/* {alert('if you see this message, soo this project has not finish yet, thank you for your visite.')} */}
			<Projects />
    	</div>
	)
}

export default App
