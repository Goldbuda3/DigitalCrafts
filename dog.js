async function fetchAllBreeds(){
    let response = await fetch('https://dog.ceo/api/breeds/list/all');
    let responseObject = await response.json();
    console.log(responseObject);
    let content = dropdownContent(responseObject);
    document.getElementById('drop-down').innerHTML = content;
  }
  function dropdownContent(responseObject){
    
    //code here//
    let allBreeds = Object.keys(responseObject.message)
    console.log(allBreeds);
    console.log(allBreeds[0]);
    let dropDown = '<select id="breed-dropdown">';
      /// my logic for drop down options 
      for(var i = 0; i < allBreeds.length ; i++){
        dropDown += `<option value="${allBreeds[i]}">${allBreeds[i]}</options>`;
       }
      
    dropDown += '</select>';
    return dropDown;
  }
  async function fetchDoggo(element) {
    element.value = "Generating doggo...";

    let dropdownBreed = document.getElementById('breed-dropdown')
    console.log(dropdownBreed); 

    if(dropdownBreed == null){
        var response = await fetch('https://dog.ceo/api/breeds/image/random');
    }else{
        selectedbreed = dropdownBreed.selectedOptions[0].value;
        var response = await fetch('https://dog.ceo/api/breed/' + selectedbreed +'/images/random');
    }

    let responseObject = await response.json();
    console.log(responseObject);
    let content = renderDoggo(responseObject);
    document.getElementById("content").innerHTML += content;
    element.value = "Fetch Doggo...";
  }
  function renderDoggo(responseObject) {
    return `<img src="${responseObject.message}" style="max-width:300px;"/>`
  }
    // console.log(JSON.stringify(responseObject));
    // console.log(responseObject.message);
    // console.log(responseObject.status);

    // //display image from responseObject.message INSIDE the "content" ID//
    // document.getElementById("content").innerHTML = `<img src= "${responseObject.message}"/>`


