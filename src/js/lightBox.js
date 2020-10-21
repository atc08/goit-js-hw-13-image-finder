import * as basicLightbox from 'basiclightbox';

function lightBox(event) {
  if (event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(
      `<img src=${event.target.dataset.source} width="800" height="600">`,
    );
    instance.show();
  }
};

export default lightBox;