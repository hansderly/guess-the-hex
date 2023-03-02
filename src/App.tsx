import { useEffect, useState } from 'react';
import { Answer, Card, Head } from './components';
import styles from './App.module.css';
import quizGenerator from './logic/calculate';

export interface IQuiz {
	hexCodes: string[],
	answer: string,
}

function App() {
	const [quiz, setQuiz] = useState<IQuiz>()

	useEffect(() => {
		setQuiz(quizGenerator())
	}, [])

	return (
		<div className={styles.container}>
			<div>
				<Head />
				<Card code={quiz?.answer} />
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
