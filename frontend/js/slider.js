function initializeBanner() {
  const bannerContainer = document.querySelector('.slider-container');
  const bannerItems = document.querySelectorAll('.slider-item');
  const bannerCount = bannerItems.length;
  let currentBannerIndex = 0;

  function showBanner(index) {
    const currentBanner = bannerItems[currentBannerIndex];
    const nextBanner = bannerItems[index];

    currentBanner.classList.remove('active');
    nextBanner.classList.add('active');

    currentBannerIndex = index;
  }

  function nextBanner() {
    const nextBannerIndex = (currentBannerIndex + 1) % bannerCount;
    showBanner(nextBannerIndex);
  }

  setInterval(nextBanner, 3000);
}

// Вызов функции инициализации баннера после загрузки страницы
window.addEventListener('load', initializeBanner);