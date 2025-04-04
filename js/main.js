// Переключение темы
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(isLight) {
    if (isLight) {
        body.classList.add('light-theme');
        themeToggle.textContent = 'Темная тема';
    } else {
        body.classList.remove('light-theme');
        themeToggle.textContent = 'Светлая тема';
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

themeToggle.addEventListener('click', () => {
    setTheme(!body.classList.contains('light-theme'));
});

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'light');

// Прогресс-бар
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = `${scrollPercent}%`;
});

// Кнопка "Наверх"
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Скрытие/показ кода
document.querySelectorAll('.toggle-code').forEach(button => {
    button.addEventListener('click', () => {
        const pre = button.previousElementSibling.previousElementSibling;
        pre.style.display = pre.style.display === 'none' ? 'block' : 'none';
        button.textContent = pre.style.display === 'none' ? 'Показать код' : 'Скрыть код';
    });
});

// Копирование кода
document.querySelectorAll('.copy-code').forEach(button => {
    button.addEventListener('click', () => {
        const code = button.previousElementSibling.previousElementSibling.querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            button.textContent = 'Скопировано!';
            setTimeout(() => button.textContent = 'Скопировать', 2000);
        });
    });
});

// Выполнение кода из редактора
document.querySelectorAll('.run-code').forEach(button => {
    button.addEventListener('click', () => {
        const textarea = button.previousElementSibling;
        const result = button.nextElementSibling;
        result.innerHTML = '';

        const originalConsoleLog = console.log;
        const logs = [];

        console.log = (...args) => {
            logs.push(args.join(' '));
            originalConsoleLog.apply(console, args);
        };

        try {
            eval(textarea.value);
            logs.forEach(log => {
                const p = document.createElement('p');
                p.textContent = log;
                result.appendChild(p);
            });
        } catch (error) {
            const p = document.createElement('p');
            p.textContent = `Ошибка: ${error.message}`;
            p.style.color = '#ff5555';
            result.appendChild(p);
        }

        console.log = originalConsoleLog;
    });
});

// Анимация появления секций
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Демонстрация методов массивов
let demoArray = [1, 2, 3, 4, 5];

function renderArray() {
    const container = document.getElementById('array-demo');
    container.innerHTML = '';
    demoArray.forEach(item => {
        const div = document.createElement('div');
        div.className = 'array-element';
        div.textContent = item;
        container.appendChild(div);
    });
}

function demoPush() {
    demoArray.push(demoArray.length + 1);
    renderArray();
    document.getElementById('demo-result').textContent = 'Добавлен новый элемент!';
}

function demoPop() {
    const popped = demoArray.pop();
    renderArray();
    document.getElementById('demo-result').textContent = `Удален элемент: ${popped}`;
}

function demoMap() {
    const mapped = demoArray.map(x => x * 2);
    renderArray();
    document.getElementById('demo-result').textContent = `Новый массив: ${mapped.join(', ')} (исходный не изменен)`;
}

function demoFilter() {
    const filtered = demoArray.filter(x => x % 2 === 0);
    renderArray();
    document.getElementById('demo-result').textContent = `Отфильтрованы четные: ${filtered.join(', ')} (исходный не изменен)`;
}

function demoReduce() {
    const reduced = demoArray.reduce((sum, x) => sum + x, 0);
    renderArray();
    document.getElementById('demo-result').textContent = `Сумма элементов: ${reduced} (исходный не изменен)`;
}

renderArray();