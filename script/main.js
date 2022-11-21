const humburgur = document.querySelector(".humberger__btn")
humburgur.onclick = function () {
	navBar = document.querySelector(".navbar__link")
	navBar.classList.toggle("show")
}

function goTentang() {
	document.getElementById("tentang").scrollIntoView()
}
function goAturan() {
	document.getElementById("aturan").scrollIntoView()
}
function goMembeli() {
	document.getElementById("membeli").scrollIntoView()
}
function goHome() {
	document.getElementById("home").scrollIntoView()
}

const Among = document.getElementById("modalDetailAmongUs")
const Warni = document.getElementById("modalDetailWarni")
const Warna = document.getElementById("modalDetailWarna")
const spanAmong = document.getElementsByClassName("closeAmong")[0]
const spanWarna = document.getElementsByClassName("closeWarna")[0]
const spanWarni = document.getElementsByClassName("closeWarni")[0]

function goDetailAmongUs() {
	Among.style.display = "block"
}
spanAmong.onclick = function () {
	Among.style.display = "none"
}
window.onclick = function (event) {
	if (event.target == Among) {
		Among.style.display = "none"
	}
}

function goDetailWarna() {
	Warna.style.display = "block"
}
spanWarna.onclick = function () {
	Warna.style.display = "none"
}
window.onclick = function (event) {
	if (event.target == Warna) {
		Warna.style.display = "none"
	}
}

function goDetailWarni() {
	Warni.style.display = "block"
}
spanWarni.onclick = function () {
	Warni.style.display = "none"
}
window.onclick = function (event) {
	if (event.target == Warni) {
		Warni.style.display = "none"
	}
}
