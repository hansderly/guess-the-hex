import { Answer, Card, Head } from './components';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.container}>
			<div>
				<Head />
				<Card />
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
