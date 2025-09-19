function premiumVacancies() {

    const jsonURL = "http://localhost:5000/vacancies";
    const premiumJobCards = document.getElementById("job-cards-premium");

    fetch(jsonURL).then(data=>data.json()).then(data => {
        const variable = data.filter(x=>x.premium === true);

        variable.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("job-card");
            card.innerHTML = `
                <a href="#" class="job-position">${item.title}</a>
                <span class="job-salary">${item.salary || '—'}</span>
                <a href="#" class="job-company">${item.company}</a>
            `;
        premiumJobCards.appendChild(card);
        });
    });
}


window.addEventListener("DOMContentLoaded", () => {
    premiumVacancies();
});