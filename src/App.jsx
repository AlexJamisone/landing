import About from './components/About';
import GetTouch from './components/GetTouch';
import Header from './components/Header';
import Main from './components/Main';
import Text from './atomic/atoms/Text';

function App() {
	return (
		<>	
			<Header />
			<Main />
			<About />
			<GetTouch />
			<footer className='font-main mobile:mx-mobile tablet:mx-tablet web:mx-web mobile:my-[21px]'>
				<Text content='© 2022 JetRuby. All Rights Reserved' className='tablet:text-subtitle/body-web-sm'/>
			</footer>
		</>
	);
}

export default App;
