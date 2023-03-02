import React from 'react';

import styles from './Card.module.css';
interface ICard {
	code: string | undefined;
}

const Card = ({ code }: ICard) => {
	return <div style={{...card, backgroundColor: code}}></div>;
};

const card = {
	padding: '200px',
	borderRadius: '50px',
}

export default Card;
