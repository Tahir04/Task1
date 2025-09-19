document.addEventListener("DOMContentLoaded", () => {
    
    // Search Button
    const category = document.getElementById("category");
    const city = document.getElementById("city");
    const salary = document.getElementById("salary");
    const education = document.getElementById("education");
    const experience = document.getElementById("experience");
    const searchInput = document.getElementById("search");
    const searchBtn = document.getElementById("searchBTN");

    searchBtn.addEventListener("click", () => {
        const params = new URLSearchParams();

        if(category.value) params.append("category", category.value);
        if(city.value) params.append("city", city.value);
        if(salary.value) params.append("salary_gte", salary.value);
        if(education.value) params.append("education", education.value);
        if(experience.value) params.append("experience", experience.value);
        if(searchInput.value) params.append("q", searchInput.value);

        const finalUrl = "vacanciesfilter.html?" + params.toString();
        window.location.href = finalUrl;
    });

    // ------------------------------------------------------------------------------------------


    // Fetch data
    const params = new URLSearchParams(window.location.search);
    const url = "http://localhost:5000/vacancies?" + params.toString();

    fetch(url)
        .then(x => x.json())
        .then(data => {
            const container = document.querySelector(".result-cards-cont");
            const rstP = document.getElementById("rst-p");
            container.innerHTML = "";

            if (!data.length) {
                rstP.textContent = "Nəticə tapılmadı";
                return;
            }

            rstP.textContent = `${data.length} İŞ ELANI`;

            data.forEach(job => {
                const card = document.createElement("a");
                card.href = "#";
                card.className = "result-card";
                card.innerHTML = `
                    <h2 class="result-card-title">${job.title}</h2>
                    <p class="result-card-company">${job.company}</p>
                    <div class="result-card-btns">
                        <div class="result-card-salary">${job.salary} AZN</div>
                        <div class="result-card-info">Ətraflı</div>
                    </div>
                    <p class="result-card-description">${job.description}</p>
                    <div class="result-card-bottom">
                        <p class="result-card-city">${job.city}</p>
                        <div class="circle"></div>
                        <p class="result-card-category">${job.category}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        })
});
