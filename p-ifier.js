const links = document.querySelectorAll(".a");

// open links function
for (let i = 0; i < links.length; i++) {
	link = links[i];
	link.onclick = function () {
		if (link.getAttribute("target") == "_blank") {
			window.open(link.getAttribute("href"), "_blank");
		}
		window.location = link.getAttribute("href");
	};
}

// image function
const images = document.querySelectorAll(".img");

for (let i = 0; i < images.length; i++) {
	var image = images[i];
	var img = document.createElement("img");
	img.src = image.getAttribute("href");
	img.alt = image.getAttribute("alt");
	image.appendChild(img);
}
