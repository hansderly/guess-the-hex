import React from 'react';
import Lottie from "lottie-react";
import sad from '../../anim/sad.json'
import happy from '../../anim/happy.json'

import styles from './Card.module.css';
export interface ICode {
	code: string | undefined;
}

const Card = ({ code }: ICode) => {
	return <div style={{...card, backgroundColor: code}}>
		<Lottie style={anim} animationData={happy} />
	</div>;
};

const card = {
	padding: '100px',
	borderRadius: '50px',
}

const anim = {
	width: '200px',
	padding: '0'
}

export default Card;
