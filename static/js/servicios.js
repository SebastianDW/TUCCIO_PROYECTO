document.addEventListener('DOMContentLoaded', function () {
    fetch('/static/json_files/servicios.json')  // Ruta al archivo JSON en Flask
        .then(response => response.json())
        .then(data => {
            const navMenu = document.getElementById('nav-menu');
            data.menu.forEach(item => {
                const navItem = document.createElement('li');
                navItem.className = 'nav-item';

                const navLink = document.createElement('a');
                navLink.href = '#';
                navLink.textContent = item.title;
                navItem.appendChild(navLink);

                if (item.subMenu && item.subMenu.length > 0) {
                    const subMenu = document.createElement('ul');
                    subMenu.className = 'sub-menu';
                    item.subMenu.forEach(subItem => {
                        const subMenuItem = document.createElement('li');

                        const subMenuLink = document.createElement('a');
                        subMenuLink.href = '#';
                        subMenuLink.textContent = subItem.title;
                        subMenuItem.appendChild(subMenuLink);

                        subMenu.appendChild(subMenuItem);
                    });
                    navItem.appendChild(subMenu);
                }

                navLink.addEventListener('click', function (event) {
                    event.preventDefault();

                    // Ocultar todos los submenús excepto el clicado
                    document.querySelectorAll('.nav-item').forEach(item => {
                        if (item !== navItem) {
                            item.classList.remove('active');
                        }
                    });

                    // Alternar visibilidad del submenú clicado
                    navItem.classList.toggle('active');
                });

                navMenu.appendChild(navItem);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
