import { useEffect, useState } from 'react';
import { Answer, Card, Head } from './components';
import styles from './App.module.css';
import quizGenerator from './logic/calculate';
import AnswerList from './components/AnswerList/AnswerList';

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

	const handleClick = ({ target }: any) => {
		const { textContent: code } = target;
		setEmoji(displayEMoji(verifyAnswer(code)))
		return verifyAnswer(code);
		return true
	}

	return (
		<div className={styles.container}>
			<div>
				<Head />
				<Card display={emoji} code={quiz?.answer} />
				<AnswerList quiz={quiz} onClick={(e) => handleClick(e)} />
			</div>
		</div>
	);
}

export default App;
