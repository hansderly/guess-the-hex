import React from 'react';
import Lottie from "lottie-react";
import sad from '../../anim/sad.json'
import happy from '../../anim/happy.json'

import styles from './Card.module.css';
import { Emoji } from '../../App';
export interface ICode {
	code: string | undefined;
	display: Emoji
}

const Card = ({ display, code }: ICode) => {
	const padding = display === null ? '200px' : '100px'
	const emoji = display === 'sad' ? sad : display === 'happy' ? happy : null;

	return <div style={{...card, padding, backgroundColor: code}}>
		{
			display !== null && <Lottie style={anim} animationData={emoji} />
		}
	</div>;
};

const card = {
	borderRadius: '50px',
}

const anim = {
	width: '200px',
	padding: '0'
}

export default Card;
