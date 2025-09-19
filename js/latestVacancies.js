function latestVacancies () { 
    
    const resentJobCards = document.getElementById("jobs-cards-resent");
    const jsonURL = "http://localhost:5000/vacancies";

    fetch(jsonURL).then(x=>x.json()).then(data=>{
        
        const variable = data.slice(-21);

        variable.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("job-card");
            card.innerHTML = `
                <a href="#" class="job-position">${item.title}</a>
                <span class="job-salary">${item.salary || '—'}</span>
                <a href="#" class="job-company">${item.company}</a>
            `;
            resentJobCards.appendChild(card);
        });

    });
}


window.addEventListener("DOMContentLoaded", () => {
  latestVacancies();
});