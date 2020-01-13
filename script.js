const links = document.querySelectorAll('nav > a');
const titleDiv = document.querySelector('footer span');
const howtoDiv = document.querySelector('.howto div');

let title = 'prog - followed';
let howto = 'bodyparts (1-4)<br>reset (r) save(s)';

titleDiv.innerHTML = title;
howtoDiv.innerHTML = howto;

for (let link of links) {
	link.addEventListener('click', () => {
		const sketchFileName = link.getAttribute('href');
		switch (sketchFileName) {
			case 'sketch1.html':
				title = 'prog - followed';
				howto = 'bodyparts (1-4)<br>reset (r) save(s)';
				break;
			case 'sketch2.html':
				title = 'prog - offset';
				howto =
					'click and drag to displace<br>parts of the image<br>change distance (n/m)<br>change size (arrow keys)<br>reset (r) save(s)';
				break;
			case 'sketch3.html':
				title = 'prog - shifted';
				howto =
					'click and drag to displace<br>parts of the image<br>change distance (left/right arrows)<br>change size (up/down arrows)<br>reset (r) save(s)';
				break;
			case 'sketch4.html':
				title = 'prog - fragmented';
				howto =
					'click and drag to displace<br>parts of the image<br>change distance (left/right arrows)<br>change size (up/down arrows)<br>reset (r) save(s)';
				break;
			case 'sketch5.html':
				title = 'prog - reduced';
				howto =
					'click and drag to displace<br>parts of the image<br>change distance (left/right arrows)<br>change size (up/down arrows)<br>reset (r) save(s)';
				break;
			case 'sketch6.html':
				title = 'prog - glitched';
				howto =
					'click and drag to displace<br>parts of the image<br>change size (arrow keys)<br>reset (r) save(s)';
				break;
			case 'sketch7.html':
				title = 'prog - drawed';
				howto =
					'click and drag to displace<br>parts of the image<br>change diameter (up/down arrows)<br>reset (r) save(s)';
				break;
			case 'sketch8.html':
				title = 'prog - moved';
				howto =
					'click and drag to displace<br>parts of the image<br>change size (arrow keys)<br>reset (r) save(s)';
				break;
			case 'sketch9.html':
				title = 'prog - scanned';
				howto = 'click and drag to displace<br>parts of the image<br>reset (r) save(s)';
				break;
		}

		titleDiv.innerHTML = title;
		howtoDiv.innerHTML = howto;
	});
}
