import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NightRide from "./Pages/NightRide";
import UpTheHill from "./Pages/UpTheHill";
import WhiteLie from "./Pages/WhiteLie";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {motion} from 'framer-motion';

function App() {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes
				location={location}
				key={location.pathname}>
				<Route
					path='/'
					element={
						<motion.div className='App'initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
							<HomePage></HomePage>
						</motion.div>
					}
				/>
				<Route
					path='/NightRide/:page'
					element={<NightRide />}
				/>
				<Route
					path='/UpTheHill/:page'
					element={<UpTheHill />}
				/>
				<Route
					path='/WhiteLie/:page'
					element={<WhiteLie />}
				/>
			</Routes>
		</AnimatePresence>
	);
}

export default App;
