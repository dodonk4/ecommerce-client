


window.onload = function() {
    const cardTitles = document.getElementsByClassName('cardTitle');

    console.log(cardTitles);

    console.log(cardTitles.length)

    console.log(cardTitles);


    for (let i = 0; i < cardTitles.length; i++) {
        console.log(cardTitles[i]);
        
    }
};


// const cardTitlesArray = Array.from(cardTitles);

// console.log(cardTitlesArray);

// cardTitlesArray.forEach(cardTitle => {

//     console.log("Hello")
//     if(cardTitle.width > 30){
//         cardTitle.style.fontSize = '16px';
//     }

//     console.log(cardTitle.style.fontSize);

// });