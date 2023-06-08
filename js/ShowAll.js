async function ShowAll() {
  let url = 'http://127.0.0.1:3000/uploadphoto/';
  const response = await fetch(url);
  response.json().then(function (data) {
    console.log(data);

    const display = document.getElementById("list");

    let dataDisplay = data.map((object) => {
      const { dataFile, name, kod, inch, screen, price } = object;
      return `
        <div class="col-lg-3 col-md-4 col-sm-6 mix ${object.category}" onclick="location.href='./frontend/ShowCard/ShowCard.html?kod=${kod}'">
          <div class="product__item">
            <div class="product__item__pic set-bg">
            <img src="http://127.0.0.1:3000/${dataFile}" width=262.5 height=360 />
            </div>
            <div class="product__item__text">
              <h6><a href="#">${name}</a></h6>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="product__price">${price} ₽</div>
            </div>
          </div>
        </div>`;
    }).join("");
    display.innerHTML = `<div class="row property__gallery">${dataDisplay}</div>`;
  });
}



  // async function ShowFilter(){
  //   const inch = document.getElementById("inch-select").value;
  //   const screen = document.getElementById("screen").value;
  //   console.log(inch);

  //   let url = `http://127.0.0.1:3000/uploadphoto/?inch=${inch}&screen=${screen}`
  //  const response = await fetch(url);
  //  response.json().then(function(data) {  
    
  //   console.log(data);
     
  //   const display= document.getElementById("list");
  
  //   let dataDisplay = data.map((object) =>{
  
  //     const {dataFile, name, kod, inch, screen, price} = object;
  //     console.log(object);
  //     return `
  //       <div class = "container" onclick="location.href='../ShowCard/ShowCard.html?kod=${kod}'">
  //         <img src="http://127.0.0.1:3000/${dataFile}" width="200" height="100">
  //         <p>Модель: ${name}</p>
  //         <p>Диагональ экрана: ${inch}</p>
  //         <p>Разрешение экрана: ${screen}</p>
  //         <p>Код товара: ${kod}</p>
  //         <p>Цена: ${price} Руб</p>
          
  //       </div>`;
  //   }).join("");
  //   display.innerHTML = dataDisplay;
  
    
  
  // }); 
   
  // } 
  ShowAll();

  // document.getElementById("filter-btn").addEventListener('click', () => {
    
  //   if((document.getElementById("screen").value).length === 0 && (document.getElementById("inch-select").value).length===0){
  //     ShowAll();
  //     console.log("Работает");
  //   }else{
  //     ShowFilter();
  //   }
    
  // })

