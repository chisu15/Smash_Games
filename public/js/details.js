window.addEventListener("DOMContentLoaded", function () {
	// ADD EVENT WHILE CLICKED "ADDITIONAL INFO"
	const description = document.querySelector("#title-1");
	const additionalInfo = document.querySelector("#title-2");
	const content1 = document.querySelector("#content-1");
	const content2 = document.querySelector("#content-2");

	console.log(content1.style.display);
	additionalInfo.addEventListener("click", () => {
		if (content1.style.display != "none") {
			description.style.color =
				description.style.color === "#7F796D" ? "#211544" : "#7F796D";
			additionalInfo.style.color =
				additionalInfo.style.color === "#211544"
					? "#7F796D"
					: "#211544";
			content2.style.display =
				content2.style.display === "block" ? "none" : "block";
			content1.style.display =
				content1.style.display === "none" ? "block" : "none";
		}
	});
	description.addEventListener("click", () => {
		if (content2.style.display != "none") {
			description.style.color =
				description.style.color === "#211544" ? "#7F796D" : "#211544";
			additionalInfo.style.color =
				additionalInfo.style.color === "#7F796D"
					? "#211544"
					: "#7F796D";
			content2.style.display =
				content2.style.display === "block" ? "none" : "block";
			content1.style.display =
				content1.style.display === "none" ? "block" : "none";
		}
	});

	const review = document.querySelector("#review");
	const report = document.querySelector("#report");
	const rev = document.querySelector("#rev");
	const rep = document.querySelector("#rep");
	const rateReport = document.querySelector(".rating");
	const rateting = rateReport.innerHTML;
	report.addEventListener("click", () => {
		if (rev.style.display != "none") {
			review.style.color =
				review.style.color === "#7F796D" ? "#211544" : "#7F796D";
			report.style.color =
				report.style.color === "#211544" ? "#7F796D" : "#211544";
			rep.style.display =
				rep.style.display === "block" ? "none" : "block";
			rev.style.display = rev.style.display === "none" ? "block" : "none";
			rateReport.innerHTML = "";
			rateReport.innerHTML = "Totel report: 3";
		}
	});
	review.addEventListener("click", () => {
		if (rep.style.display != "none") {
			review.style.color =
				review.style.color === "#211544" ? "#7F796D" : "#211544";
			report.style.color =
				report.style.color === "#7F796D" ? "#211544" : "#7F796D";
			rev.style.display =
				content2.style.display === "block" ? "none" : "block";
			rep.style.display =
				content1.style.display === "none" ? "block" : "none";
			rateReport.innerHTML = "";
			rateReport.innerHTML = rateting;
		}
	});
});
const changeImg = document.querySelector(".change-img");
const inputFile = document.querySelector(".chooseFile");
const coverImg = document.querySelector(".cover-img");
changeImg.addEventListener("click", () => {
	inputFile.click();
	inputFile.addEventListener("change", () => {
		var input = event.target;
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				coverImg.src = e.target.result;
			};
			reader.readAsDataURL(input.files[0]);
		}
	});
});
