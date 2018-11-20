export default function preloadImages(array) {
  if (!window.cachedImages) {
    window.cachedImages = [];
  }

  if (!Array.isArray(array)) {
    array = [array];
  }
  
  const imagesList = window.cachedImages;

  array.forEach(link => {
    const imageExist = imagesList.find(image => image.src === link);

    if (imageExist) {
      return;
    }

    const image = new Image();
    image.src = link;
    imagesList.push(image);
  });
}
