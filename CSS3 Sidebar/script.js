document.querySelector(".sidebarBtn").addEventListener("click",() => {
	document.querySelector(".sidebar").classList.toggle("active");
	document.querySelector(".sidebarBtn").classList.toggle("toggle");
})