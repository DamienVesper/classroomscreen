var varController = {
	changedClassPeriod: false
};


function alertTime(token) {
	if(token) {
		let className = document.querySelector(`#class-name`).value;
		let shour = document.querySelector(`#time-hour`).innerHTML;
		let sminute = document.querySelector(`#time-minute`).innerHTML;
		let ssecond = document.querySelector(`#time-second`).innerHTML;
		var classPeriod = className.slice(0, 1);

		if(shour ==  7 && sminute >= 34 && sminute <= 38) if(classPeriod != `2`) varController.changedClassPeriod = false;
		else if(shour ==  9 && sminute >= 7 && sminute <= 11) if(classPeriod != `3`) varController.changedClassPeriod = false;
		else if(shour ==  10 && sminute >= 40 && sminute <= 44) if(classPeriod != `4`) varController.changedClassPeriod = false;
		else if(shour ==  12 && sminute >= 48 && sminute <= 52) if(classPeriod != `5`) varController.changedClassPeriod = false;
		else if(shour ==  14 && sminute >= 17 && sminute <= 21) if(classPeriod != `1`) varController.changedClassPeriod = false;
		else varController.changedClassPeriod = true;

		//document.querySelector(`#row-sm-1`).style.color = `#F00`;
		if(shour == 7 && sminute >= 34 && sminute <= 38) document.querySelector(`#row-sm-2`).style.color = `#F00`;
		else document.querySelector(`#row-sm-2`).style.color = `#000`;
		if(shour == 9 && sminute >= 7 && sminute <= 11) document.querySelector(`#row-sm-3`).style.color = `#F00`;
		else document.querySelector(`#row-sm-3`).style.color = `#000`;
		if(shour == 10 && sminute >= 40 && sminute <= 44) document.querySelector(`#row-sm-4`).style.color = `#F00`;
		else document.querySelector(`#row-sm-4`).style.color = `#000`;
		if(shour == 12 && sminute >= 48 && sminute <= 52) document.querySelector(`#row-sm-5`).style.color = `#F00`;
		else document.querySelector(`#row-sm-5`).style.color = `#000`;
		if(shour == 14 && sminute >= 17 && sminute <= 21) document.querySelector(`#row-sm-6`).style.color = `#F00`;
		else document.querySelector(`#row-sm-6`).style.color = `#000`;
		
		//document.location.reload();
		//document.querySelector(`#row-sm-6`).style.color = `#F00`;
		//else document.querySelector(`#row-sm-6`).style.color = `#000`;\
		if(!varController.changedClassPeriod) {
			varController.changedClassPeriod = true;

			if(classPeriod != 5) {
				if(classPeriod == `1`) classPeriod = `2`;
				if(classPeriod == `2`) classPeriod = `3`;
				if(classPeriod == `3`) classPeriod = `4`;
				if(classPeriod == `4`) classPeriod = `5`;
			}
			else if(classPeriod == 5) {
				classPeriod = 1;
				let cclass = document.querySelector(`#class-name`).value;
				if(cclass.slice(1, 2).toUpperCase() == `A`) document.querySelector(`#class-name`).value = cclass.slice(0, 1) + `B`;
				else if(cclass.slice(1, 2).toUpperCase() == `B`) document.querySelector(`#class-name`).value = cclass.slice(0, 1) + `A`;
				else return;
			}
			else return;
			document.querySelector(`#class-name`).value = classPeriod + className.slice(1);
			//document.location.reload();
		}
		document.querySelector(`#time`).style.color = `#F00`;		
	}
	else if(!token) document.querySelector(`#time`).style.color = `#000`;
	else return;
}
function getDateInfo() {
	let today = new Date();
	let smonth, sdate, sday, shour, sminute, ssecond;

	let months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
	let days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];

	sday = today.getDay();
	smonth = today.getMonth();
	sdate = today.getDate();

	shour = today.getHours();
	sminute = today.getMinutes();
	ssecond = today.getSeconds();

	document.querySelector(`#date-day`).innerHTML = days[sday];
	document.querySelector(`#date-month`).innerHTML = months[smonth];
	document.querySelector(`#date-date`).innerHTML = sdate;

	if(shour == 0) 	document.querySelector(`#time-hour`).innerHTML = `12`;
	else if(shour > 12 && shour != 24) 	document.querySelector(`#time-hour`).innerHTML = shour % 12;
	else if(shour == 24) 	document.querySelector(`#time-hour`).innerHTML = `12`;
	else document.querySelector(`#time-hour`).innerHTML = shour;

	if(sminute < 10) document.querySelector(`#time-minute`).innerHTML = `0${sminute}`;
	else document.querySelector(`#time-minute`).innerHTML = sminute;
	
	if(ssecond < 10) document.querySelector(`#time-second`).innerHTML = `0${ssecond}`;
	else document.querySelector(`#time-second`).innerHTML = ssecond;

	if(shour < 12) document.querySelector(`#time-api`).innerHTML = `AM`;
	else if(shour >= 12) document.querySelector(`#time-api`).innerHTML = `PM`;

	if(shour ==  6 && sminute >= 47 && sminute <= 51) alertTime(true);
	else if(shour ==  7 && sminute >= 34 && sminute <= 38) alertTime(true);
	else if(shour ==  9 && sminute >= 7 && sminute <= 11) alertTime(true);
	else if(shour ==  10 && sminute >= 40 && sminute <= 44) alertTime(true);
	else if(shour ==  12 && sminute >= 48 && sminute <= 52) alertTime(true);
	else if(shour ==  14 && sminute >= 17 && sminute <= 21) alertTime(true);
	else alertTime(false);
	/*
	6:47 - 6:51
	7:34 - 7:38
	9:07 - 9:11
	10:40 - 10:44
	12:48 - 12:52
	2:17 - 2:21
	*/
}
function getData() {
	if(localStorage.getItem(`class-name`)) document.querySelector(`#class-name`).value = localStorage.getItem(`class-name`);
	if(localStorage.getItem(`instructor-name`)) document.querySelector(`#instructor-name`).value = localStorage.getItem(`instructor-name`);
	if(localStorage.getItem(`instructions`)) document.querySelector(`#instructions`).innerHTML = localStorage.getItem(`instructions`);
	//if(localStorage.getItem(``)) document.querySelector(`#`).innerHTML = localStorage.getItem(``);
	else return;
}
function saveData() {
	localStorage.setItem(`class-name`, document.querySelector(`#class-name`).value);
	localStorage.setItem(`instructor-name`, document.querySelector(`#instructor-name`).value);
	localStorage.setItem(`instructions`, document.querySelector(`#instructions`).value);
	//localStorage.setItem(``, document.querySelector(`#`).value);
}

function doTimer() {}
//function doStopwatch() {}

setTimeout(getData, 500);
setTimeout(function() {
	setInterval(getDateInfo, 100);
	setInterval(saveData, 100);
}, 500);
