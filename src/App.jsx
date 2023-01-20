import About from './components/About';
import GetTouch from './components/GetTouch';
import Header from './components/Header';
import Main from './components/Main';
function App() {
	return (
		<>	
			<Header />
			<Main />
			<About />
			<GetTouch />
			<footer className='font-main mobile:mx-mobile tablet:mx-tablet web:mx-web mobile:my-[21px] mobile:text-sm mobile:leading-body-mobile text-gray-dark tablet:text-base tablet:leading-6'>
				<p>© 2022 JetRuby. All Rights Reserved</p>
			</footer>
		</>
	);
}

export default App;
