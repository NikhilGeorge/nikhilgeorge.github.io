(function () {
	var root = document.documentElement;
	var toggle = document.querySelector('.theme-toggle');

	function currentTheme() {
		var set = root.getAttribute('data-theme');
		if (set) return set;
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	if (toggle) {
		toggle.addEventListener('click', function () {
			var next = currentTheme() === 'dark' ? 'light' : 'dark';
			root.setAttribute('data-theme', next);
			try { localStorage.setItem('theme', next); } catch (e) {}
		});
	}

	var header = document.querySelector('.site-header');
	if (header) {
		var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
	}

	var year =document.getElementById('year');
	if (year) year.textContent = new Date().getFullYear();
})();
