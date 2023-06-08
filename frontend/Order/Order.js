async function post_Order(){
    let kod = (new URL(document.location)).searchParams.get("kod");
    let model = (new URL(document.location)).searchParams.get("model");

    const secName = document.getElementById("secName").value;
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;

    const ObjData = {
        secName: secName,
        name:name,
        mail:mail,
        kod: kod,
        model: model,
        status: false
    }
    

    let url = 'http://127.0.0.1:3000/Orders'
    const response = await fetch(url, {
        method: 'post',
        body: JSON.stringify(ObjData),
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
    });
    
    return await response.json;



}

document.getElementById("ord").addEventListener('click', () => {
    post_Order();
    alert("Заказ оформлен")
    
  })