import { action, observable } from 'mobx';

import swal from 'sweetalert2';

export default class TagsStore {
  @observable image: string | null = '';
  @observable video: string | null = '';
  @observable geoLocale = '';

  @action getLocationGPS = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos) => {
        this.geoLocale = `Latitude: ${pos.coords.latitude} - Longitude: ${pos.coords.longitude}`;
      }, (err) => {
        swal.fire(err.message, '', 'error');
      }, {
        enableHighAccuracy:true,
        timeout: 5000
      });
    } else {
      swal.fire('Geolocation não é permitido nesse navegador', '', 'error');
    }
  }

  getUserMedia(constraints){
    if(navigator.mediaDevices){
      return navigator.mediaDevices.getUserMedia(constraints);
    }
    const legacyApi = navigator.getUserMedia;
    if(legacyApi){
      return new Promise(function(resolve,reject) {
        legacyApi.bind(navigator)(constraints,resolve,reject);
      })
    }
    throw new Error('not supported');
  }

  @action getStream = async (type) => {
    const constraints = {};
    constraints[type] = true;

    try {
      const stream = await this.getUserMedia(constraints);
      const mediaControl = document.querySelector('video#webcam') as any;
      if('srcObject' in mediaControl) {
        mediaControl.srcObject = stream;
      } else {
        mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
      }

      mediaControl.play();

    } catch (error) {
      swal.fire(error.message, '', 'error');
    }
  }

}

const tags = new TagsStore();
export { tags };