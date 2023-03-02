import React from 'react';

import styles from './Answer.module.css';
import { ICode } from '../Card/Card';

const Answer = ({ code }: ICode) => {
	return (
		<button type='button' className={styles.container}>
			{code}
		</button>
	);
};

export default Answer;
