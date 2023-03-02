import { useEffect, useState } from 'react';
import { Answer, Card, Head } from './components';
import styles from './App.module.css';
import { generateHex } from './logic/calculate';

function App() {
	const [hex, setHex] = useState<string[]>([])

	useEffect(() => {
		setHex(generateHex())
	}, [])

	return (
		<div className={styles.container}>
			<div>
				<Head />
				<Card code={hex[0]} />
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
