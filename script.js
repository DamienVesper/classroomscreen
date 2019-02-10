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
/*		if(!varController.changedClassPeriod) {
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
		}*/
		document.querySelector(`#time`).style.color = `#F00`;		
	}
	else if(!token) {
		document.querySelector(`#time`).style.color = `#000`;
		
		//Reset Row Coloring
		document.querySelector(`#row-sm-2`).style.color = `#000`;
		document.querySelector(`#row-sm-3`).style.color = `#000`;
		document.querySelector(`#row-sm-4`).style.color = `#000`;
		document.querySelector(`#row-sm-5`).style.color = `#000`;
		document.querySelector(`#row-sm-6`).style.color = `#000`;
	}
	else return;
}
function getDateInfo() {
	let today = new Date();
	let smonth, sdate, sday, shour, sminute, ssecond;

	let months = [`Jan`, `Feb`, `March`, `April`, `May`, `June`, `July`, `Aug`, `Sept`, `Oct`, `Nov`, `Dec`];
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

setTimeout(function() {
	let timeradd1 = document.querySelector(`#timer-add-btn-1`);
	let timeradd2 = document.querySelector(`#timer-add-btn-2`);
	let timeradd3 = document.querySelector(`#timer-add-btn-3`);
	let timeradd4 = document.querySelector(`#timer-add-btn-4`);

	let timersubtract1 = document.querySelector(`#timer-subtract-btn-1`);
	let timersubtract2 = document.querySelector(`#timer-subtract-btn-2`);
	let timersubtract3 = document.querySelector(`#timer-subtract-btn-3`);
	let timersubtract4 = document.querySelector(`#timer-subtract-btn-4`);

	let timernum1 = document.querySelector(`#timer-numbers-min-2`);
	let timernum2 = document.querySelector(`#timer-numbers-min-1`);
	let timernum3 = document.querySelector(`#timer-numbers-sec-2`);
	let timernum4 = document.querySelector(`#timer-numbers-sec-1`);

	function checkAllTimerBtns() {
		/*
		if(varController.isTiming) {}
		else if(!varController.isTiming) {}
		else return;
		*/

		if(timernum1.innerHTML == `0`) {
			timeradd1.classList.remove(`disabled`);
			timeradd1.disabled = false;
			timersubtract1.classList.add(`disabled`);
			timersubtract1.disabled = true;
		}
		else if(timernum1.innerHTML != `9`) {
			timeradd1.classList.remove(`disabled`);
			timeradd1.disabled = false;
			timersubtract1.classList.remove(`disabled`);
			timersubtract1.disabled = false;
		}
		else if(timernum1.innerHTML == `9`) {
			timersubtract1.classList.remove(`disabled`);
			timersubtract1.disabled = false;
			timeradd1.classList.add(`disabled`);
			timeradd1.disabled = true;
		}

		if(timernum2.innerHTML == `0`) {
			timeradd2.classList.remove(`disabled`);
			timeradd2.disabled = false;
			timersubtract2.classList.add(`disabled`);
			timersubtract2.disabled = true;
		}
		else if(timernum2.innerHTML != `9`) {
			timeradd2.classList.remove(`disabled`);
			timeradd2.disabled = false;
			timersubtract2.classList.remove(`disabled`);
			timersubtract2.disabled = false;
		}
		else if(timernum2.innerHTML == `9`) {
			timersubtract2.classList.remove(`disabled`);
			timersubtract2.disabled = false;
			timeradd2.classList.add(`disabled`);
			timeradd2.disabled = true;
		}

		if(timernum3.innerHTML == `0`) {
			timeradd3.classList.remove(`disabled`);
			timeradd3.disabled = false;
			timersubtract3.classList.add(`disabled`);
			timersubtract3.disabled = true;
		}
		else if(timernum3.innerHTML != `9`) {
			timeradd3.classList.remove(`disabled`);
			timeradd3.disabled = false;
			timersubtract3.classList.remove(`disabled`);
			timersubtract3.disabled = false;
		}
		else if(timernum3.innerHTML == `9`) {
			timersubtract3.classList.remove(`disabled`);
			timersubtract3.disabled = false;
			timeradd3.classList.add(`disabled`);
			timeradd3.disabled = true;
		}

		if(timernum4.innerHTML == `0`) {
			timeradd4.classList.remove(`disabled`);
			timeradd4.disabled = false;
			timersubtract4.classList.add(`disabled`);
			timersubtract4.disabled = true;
		}
		else if(timernum4.innerHTML != `9`) {
			timeradd4.classList.remove(`disabled`);
			timeradd4.disabled = false;
			timersubtract4.classList.remove(`disabled`);
			timersubtract4.disabled = false;
		}
		else if(timernum4.innerHTML == `9`) {
			timersubtract4.classList.remove(`disabled`);
			timersubtract4.disabled = false;
			timeradd4.classList.add(`disabled`);
			timeradd4.disabled = true;
		}
	}
	timeradd1.addEventListener(`click`, function() {
		//if(varController.isTiming) return;
		checkAllTimerBtns();
		if(timernum1.innerHTML == `0`) timernum1.innerHTML = `1`;
		else if(timernum1.innerHTML == `1`) timernum1.innerHTML = `2`;
		else if(timernum1.innerHTML == `2`) timernum1.innerHTML = `3`;
		else if(timernum1.innerHTML == `3`) timernum1.innerHTML = `4`;
		else if(timernum1.innerHTML == `4`) timernum1.innerHTML = `5`;
		else if(timernum1.innerHTML == `5`) timernum1.innerHTML = `6`;
		else if(timernum1.innerHTML == `6`) timernum1.innerHTML = `7`;
		else if(timernum1.innerHTML == `7`) timernum1.innerHTML = `8`;
		else if(timernum1.innerHTML == `8`) timernum1.innerHTML = `9`;
		checkAllTimerBtns();
	});
	timeradd2.addEventListener(`click`, function() {
		//if(varController.isTiming) return;
		checkAllTimerBtns();
		if(timernum2.innerHTML == `0`) timernum2.innerHTML = `1`;
		else if(timernum2.innerHTML == `1`) timernum2.innerHTML = `2`;
		else if(timernum2.innerHTML == `2`) timernum2.innerHTML = `3`;
		else if(timernum2.innerHTML == `3`) timernum2.innerHTML = `4`;
		else if(timernum2.innerHTML == `4`) timernum2.innerHTML = `5`;
		else if(timernum2.innerHTML == `5`) timernum2.innerHTML = `6`;
		else if(timernum2.innerHTML == `6`) timernum2.innerHTML = `7`;
		else if(timernum2.innerHTML == `7`) timernum2.innerHTML = `8`;
		else if(timernum2.innerHTML == `8`) timernum2.innerHTML = `9`;
		checkAllTimerBtns();
	});
	timeradd3.addEventListener(`click`, function() {
		//if(varController.isTiming) return;
		checkAllTimerBtns();
		if(timernum3.innerHTML == `0`) timernum3.innerHTML = `1`;
		else if(timernum3.innerHTML == `1`) timernum3.innerHTML = `2`;
		else if(timernum3.innerHTML == `2`) timernum3.innerHTML = `3`;
		else if(timernum3.innerHTML == `3`) timernum3.innerHTML = `4`;
		else if(timernum3.innerHTML == `4`) timernum3.innerHTML = `5`;
		else if(timernum3.innerHTML == `5`) timernum3.innerHTML = `6`;
		else if(timernum3.innerHTML == `6`) timernum3.innerHTML = `7`;
		else if(timernum3.innerHTML == `7`) timernum3.innerHTML = `8`;
		else if(timernum3.innerHTML == `8`) timernum3.innerHTML = `9`;
		checkAllTimerBtns();
	});
	timeradd4.addEventListener(`click`, function() {
		//if(varController.isTiming) return;
		checkAllTimerBtns();
		if(timernum4.innerHTML == `0`) timernum4.innerHTML = `1`;
		else if(timernum4.innerHTML == `1`) timernum4.innerHTML = `2`;
		else if(timernum4.innerHTML == `2`) timernum4.innerHTML = `3`;
		else if(timernum4.innerHTML == `3`) timernum4.innerHTML = `4`;
		else if(timernum4.innerHTML == `4`) timernum4.innerHTML = `5`;
		else if(timernum4.innerHTML == `5`) timernum4.innerHTML = `6`;
		else if(timernum4.innerHTML == `6`) timernum4.innerHTML = `7`;
		else if(timernum4.innerHTML == `7`) timernum4.innerHTML = `8`;
		else if(timernum4.innerHTML == `8`) timernum4.innerHTML = `9`;
		checkAllTimerBtns();
	});
	timersubtract1.addEventListener(`click`, function() {
		//if(varController.isTiming) return;
		checkAllTimerBtns();
		if(timernum1.innerHTML == `9`) timernum1.innerHTML = `8`;
		else if(timernum1.innerHTML == `8`) timernum1.innerHTML = `7`;
		else if(timernum1.innerHTML == `7`) timernum1.innerHTML = `6`;
		else if(timernum1.innerHTML == `6`) timernum1.innerHTML = `5`;
		else if(timernum1.innerHTML == `5`) timernum1.innerHTML = `4`;
		else if(timernum1.innerHTML == `4`) timernum1.innerHTML = `3`;
		else if(timernum1.innerHTML == `3`) timernum1.innerHTML = `2`;
		else if(timernum1.innerHTML == `2`) timernum1.innerHTML = `1`;
		else if(timernum1.innerHTML == `1`) timernum1.innerHTML = `0`;
		checkAllTimerBtns();
	});
	timersubtract2.addEventListener(`click`, function() {
		//if(varController.isTiming) return;
		checkAllTimerBtns();
		if(timernum2.innerHTML == `9`) timernum2.innerHTML = `8`;
		else if(timernum2.innerHTML == `8`) timernum2.innerHTML = `7`;
		else if(timernum2.innerHTML == `7`) timernum2.innerHTML = `6`;
		else if(timernum2.innerHTML == `6`) timernum2.innerHTML = `5`;
		else if(timernum2.innerHTML == `5`) timernum2.innerHTML = `4`;
		else if(timernum2.innerHTML == `4`) timernum2.innerHTML = `3`;
		else if(timernum2.innerHTML == `3`) timernum2.innerHTML = `2`;
		else if(timernum2.innerHTML == `2`) timernum2.innerHTML = `1`;
		else if(timernum2.innerHTML == `1`) timernum2.innerHTML = `0`;
		checkAllTimerBtns();
	});
	timersubtract3.addEventListener(`click`, function() {
		//if(varController.isTiming) return;
		checkAllTimerBtns();
		if(timernum3.innerHTML == `9`) timernum3.innerHTML = `8`;
		else if(timernum3.innerHTML == `8`) timernum3.innerHTML = `7`;
		else if(timernum3.innerHTML == `7`) timernum3.innerHTML = `6`;
		else if(timernum3.innerHTML == `6`) timernum3.innerHTML = `5`;
		else if(timernum3.innerHTML == `5`) timernum3.innerHTML = `4`;
		else if(timernum3.innerHTML == `4`) timernum3.innerHTML = `3`;
		else if(timernum3.innerHTML == `3`) timernum3.innerHTML = `2`;
		else if(timernum3.innerHTML == `2`) timernum3.innerHTML = `1`;
		else if(timernum3.innerHTML == `1`) timernum3.innerHTML = `0`;
		checkAllTimerBtns();
	});
	timersubtract4.addEventListener(`click`, function() {
		//if(varController.isTiming) return;
		checkAllTimerBtns();
		if(timernum4.innerHTML == `9`) timernum4.innerHTML = `8`;
		else if(timernum4.innerHTML == `8`) timernum4.innerHTML = `7`;
		else if(timernum4.innerHTML == `7`) timernum4.innerHTML = `6`;
		else if(timernum4.innerHTML == `6`) timernum4.innerHTML = `5`;
		else if(timernum4.innerHTML == `5`) timernum4.innerHTML = `4`;
		else if(timernum4.innerHTML == `4`) timernum4.innerHTML = `3`;
		else if(timernum4.innerHTML == `3`) timernum4.innerHTML = `2`;
		else if(timernum4.innerHTML == `2`) timernum4.innerHTML = `1`;
		else if(timernum4.innerHTML == `1`) timernum4.innerHTML = `0`;
		checkAllTimerBtns();
	});
	checkAllTimerBtns();
}, 500);
