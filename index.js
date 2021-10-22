

const url = 'http://localhost:8000/api/companies'

const fetchAsync = async () => {

    let response = await fetch(url);
    let data = await response.json();

    const companies = data


    const hmtlTitleArea = document.querySelector('.container__main')
    const htmlOutput = companies.result.map(singleCompany => {

        return renderCompany(singleCompany)
    })

    hmtlTitleArea.innerHTML = htmlOutput.join('');
}
fetchAsync()

function renderCompany(singleCompany) {

    return `
    <div class="col l-3 card__margin">
    <div class="card" style="width: 18rem;">
        <h3 class="heading-card">${singleCompany.name}</h3>
        <div class="container__img">
            <img src="./assets/img/Natsume-Yuujinchou-Anime-Character-Designs-Takashi-Natsume (1).jpg"
                alt="" class="img-company">
        </div>
        <h4 class="heading-card-sub">Job recruitment</h4>
        <span class="quantity">${singleCompany.numOfRatings}</span> 
        <div class="card-body">
            <p class="card-text text__limit">${singleCompany.description}</p>
        </div>
    </div>
</div>
    `

}
renderCompany()

// search company

const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-btn");

const handleSearch = (e) => {
    //Using sever rendering option
    e.preventDefault();
    //capture search value
    const titleQuery = searchBox.value;
    console.log(titleQuery);
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            const hmtlTitleArea = document.querySelector('.container__main')

            const newData = data.result.filter((e) => e.name === titleQuery);
            const listOfCardHTML = newData.map((value) => {
                return `
                <div class="col l-3 c-12 m-6 card__margin">
                <div class="card" style="width: 18rem;">
                    <h3 class="heading-card">${value.name}</h3>
                    <div class="container__img">
                        <img src="./assets/img/Natsume-Yuujinchou-Anime-Character-Designs-Takashi-Natsume (1).jpg"
                            alt="" class="img-company">
                    </div>
                    <h4 class="heading-card-sub">Job recruitment</h4>
                    <span class="quantity">${value.numOfRatings}</span> 
                    <div class="card-body">
                        <p class="card-text text__limit">${value.description}</p>
                    </div>
                </div>
            </div>`
            });
            hmtlTitleArea.innerHTML = listOfCardHTML.join("");
        })



};
searchButton.addEventListener("click", handleSearch);