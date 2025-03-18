
const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const html = document.documentElement;
        if (html.getAttribute('data-theme') === 'dark') {
            html.setAttribute('data-theme', 'light');
            themeBtn.textContent = 'Тёмная тема';
        } else {
            html.setAttribute('data-theme', 'dark');
            themeBtn.textContent = 'Светлая тема';
        }
    });
} else {
    console.error('Кнопка темы не найдена!');
}

const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        document.querySelectorAll('section').forEach(section => {
            if (value === '') {
                section.style.display = 'block';
            } else {
                const text = section.textContent.toLowerCase();
                section.style.display = text.includes(value) ? 'block' : 'none';
            }
        });
    });
} else {
    console.error('Поле поиска не найдено!');
}

document.querySelectorAll('.run-code').forEach(button => {
    button.addEventListener('click', () => {
        const code = button.getAttribute('data-code');
        if (code) {
            try {
                eval(code);
                console.log('Код выполнен, проверь консоль!');
            } catch (error) {
                console.error('Ошибка в коде:', error.message);
            }
        } else {
            console.warn('Код для выполнения не указан!');
        }
    });
});
