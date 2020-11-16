import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Sidebar from './Components/Sidebar';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Header />
			<Services />
		</>
	);
}

export default App;
