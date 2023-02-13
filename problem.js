// একটা ওয়েবসাইট এ একটা input ফিল্ড থাকবে। তার সাথে একটা বাটন থাকবে double নামে। তুমি ইনপুট ফিল্ড এ যদি কোন সংখ্যা লিখো তাহলে নিচে সেই সংখ্যা ডাবল করে দেখাবে। আরেকটা বাটন থাকবে triple নামে। সেটাতে ক্লিক করলে ইনপুট ফিল্ড এ যে সংখ্যা আছে সেটা তিনগুণ হয়ে যাবে। সেই সংখ্যা নিচে দেখাবে। আর যদি ইনপুট ফিল্ড এ সংখ্যা ছাড়া কোন কথা লিখে তাহলে একটা এলার্ট (alert) দিয়ে বলবে Please enter a number। এলার্ট ক্যামনে দেয় সেটা নিয়ে বিস্তারিত অনেকদিন পরে আমরা ই দেখায় দিবো। আপাতত দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা।

document.getElementById('btn-double').addEventListener('click', function () {
	const inputField = document.getElementById('input-field');
	const inputFieldValueString = inputField.value;
	const inputFieldValue = parseFloat(inputFieldValueString);
	inputField.value = '';

	if (isNaN(inputFieldValue)) {
		alert('Please provide a valid number');
		return;
	}

	if (typeof inputFieldValue === 'number') {
		const inputDoubleField = document.getElementById('check-double');
		inputDoubleField.value = inputFieldValue * 2;
	} else {
		alert('Please enter a number');
	}
});
document.getElementById('btn-triple').addEventListener('click', function () {
	const inputField = document.getElementById('input-field');
	const inputFieldValueString = inputField.value;
	const inputFieldValue = parseFloat(inputFieldValueString);
	console.log(inputFieldValue);
	inputField.value = '';

	if (isNaN(inputFieldValue)) {
		alert('Please provide a valid number');
		return;
	}
	if (typeof inputFieldValue === 'number') {
		const inputTripleField = document.getElementById('check-double');
		inputTripleField.value = inputFieldValue * 3;
	} else {
		alert('Please enter a number');
	}
});
