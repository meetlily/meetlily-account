'use client';
import { DarkThemeToggle } from 'flowbite-react';
import { useEffect } from 'react';

function ThemeToggle() {
	useEffect(() => {
		const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
		const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
		const themeToggleBtn = document.getElementById('theme-toggle');

		// Change the icons inside the button based on previous settings
		if (
			localStorage.getItem('color-theme') === 'dark' ||
			(!('color-theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: light)').matches)
		) {
			themeToggleLightIcon?.classList.remove('hidden');
		} else {
			themeToggleDarkIcon?.classList.remove('hidden');
		}

		const toggleTheme = () => {
			// Toggle icons inside button
			themeToggleDarkIcon?.classList.toggle('hidden');
			themeToggleLightIcon?.classList.toggle('hidden');

			// Check if theme is set via local storage previously
			if (localStorage.getItem('color-theme')) {
				if (localStorage.getItem('color-theme') === 'light') {
					document.documentElement.classList.add('dark');
					localStorage.setItem('color-theme', 'dark');
				} else {
					document.documentElement.classList.remove('dark');
					localStorage.setItem('color-theme', 'light');
				}
			} else {
				// If theme is NOT set via local storage previously
				if (document.documentElement.classList.contains('light')) {
					document.documentElement.classList.remove('light');
				} else {
					document.documentElement.classList.add('dark');
					localStorage.setItem('color-theme', 'dark');
				}
			}
		};

		// Add click event listener to the theme toggle button
		themeToggleBtn?.addEventListener('click', toggleTheme);

		// Clean up event listener when the component unmounts
		return () => {
			themeToggleBtn?.removeEventListener('click', toggleTheme);
		};
	}, []);

	return <DarkThemeToggle className="z-40 hover:cursor-pointer" />;
}

export default ThemeToggle;
