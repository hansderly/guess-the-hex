
export const generateHex = (): string[] => {
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
