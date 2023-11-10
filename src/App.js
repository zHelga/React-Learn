import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Message from './components/Message/Message';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';


const App = (props) => {
	
  return (
			<div className='wrapper'>
				<Header />
				<Navbar state={props.state.sidebar}/>

				<div className='page'>
					<Routes>
            <Route path="/profile" element={<Profile state={props.state.postsPage}
						dispatch = {props.dispatch}
						/>}/>

            <Route path="/message/*" element={<Message 
						state={props.state.messagesPage} 
						dispatch = {props.dispatch}/>}/>

            <Route path="/news" element={<News/>}/>

            <Route path="/music" element={<Music/>}/>
          </Routes>
				</div>
				
			</div>
  );
}

export default App;
