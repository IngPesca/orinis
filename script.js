document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil simple
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            
            // Animación simple de las líneas de la hamburguesa
            burger.classList.toggle('toggle');
        });
    }

    // Pequeño CSS dinámico inyectado para el menú móvil
    const style = document.createElement('style');
    style.innerHTML = `
        @media screen and (max-width: 768px) {
            .nav-links.nav-active {
                display: flex;
                flex-direction: column;
                position: absolute;
                right: 0px;
                top: 70px;
                background-color: #FFFFFF;
                width: 100%;
                text-align: center;
                padding: 20px 0;
                box-shadow: 0 10px 10px rgba(0,0,0,0.1);
            }
            .nav-links.nav-active li {
                margin: 15px 0;
            }
            .burger {
                display: block;
                cursor: pointer;
            }
            .burger div {
                width: 25px;
                height: 3px;
                background-color: #333;
                margin: 5px;
                transition: all 0.3s ease;
            }
        }
        @media screen and (min-width: 769px) {
            .burger { display: none; }
        }
    `;
    document.head.appendChild(style);
});
