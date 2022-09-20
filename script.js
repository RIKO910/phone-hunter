const searchPhone =()=>{
    const searchField =document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value='';
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>disPlaySearchResult(data.data))
}

const disPlaySearchResult =data =>{
    const searchResult =document.getElementById('search-result');
   
    data.forEach(dat =>{
        // console.log(dat);
        const div =document.createElement('div');
        div.classList.add('col')
        div.innerHTML=`
        <div onclick="loadDataDetail ()" class="card">
                    <img src="${dat.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${dat.phone_name}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
        
        `
        searchResult.appendChild(div);
    })   
}

const loadDataDetail =id =>{
    const url =`
    https://openapi.programming-hero.com/api/phone/${id}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayDataDetail (data.data[0]))

}

const displayDataDetail =phone =>{
    console.log(phone)

    const displaySingle = document.getElementsByClassName('single-phone');
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML=`
    <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${[phone].phone_name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    displaySingle.appendChild(div);

}