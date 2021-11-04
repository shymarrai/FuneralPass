const chk = document.getElementById('chk');
var theme = localStorage.getItem('mode')
document.body.classList.add(theme);

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

	if(theme == 'light'){
		localStorage.setItem('mode', 'dark')
		chk.checked = true
	}else if(theme == 'dark'){
		localStorage.setItem('mode', 'light')
		chk.checked = false
	}
});