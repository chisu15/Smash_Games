const ctx = document.getElementById("myChart");

new Chart(ctx, {
	type: "bar",
	data: {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "Views",
				data: [12, 14, 23, 67, 89, 32],
				borderWidth: 1,
				backgroundColor: '#FFAAAA',
			},
			{
				label: "Products Revenue",
				data: [12, 49, 54, 5, 87, 3],
				borderWidth: 1,
				backgroundColor: '#B4E37A',
			},
			{
				label: "Games Revenue",
				data: [12, 32, 12, 23, 67, 53],
				borderWidth: 1,
				backgroundColor: '#211544',
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
// DROPDOWN CHART
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
	const defaultText = dropdown.querySelector(".default-text");
	const listChart = dropdown.querySelectorAll(".list-chart p");
	const boxList = dropdown.querySelector(".dropdown-content");
	var contextSelected;
    const icon = dropdown.querySelector(".material-symbols-outlined");    
	const iconBox = dropdown.querySelector(".icon");

	defaultText.addEventListener("click", () => {
        icon.style.rotate = icon.style.rotate === "0deg" ? "90deg":"0deg";
		boxList.style.display =
			boxList.style.display === "block" ? "none" : "block";
	});
    iconBox.addEventListener("click", ()=>
    {
        icon.style.rotate = icon.style.rotate === "0deg" ? "90deg":"0deg";
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
            icon.style.rotate = icon.style.rotate === "0deg" ? "90deg":"0deg";
		});
	});
});
// END DROPDOWN CHART
const topGame = document.querySelectorAll(".top-game");
topGame.forEach((items, i)=>
{
	i++;
	const topNum = items.querySelector(".top-number");
	// const topPNum = items.querySelector(".top-product-number");
	// topPNum.innerHTML = i;
	topNum.innerHTML = i;
})

const sideBar = document.querySelectorAll(".side-bar");

const dropDownSort = document.querySelectorAll(".sorting-area");

dropDownSort.forEach((items) => {
	const defaultText = items.querySelector(".default-text");
	const listChart = items.querySelectorAll(".list-chart p");
	const boxList = items.querySelector(".dropdown-content");
	var contextSelected;
    const icon = items.querySelector(".material-symbols-outlined");    
	const iconBox = items.querySelector(".icon");

	defaultText.addEventListener("click", () => {
		console.log("click");
        icon.style.rotate = icon.style.rotate === "0deg" ? "90deg":"0deg";
		boxList.style.display =
			boxList.style.display === "block" ? "none" : "block";
	});
    iconBox.addEventListener("click", ()=>
    {
        icon.style.rotate = icon.style.rotate === "0deg" ? "90deg":"0deg";
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
            icon.style.rotate = icon.style.rotate === "0deg" ? "90deg":"0deg";
		});
	});
});