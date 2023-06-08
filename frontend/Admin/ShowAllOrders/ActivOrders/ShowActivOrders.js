async function ActivOrders(){
    
    




    let url = 'http://127.0.0.1:3000/Orders'
   const response = await fetch(url);
   response.json().then(function(data) {  
    // console.log( Object.keys(data).length);
    // console.log(data);
     
    const display= document.getElementById("list");
  
    let dataDisplay = data.map((object) => {
      console.log(object)
      const {secName, name, mail, kod, model, status, _id} = object;
      
      if(status===false){
        return `
        <div class = "container">
          <p>Фамилия: ${secName}</p>
          <p>Имя: ${name}</p>
          <p>mail: ${mail}</p>
          <p>Код товара: ${kod}</p>
          <p>Модель: ${model}</p>
          
          <button onclick="ChangeStatus('${_id}')">Подтвердить</button>
        </div>`;
      
    }

  
      
  
    }).join("")
    
  
    display.innerHTML = dataDisplay;
    
  
  }); 
  } 

  async function ChangeStatus(_id){
    let data = {
        status:true
    }
    let url = `http://127.0.0.1:3000/Orders/${_id}`
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
    });
    window.location.reload();
    
    return await response.json;
  }
  
  ActivOrders();
