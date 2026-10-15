const header = document.querySelector(".header__wrapper");
const button = document.querySelector(".navigation__btn");
const mainElem = document.querySelector("main");
let isOpen = false;

const menuIcons = {
    openMenu: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 8h16M4 16h16"/>
        </svg>
    `,
    closeMenu: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
    `
}

// Menu navigation functionality.
header.addEventListener("click", (ev) => {
    const navButton = ev.target.closest(".navigation__btn");

    if (!navButton) return;

    isOpen = !isOpen;
    header.dataset.open = String(isOpen);
    button.innerHTML = isOpen ? menuIcons.closeMenu : menuIcons.openMenu;
    button.setAttribute("aria-label", `${isOpen ? "Close navigation" : "Open navigation"}`);
    button.setAttribute("aria-expanded", String(isOpen))
});

// Trial of count animation
function animateCounter(element, target, duration, index) {
    let startTime = null;

    function step(currentTime) {
        if (!startTime) startTime = currentTime;

        const progress = (currentTime - startTime) / duration;

        let currentNumber;

        if (index === 0 || index === 3) {
            currentNumber = (progress * target).toFixed(1);
        } else {
            currentNumber = Math.floor(progress * target);
        }

        element.textContent = currentNumber.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = target.toLocaleString();
        }

    }

    requestAnimationFrame(step);
}


// Load stats.
window.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("./data.json");
        
        if (!response.ok) {
            throw new Error("data problem");
        }

        const data = await response.json();
        data.forEach((stat, index) => {
            const createCard = document.createElement("section");
            createCard.classList.add("stats");
            createCard.setAttribute("tabindex", "0");
            let suffix;

            if (index === 0) {
                suffix = "M";
            } else if (index === 2) {
                suffix = "K";
            } else if (index === 3) {
                suffix = "&times;";
            } else {
                suffix = "";
            }

            createCard.innerHTML = `
                <div class="stats__heading">
                    <img src="${stat.icon}" alt="">
                    <h2><span class="stat-num">0</span>${suffix}</h2>
                </div>
                <div class="desc__wrapper">
                    <span class="stats-tag">${stat.statsTitle}</span>
                    <span class="stats-descr">${stat.statsDescr}${index === 3 ? "&times;" : ""}.</span>
                </div>
            `;
            mainElem.append(createCard);

            const numberElement = createCard.querySelector(".stat-num");
            animateCounter(numberElement, stat.size, 800, index);
        });
    } catch(err) {
        console.error("no data", err);
    }
})