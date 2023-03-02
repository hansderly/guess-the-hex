import { IQuiz } from "../App";

const generateHex = (): string[] => {
	let quantity = 3;
	let result: string[] = [];

	function generateHexRec(qty: number) {
		if (!qty) return;

		result.push( '#' + Math.floor(Math.random() * 16777216) .toString(16) .toUpperCase());

		generateHexRec(qty - 1);
	}
	generateHexRec(quantity);

	return result;
};


const randomIndex = (): number => Math.random() * 3 | 0;
const chooseAnswer = (hexCodes: string[], randomNum: number): string => hexCodes[randomNum];
const quiz = (hexCodes: string[], answer: string): IQuiz => ({ hexCodes, answer });

const hexCodes = generateHex();

export default () => quiz(hexCodes, chooseAnswer(hexCodes, randomIndex()));
