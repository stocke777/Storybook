import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NightRide from "./Pages/NightRide";
import UpTheHill from "./Pages/UpTheHill";
import WhiteLie from "./Pages/WhiteLie";

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<div className='App'>
						<HomePage></HomePage>
					</div>
				}
			/>
      <Route path="/NightRide/:page" element={<NightRide/>}/>
      <Route path="/UpTheHill/:page" element={<UpTheHill/>}/>
      <Route path="/WhiteLie/:page" element={<WhiteLie/>}/>
		</Routes>
	);
}

export default App;
