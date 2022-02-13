/* logo link 786px */
logotxt = document.getElementById('logotxt');
logonav = document.getElementById('logonav');
backhome = document.getElementById('backhome');
logotxt.addEventListener('mouseover', function() {
	media = window.matchMedia("(max-width: 768px)");
	if (media.matches) {
		logotxt.style.opacity = "1";
	}
	else {
		logotxt.style.opacity = "0";
	}
	logonav.style.left = "0";
})
backhome.addEventListener('mouseleave', function() {
	logotxt.style.opacity = "1";
	logonav.style.left = "-100px";
})

/* bolacha */
function setCookie(cname, cvalue, exsec) {
	const d = new Date();
	d.setTime(d.getTime() + (exsec * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

if (!document.cookie) {
	setCookie('pvisita', 0, 20);
}

/* mobile maozinha */
mao = document.getElementById('mao');
let pvisita = getCookie("pvisita");
if (pvisita == 1) {
	mao.style.visibility = 'hidden';
} else if (pvisita == 0) {
	mao.style.visibility = 'visible';
}

function maoo() {
	setCookie('pvisita', 1, 365);
	mao.style.visibility = 'hidden';
}
document.getElementById('guias').addEventListener('scroll', maoo);
window.addEventListener('scroll', maoo);

/* home info */
media = window.matchMedia('(max-width: 786px)');
p = document.getElementById('infop');
if (media.matches) {
	p.innerHTML = "Para selecionar um projeto, vá até o <b>Menu</b> e arraste pro lado para ver todas as opções."
}

/* butao ripple */
"use strict";
[].map.call(document.querySelectorAll('[anim="ripple"]'), el => {
	el.addEventListener('click', e => {
		e = e.touches ? e.touches[0] : e;
		const r = el.getBoundingClientRect(),
			d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
		el.style.cssText = `--s: 0; --o: 1;`;
		el.offsetTop;
		el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`;
	});
});

/* aaaa */
