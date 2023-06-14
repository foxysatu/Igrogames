async function ShowCard(){

  let params = (new URL(document.location)).searchParams.get("kod");
  


  let url = 'http://127.0.0.1:3000/uploadphoto/'+params;
 const response = await fetch(url);
 response.json().then(function(data) {  

  console.log(data);
   
  const display= document.getElementById("list");

  let dataDisplay = data.map((object) =>{

    const {dataFile, name, kod, description, screen, inch, price} = object;
    return `
      <div class = "container">
        <img src="http://127.0.0.1:3000/${dataFile}" width="700" height="600">
        <p>Игра: ${name}</p>
        <p>Цена: ${price} Руб</p>
      </div>
      <button onclick="location.href='../Order/Order.html?kod=${kod}&model=${name}'">Купить</button>
      
      `;
  })
  display.innerHTML = dataDisplay;

  

}); 
 
} 
ShowCard();