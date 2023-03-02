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

	const verifyAnswer = (code: string) => code === quiz?.answer;

	const handleClick = (code: string) => {
		console.log(verifyAnswer(code))
		return verifyAnswer(code);
	}

	return (
		<div className={styles.container}>
			<div>
				<Head />
				<Card code={quiz?.answer} />
				<div className={styles.answerList}>
					{
						quiz?.hexCodes.map(hexCode => (
							<Answer key={hexCode} onClick={() => handleClick(hexCode)} code={hexCode} />
						))
					}
				</div>
			</div>
		</div>
	);
}

export default App;
