import React from 'react';

import styles from './Answer.module.css';
import { ICode } from '../Card/Card';

interface IAnswer extends ICode {
	onClick: (args: any) => boolean;
}

const Answer = ({ code, onClick }: IAnswer) => {
	return (
		<button onClick={onClick} type='button' className={styles.container}>
			{code}
		</button>
	);
};

export default Answer;
