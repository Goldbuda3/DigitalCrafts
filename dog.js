async function fetchAllBreeds(){
    element.value ="Generating Breeds..";
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let responseObject = await response.json();
    console.log(responseObject);
    renderDoggo(responseObject);
    let content = renderDoggo(responseObject);
    element.value = "Fetch All Breeds...";
    console.log(breeds);
}

async function fetchDoggo(element){
    element.value ="Generating Doggo...";
    console.log(event)
    console.log("I'm Here");
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let responseObject = await response.json();
    console.log(responseObject);
    renderDoggo(responseObject);
    let content = renderDoggo(responseObject);

    // += to add pictures
    // = to replace pictures
    document.getElementById("content").innerHTML += content;
    element.value = "Fetch Doggo...";
}

function renderDoggo(responseObject){
        return `
        <img src= "${responseObject.message}" style="max-width:300px; max-height:300px"/>

        `
}
    // console.log(JSON.stringify(responseObject));
    // console.log(responseObject.message);
    // console.log(responseObject.status);

    // //display image from responseObject.message INSIDE the "content" ID//
    // document.getElementById("content").innerHTML = `<img src= "${responseObject.message}"/>`


