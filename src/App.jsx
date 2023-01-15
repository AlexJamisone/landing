import About from './components/About';
import GetTouch from './components/GetTouch';
import Header from './components/Header';
import Main from './components/Main';
import Input from './atomic/atoms/Input';

function App() {
	return (
		<>
			<Input
				labelFild={'Your email'}
				placeholderField={'name@example.com'}
			/>
			<Header />
			<Main />
			<About />
			<GetTouch />
			<footer></footer>
		</>
	);
}

export default App;
