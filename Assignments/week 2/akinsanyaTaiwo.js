function grade(score) {
	switch (true) {
		case (score >= 70):
			console.log('A');
			break;
		case (score >= 60 && score <= 69):
			console.log('B');
			break;
		case (score >= 50 && score <= 59):
			console.log('C');
			break;
		case (score >= 45 && score <= 49):
			console.log('D');
			break;
		case (score >= 40 && score <= 44):
			console.log('E');
			break;
		default:
			console.log('F');
	}
}
let input = prompt('Enter your score');
grade(input);

let ph = prompt('Enter the ph');
function phScale(num) {
	if (num > 7) {
		console.log('Alkaline');
	} else if (num < 7) {
		console.log('Acidic');
	} else if (num == 7) {
		console.log('Neutral');
	} else {
		console.log('invalid');
	}
}
phScale(ph);