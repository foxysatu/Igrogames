async function ShowCard() {
    let params = (new URL(document.location)).searchParams.get("kod");
    let url = 'http://127.0.0.1:3000/uploadphoto/' + params;
  
    const response = await fetch(url);
    response.json().then(function(data) {
      const display = document.getElementById("list");
  
      let dataDisplay = data.map((object) => {
        const { dataFile, name, kod, price, description } = object;
        return `
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                  <div class="product__details__pic">
                  <img src="http://127.0.0.1:3000/${dataFile}" width="700" height="600">
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="product__details__text">
                      <h3>${name}</h3>
                      <div class="product__details__price">${price} Р<span>$ 1200 Р</span></div>
                      <div class="product__details__button">
                          <a href="#" class="cart-btn" onclick="location.href='../Order/Order.html?kod=${kod}&model=${name}'"><span class="icon_bag_alt"></span> Купить</a>
                      </div>
                  </div>
              </div>
              <div class="col-lg-12">
                  <div class="product__details__tab">
                      <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item">
                              <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                          </li>
                          </li>
                      </ul>
                      <div class="tab-content">
                          <div class="tab-pane active" id="tabs-1" role="tabpanel">
                              <h6>${description}</h6>
                          </div>
                      </div>
                  </div>
              </div>
            </div>  
        </div>
        `;
      });
  //     <button onclick="location.href='../Order/Order.html?kod=${kod}&model=${name}'">Купить</button>
      display.innerHTML = dataDisplay;
    });
  }
  
  ShowCard();
  