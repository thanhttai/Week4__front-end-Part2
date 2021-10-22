

const url = 'http://localhost:8000/api/companies'

const fetchAsync = async () => {

    let response = await fetch(url);
    let data = await response.json();

    const companies = data
    console.log(companies);

    const hmtlTitleArea = document.querySelector('.container__main')
    const htmlOutput = companies.result.map(singleCompany => {
        return renderCompany(singleCompany)
    })

    hmtlTitleArea.innerHTML = htmlOutput.join('');
}
fetchAsync()

function renderCompany(singleCompany) {
    console.log(singleCompany.numOfRatings);
    return `
    <div class="col l-3">
    <div class="card" style="width: 18rem;">
        <h3 class="heading-card">${singleCompany.name}</h3>
        <div class="container__img">
            <img src="./assets/img/Natsume-Yuujinchou-Anime-Character-Designs-Takashi-Natsume (1).jpg"
                alt="" class="img-company">
        </div>
        <h4 class="heading-card-sub">Job recruitment</h4>
        <span class="quantity">${singleCompany.numOfRatings}</span> 
        <div class="card-body">
            <p class="card-text">${singleCompany.description}</p>
        </div>
    </div>
</div>
    `

}
renderCompany()