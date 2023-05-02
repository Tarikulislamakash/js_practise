//   =================================================
//   basic promise
//   =================================================

// pending => when code is processing status is pending
// fulfilled/resolved => when code return value successfully
// rejected => when code return error

	getJson("profile.json").then(renderProfile, displayError);

	getJson("profile.json").then(renderProfile).catch(displayError);

	getJson("profile.json")
		.then(renderProfile)
		.then(getFriends)
		.then(getStatus)
		.catch(displayError);

//   =================================================
//   basic promise
//   =================================================



//   =================================================
//   example of promise
//   =================================================

	let calculationPromise = new Promise(function (resolve, reject) {
		setTimeout(function () {
		console.log(1 + 1);
		}, 1000);
	});

	let calculationPromise2 = new Promise(function (resolve, reject) {
		setTimeout(function () {
		console.log(1 + 2);
		}, 500);
	});

	function addTwo(value) {
		return value + 2;
	}

	function printFinalValue(value) {
		console.log("The final value is ", value);
	}

	calculationPromise.then(addTwo).then(addTwo).then(printFinalValue);

	calculationPromise2.then(addTwo).then(addTwo).then(printFinalValue);

  //   =================================================
//   example of promise
//   =================================================
