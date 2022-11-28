/** @format */

gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
	link.addEventListener("click", () => {
		gsap.to(links, { color: "" });
		if (document.activeElement === link) {
			gsap.to(link, { color: "#00f0ff" });
		}

		const state = Flip.getState(activeNav);
		link.appendChild(activeNav);
		Flip.from(state, {
			duration: 1.2,
			absolute: true,
			ease: "elastic.out(1,0.5)",
		});
	});
});

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
	card.addEventListener("click", () => {
		const state = Flip.getState(cards);
		const isCardActive = card.classList.contains("active");
		cards.forEach((otherCard, otherIndex) => 
		{
			otherCard.classList.remove("active");
			otherCard.classList.remove("is-inactive");
			if(!isCardActive && index !== otherIndex){
				otherCard.classList.add("is-active");
			} 
		});
		if(!isCardActive) card.classList.add("active");
		Flip.from(state, {
			duration: 1,
			ease: "elastic.out(1,0.5)", //"expo.out",
			absolute: true,
		})

	});
});
