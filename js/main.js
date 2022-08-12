const body = document.querySelector("body");
const toggler = document.querySelector("#mode");

// toggler button functionality
const toggleFunction = (togglerElement) => {
	togglerElement.classList.toggle("night");
	const animte = ".7s ease-out 1 forwards";
	if (togglerElement.classList.contains("night")) {
		// the moon button
		togglerElement.style.animation = `light ${animte}`;
		togglerElement.style.background = "#0a3d62";
		togglerElement.innerHTML = "☼";
	} else {
		// the sun button
		togglerElement.style.animation = `night ${animte}`;
		togglerElement.style.background = "#353b48";
		togglerElement.innerHTML = "☽";
	}
};

const modeToggler = () => {
	body.classList.toggle("dark");
	toggleFunction(toggler);
};
toggler.addEventListener("click", modeToggler);
