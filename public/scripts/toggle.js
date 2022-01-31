const chk = document.getElementById('chk');
const form = document.querySelector('form');
const img = document.querySelector('img.logoHeader');

var theme = localStorage.getItem('mode')
document.body.classList.add(theme);
form.classList.add(theme);


if (!theme) {
	localStorage.setItem('mode', 'light')
	theme = 'light'
	chk.checked = false
}

if(theme == 'dark'){
	chk.checked = true
}

chk.addEventListener('change', () => {
	var theme = localStorage.getItem('mode')
	document.body.classList.toggle('dark');
	form.classList.toggle('dark');

	if(theme == 'light'){
		
		localStorage.setItem('mode', 'dark')
		chk.checked = true
		img.src = "/assets/Logos/logoLight.png"

	}else if(theme == 'dark'){

		localStorage.setItem('mode', 'light')
		chk.checked = false
		img.src = "/assets/Logos/logoDark.png"
	}
});