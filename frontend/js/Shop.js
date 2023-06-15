async function Shop() {
    let url = 'http://127.0.0.1:3000/uploadphoto/';
    const response = await fetch(url);
    response.json().then(function (data) {
      console.log(data);
  
      const display = document.getElementById("list");
      const priceSlider = document.getElementById("priceSlider");
      const priceValue = document.getElementById("priceValue");
  
      priceSlider.addEventListener("input", sortAndDisplayCards);
  
      function sortAndDisplayCards() {
        const selectedPrice = parseInt(priceSlider.value);
        priceValue.textContent = selectedPrice;
  
        // Фильтрация и сортировка по price
        const filteredData = data.filter(object => object.price <= selectedPrice);
        filteredData.sort((a, b) => a.price - b.price);
  
        let dataDisplay = filteredData.map((object) => {
          const { dataFile, name, kod, price } = object;
          return `
            <div class="col-lg-3 col-md-4 col-sm-6 mix ${object.category}" onclick="location.href='../frontend/product-details.html?kod=${kod}'">
              <div class="product__item border__product">
                <div class="product__item__pic set-bg">
                <img src="http://127.0.0.1:3000/${dataFile}" />
                </div>
                <div class="product__item__text">
                  <h6><a href="#">${name}</a></h6>
                  <div class="product__price">${price} ₽</div>
                </div>
              </div>
            </div>`;
        }).join("");
  
        display.innerHTML = `<div class="row property__gallery">${dataDisplay}</div>`;
      }
  
      // Инициализация отображения
      sortAndDisplayCards();
    });
  }
  
  Shop();
  