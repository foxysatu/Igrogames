

  async function POST_API(){

    const files = document.getElementById("image").files;
    const txt = {
        name: document.getElementById("name").value,
        kod: document.getElementById("kod").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,

    };
    var data = new FormData();
    
    data.append('img', files[0]);
    data.append('dataPost', JSON.stringify(txt));
    
    




    let url = 'http://127.0.0.1:3000/uploadphoto'
    const response = await fetch(url, {
    method: 'post',
    body: data})
    .then(response => response.json())
    .then(data => {
    console.log(data)
    })
    .catch(error => {
    console.error(error)
    })

    
 return await response;
  
    
}; 
 
 
 



document.getElementById("btn1").addEventListener('click', () => {
  POST_API();
  
})
     