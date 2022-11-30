/** @format */

// const canvas = document.querySelector(".canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const context = canvas.getContext("2d");
// const frameCount = 12;

// const currentFrame = (index) => `Captures/${(index + 1).toString()}.PNG`;
// const pic = [];
// let ball = { frame: 0 };

// for (let i = 0; i < frameCount; i++) {
// 	const img = new Image();
// 	img.src = currentFrame(i);

// 	pic.push(img);
// }

// gsap.to(ball, {
// 	frame: frameCount - 1,
// 	snap: "frame",
// 	ease: "none",
// 	scrollTrigger: { scrub: true, pin: "canvas", end: "0.10%" },
// 	onUpdate: render,
// });
// gsap.fromTo(
// 	".ball-text",
// 	{ opacity: 0 },
// 	{ opacity: 1, scrollTrigger: { scrub: true, start: "0%", end: "100%" }, onComplete: () => { gsap.to(".ball-text", { opacity: 0 })}  },
// );

// pic[0].onload = render;

// function render() {
// 	context.canvas.width = pic[0].width;
// 	context.canvas.height = pic[0].height;
// 	context.clearRect(0, 0, canvas.width, canvas.height);
// 	context.drawImage(pic[ball.frame], 0, 0);
// }

// nav
// gsap.registerPlugin(Flip);

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
