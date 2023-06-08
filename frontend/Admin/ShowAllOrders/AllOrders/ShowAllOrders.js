async function AllOrders(){
    
    




    let url = 'http://127.0.0.1:3000/Orders'
   const response = await fetch(url);
   response.json().then(function(data) {  
    // console.log( Object.keys(data).length);
    // console.log(data);
     
    const display= document.getElementById("list");
  
    let dataDisplay = data.map((object) => {
      console.log(object)
      const {secName, name, mail, kod, model, status} = object;
      let stat = '';
      if(status===true){
        stat = "Заказ обработан";
      }else{
        stat = "Заказ требует подтверждения";
      }
  
      return `
        <div class = "container">
          <p>Фамилия: ${secName}</p>
          <p>Имя: ${name}</p>
          <p>mail: ${mail}</p>
          <p>Код товара: ${kod}</p>
          <p>Модель: ${model}</p>
          <p>Статус заказа: ${stat}</p>
        </div>`;
  
    }).join("")
    console.log(dataDisplay);
  
    display.innerHTML = dataDisplay;
    
  
  }); 
   
   
   
  } 
  
  
  
  
  
  AllOrders();