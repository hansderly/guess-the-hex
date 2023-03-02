import { Answer, Card, Head } from './components';
import styles from './App.module.css';

function App() {

	const hex1 = '#' + Math.floor(Math.random() * 16777216).toString(16).toUpperCase();
	const hex2 = '#' + Math.floor(Math.random() * 16777216).toString(16).toUpperCase();
	const hex3 = '#' + Math.floor(Math.random() * 16777216).toString(16).toUpperCase();

	return (
		<div className={styles.container}>
			<div>
				<Head />
				<Card code={hex1} />
				<div className={styles.answerList}>
					<Answer />
					<Answer />
					<Answer />
				</div>
			</div>
		</div>
	);
}

export default App;
