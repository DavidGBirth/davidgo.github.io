function stdoutTest() {
	console.log("Hello World");
	console.log(employees[0]);
}

function getBirthMonth(birthNumber) {
	const auxList = list.filter((empl) => {
		let monthdate = (empl.birthdate.getMonth());
		if (monthdate === (birthNumber - 1)) {
			return empl;
		}
	});
	return auxList;
}


function getSectorEmpl(sector) {
	const auxList = list.filter((empl) => {
		if (empl.sector === sector) {
			return empl;
		}
	});
	return auxList;
}

const modules = { getBirthMonth, getSectorEmpl };
modules.export = modules;