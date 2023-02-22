import { useState } from 'react';
import { Card } from './components';
import styles from './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Card />
		</div>
	);
}

export default App;
