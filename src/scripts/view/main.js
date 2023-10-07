// import "../../public/data/DATA.json";
import "../component/card-resto.js";
import data from "../../public/data/DATA.json";

const main = () => {
	const openNavbar = () => {
		const humburger = document.querySelector(".btn-humburger");
		const navbar = document.querySelector(".header__navbar");
		const btnClose = document.querySelector(".btn-x-navbar");
		humburger.addEventListener("click", function () {
			navbar.classList.add("active-navbar");
			humburger.classList.add("active-navbar");
			btnClose.classList.add("active-navbar");
		});

		btnClose.addEventListener("click", function () {
			navbar.classList.remove("active-navbar");
			humburger.classList.remove("active-navbar");
			btnClose.classList.remove("active-navbar");
		});
	};

	const scrollNavbar = () => {
		const header = document.querySelector(".header");
		window.onscroll = () => {
			if (window.scrollY > 50) {
				header.classList.add("bg-nav-active");
			} else {
				header.classList.remove("bg-nav-active");
			}
		};
	};

	const renderResto = (totalRender = 3) => {
		const wrapperCard = document.querySelector(".resto-populer__wrapper-card");
		const dataResto = data.restaurants;
		for (let i = 0; i < totalRender; i++) {
			const cardResto = document.createElement("card-resto");
			cardResto.cardData = dataResto[i];
			wrapperCard.appendChild(cardResto);
		}
	};

	const renderAllCard = () => {
		const wrapperCard = document.querySelector(".resto-populer__wrapper-card");
		const btnViewAll = document.querySelector(".resto-populer__btn-view");
		let btnActive = 0;
		btnViewAll.addEventListener("click", () => {
			if (btnActive === 0) {
				wrapperCard.innerHTML = "";
				renderResto(data.restaurants.length);
				btnViewAll.textContent = "Lebih Sedikit";
				btnViewAll.title = "Klik untuk dapat melihat lebih sedikit";
				btnActive--;
			} else {
				wrapperCard.innerHTML = "";
				renderResto();
				btnViewAll.textContent = "Lihat Semua";
				btnViewAll.title = "Klik untuk dapat melihat semua";
				btnActive++;
			}
		});
	};

	const renderFotoGallery = () => {
		const galeriImg = document.querySelectorAll(".galeri-resto__img");
		const overlayTitle = document.querySelectorAll(".overlay-img__nama-resto");
		const dataResto = data.restaurants;
		for (let i = 0; i < 6; i++) {
			galeriImg[i].src = dataResto[i].pictureId;
			galeriImg[i].alt = `Foto galeri resto ${dataResto[i].name}`;
			overlayTitle[i].innerText = dataResto[i].name;
		}
	};

	renderResto();
	scrollNavbar();
	openNavbar();
	renderAllCard();
	renderFotoGallery();
};

export default main;
