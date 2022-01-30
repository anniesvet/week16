function getSum() {

	let sum=0;

	for(i=1; i<6; i++) {
	let elem = document.getElementById("r"+i);
	if(elem.checked) sum=sum+parseInt(elem.value);
	}

	let inputs = document.getElementsByClassName('selectVal');

		let a = 0;
		for (let i = 0; i<inputs.length; i++)  {
			a += parseInt(inputs[i].value);
		}

	sum+=a;
	document.formText.sumOut.value=sum;
}

