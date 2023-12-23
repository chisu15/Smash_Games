window.addEventListener("DOMContentLoaded", function () {
	const dropDownSort = document.querySelectorAll(".sorting-area");
	document.addEventListener("click", (event) => {
		dropDownSort.forEach((dropdown) => {
			const boxList = dropdown.querySelector(".dropdown-content");
			const defaultText = dropdown.querySelector(".default-text");
			const icon = dropdown.querySelector(".material-symbols-outlined");

			if (event.target !== defaultText && event.target !== icon) {
				boxList.style.display = "none";
				icon.style.rotate = "0deg";
			}
		});
	});

	dropDownSort.forEach((items) => {
		const defaultText = items.querySelector(".default-text");
		const listChart = items.querySelectorAll(".list-chart p");
		const boxList = items.querySelector(".dropdown-content");
		var contextSelected;
		const icon = items.querySelector(".material-symbols-outlined");
		const iconBox = items.querySelector(".icon");
		const resetBtn = items.querySelector(".clear-btn");
		defaultText.addEventListener("click", () => {
			icon.style.rotate = icon.style.rotate === "0deg" ? "90deg" : "0deg";
			boxList.style.display =
				boxList.style.display === "block" ? "none" : "block";
		});
		iconBox.addEventListener("click", () => {
			icon.style.rotate = icon.style.rotate === "0deg" ? "90deg" : "0deg";
			boxList.style.display =
				boxList.style.display === "block" ? "none" : "block";
		});
		listChart.forEach((point) => {
			point.addEventListener("click", () => {
				listChart.forEach((item) => {
					item.classList.remove("selected");
				});
				point.classList.add("selected");
				contextSelected = point.textContent;
				defaultText.innerHTML = contextSelected;
				boxList.style.display = "none";
				icon.style.rotate =
					icon.style.rotate === "0deg" ? "90deg" : "0deg";
			});
		});
		resetBtn.addEventListener("click", () => {
			contextSelected = `--- Select sort type ---`;
			defaultText.innerHTML = contextSelected;
		});
	});

	const filterBtn = document.querySelectorAll(".btn-group button");

	filterBtn.forEach((button) => {
		button.addEventListener("click", () => {
			filterBtn.forEach((btn) => {
				btn.classList.remove("selected");
			});
			button.classList.add("selected");
		});
	});

	const tableBody = document.querySelectorAll("tbody tr");
	const popUpArr = document.querySelectorAll(".pop-up");
	const popUp = document.querySelector(".pop-up");
	console.log(tableBody);
	let currentDeleteRow;
	let originIndexRow = [];

	tableBody.forEach((items, index) => {
		const sn = items.querySelectorAll(".sn");
		const statusBtn = items.querySelectorAll(".btn-status-table");
		const deleteBtn = items.querySelectorAll(".btn-delete");

		statusBtn.forEach((button) => {
			button.addEventListener("click", () => {
				let textBtn =
					button.innerHTML === "Unavailable"
						? "Available"
						: "Unavailable";

				button.style.background =
					button.style.background === "red" ? "#62b668" : "red";
				button.innerHTML = textBtn;
			});
		});
		index++;
		sn.forEach((items) => {
			items.innerText = index;
			originIndexRow.push(index);
			console.log(originIndexRow);
		});
		console.log("Current SN:", sn ? sn.innerText : "N/A");
		deleteBtn.forEach((button) => {
			button.addEventListener("click", () => {
				console.log("click");
				popUp.style.display =
					popUp.style.display === "block" ? "none" : "block";
				const currentRow = button.closest("tr");
				currentDeleteRow = currentRow.querySelector(".sn").innerText;
				console.log("Current Delete Row SN:", currentDeleteRow);
			});
		});
	});
	popUpArr.forEach((items) => {
		const yesBtn = items.querySelector("#yes");
		const noBtn = items.querySelector("#no");
		yesBtn.addEventListener("click", () => {
			popUp.style.display =
				popUp.style.display === "block" ? "none" : "block";
			// Xóa hàng tương ứng
			const deletedRow = tableBody[currentDeleteRow - 1];
			deletedRow.remove();
			// Cập nhật lại số thứ tự (sn)
			let tb = this.document.querySelectorAll(".table-items tbody tr");
			tb.forEach((items, index) => {
				const snAfter = items.querySelectorAll(".sn");
				snAfter.forEach((item) => {
					item.innerHTML = originIndexRow[index];
				});
			});

			console.log("Delete:", currentDeleteRow);
		});
		noBtn.addEventListener("click", () => {
			popUp.style.display =
				popUp.style.display === "block" ? "none" : "block";
		});
	});
	// TOGGLE PAGE BUTTON
	const paginationEle = this.document.querySelectorAll(".pagination");
	paginationEle.forEach((item) => {
		const pageBtn = item.querySelectorAll(".page-item");
		const nextBtn = item.querySelector(".page-next");
		const preBtn = item.querySelector(".page-previous");

		pageBtn.forEach((button) => {
			button.addEventListener("click", () => {
				pageBtn.forEach((i) => {
					i.classList.remove("active");
				});
				button.classList.add("active");
				let actived = item.querySelector(".page-item.active");
				let currentIndex = Array.from(pageBtn).indexOf(actived);
				showPage(currentIndex+1);
			});
		});
		nextBtn.addEventListener("click", () => {
			let actived = item.querySelector(".page-item.active");
			let currentIndex = Array.from(pageBtn).indexOf(actived);
			pageBtn.forEach((button) => {
				button.classList.remove("active");
			});

			if (currentIndex < pageBtn.length-1) {
				pageBtn[currentIndex + 1].classList.add("active");
				showPage(currentIndex+2);
			} else {
				pageBtn[0].classList.add("active");
				showPage(1);
			}
		});
		preBtn.addEventListener("click", () => {
			let actived = item.querySelector(".page-item.active");
			let currentIndex = Array.from(pageBtn).indexOf(actived);
			console.log(currentIndex);
			pageBtn.forEach((button) => {
				button.classList.remove("active");
			});
			if (currentIndex > 0) {
				showPage(currentIndex);
				pageBtn[currentIndex - 1].classList.add("active");
			} else {
				showPage(pageBtn.length);
				pageBtn[pageBtn.length - 1].classList.add("active");
			}
		});
	});

	// PAGINATION
	const tableItems = document.querySelector(".table-items");
	const rowsPerPage = 4; // Số lượng hàng trên mỗi trang
	const totalRows = tableItems.querySelectorAll("tbody tr").length;

	let currentPage = 1;

	// Tính tổng số trang
	const totalPages = Math.ceil(totalRows / rowsPerPage);

	// Hiển thị trang đầu tiên khi trang web được tải
	showPage(currentPage);

	// Hàm ẩn/hiện các hàng cho trang hiện tại
	function showPage(page) {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		const trs = tableItems.querySelectorAll("tbody tr");

		trs.forEach((tr, index) => {
			if (index >= start && index < end) {
				tr.style.display = "table-row";
			} else {
				tr.style.display = "none";
			}
		});

		currentPage = page;
	}
});
