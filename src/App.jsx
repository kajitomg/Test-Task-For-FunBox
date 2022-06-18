import './styles/Null.css'
import './styles/App.css';
import Products from './pages/Products';
import backgroundImage from './images/Background/Background.png'

function App() {
	return (
		<div className="wrapper">
			<div className="background">
				<div className="background__wrapper">
					<div className="background__image">
						<img src={backgroundImage} alt="" />
					</div>
					<div className="background__shadow"></div>
				</div>
			</div>
			<div className="container">
				<main className="pages">
					<Products />
				</main>
			</div>
		</div>
	);
}

export default App;
