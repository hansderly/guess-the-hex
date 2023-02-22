import React from 'react';

import styles from './Card.module.css';
interface ICard {
	code: string;
}

const Card = ({ code }: ICard) => {
	return <div className={styles.container}></div>;
};

export default Card;
