import { useEffect, useState } from 'react';
import { Answer, Card, Head } from './components';
import styles from './App.module.css';
import quizGenerator from './logic/calculate';

export interface IQuiz {
	hexCodes: string[],
	answer: string,
}

export type Emoji = null | 'sad' | 'happy'

function App() {
	const [quiz, setQuiz] = useState<IQuiz>()
	const [emoji, setEmoji] = useState<Emoji>(null)

	useEffect(() => {
		setQuiz(quizGenerator())
	}, [])

	const verifyAnswer = (code: string) => code === quiz?.answer;
	const displayEMoji = (isTrue: boolean): Emoji => isTrue ? 'happy' : 'sad';

	const handleClick = (code: string) => {
		setEmoji(displayEMoji(verifyAnswer(code)))
		return verifyAnswer(code);
	}

	return (
		<div className={styles.container}>
			<div>
				<Head />
				<Card display={emoji} code={quiz?.answer} />
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
