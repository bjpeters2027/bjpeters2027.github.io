const themeToggle = document.getElementById('theme-toggle');
const themeLabel = themeToggle.querySelector('.theme-label');
const themeStatus = document.getElementById('theme-status');
const themeColor = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
    const isLight = theme === 'light';
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Use dark theme' : 'Use light theme');
    themeLabel.textContent = isLight ? 'Dark' : 'Light';
    themeColor.setAttribute('content', isLight ? '#f5f7f4' : '#101416');
}

try {
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme === 'light' ? 'light' : 'dark');
} catch (error) {
    console.warn('Unable to read the saved theme preference.', error);
    themeStatus.textContent = 'Your browser is blocking saved preferences. Theme changes will apply to this page only.';
}

themeToggle.hidden = false;
themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(theme);
    try {
        localStorage.setItem('theme', theme);
    } catch (error) {
        console.warn('Unable to save the theme preference.', error);
        themeStatus.textContent = 'The theme changed, but your browser could not save the preference.';
    }
});

document.getElementById('year').textContent = String(new Date().getFullYear());
