let img = document.querySelector('#sub-form img');
let mob = document.querySelector('#sub-form #mob');
let desk = document.querySelector('#sub-form #desk');

if(screen.width >= 1440)
{
	desk.removeAttribute('style');
	mob.setAttribute('style', 'display:none');
	img.setAttribute('src', './assets/images/illustration-sign-up-desktop.svg');
	img.setAttribute('alt', 'Desktop design');
	document.querySelector('main').setAttribute('style', 'height:' + (screen.height - 189) +'px');
}
else if((screen.width >= 375) && (screen.width < 1440))
{
	let success = document.getElementById('success-panel');

	desk.setAttribute('style', 'display:none');
	mob.removeAttribute('style');
	img.setAttribute('src', './assets/images/illustration-sign-up-mobile.svg');
	img.setAttribute('alt', 'Mobile design');
	success.setAttribute('style', success.getAttribute('style') + ';height:' + (screen.height - 120) +'px');
}

function subEmail()
{
	let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;

	let sub = document.getElementById('sub-form');
	let inp = sub.querySelector('input');
	let success = document.getElementById('success-panel');

	if(inp.value.match(validRegex))
	{
		if(inp.classList.contains('invalid'))
		{
			if(inp.classList.length == 1)
				inp.removeAttribute('class');
			else
				inp.classList.remove('invalid');
		}

		sub.querySelector('#heading #valid-heading').setAttribute('style', 'display:none');
		sub.setAttribute('style', 'display:none');

		if(screen.width >= 1440)
			success.removeAttribute('style');
		else if((screen.width >= 375) && (screen.width < 1440))
			success.setAttribute('style', 'height:' + (screen.height - 120) + 'px');
	}
	else
	{
		inp.classList.add('invalid');
		sub.querySelector('#heading #valid-heading').removeAttribute('style');
	}
}

function disMsg()
{
	let success = document.getElementById('success-panel');

	document.getElementById('sub-form').removeAttribute('style');
	if(!success.hasAttribute('style'))
		success.setAttribute('style', 'display:none');
	else
		success.setAttribute('style', success.getAttribute('style') + ';display:none');
}
