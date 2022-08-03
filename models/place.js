export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = {lat: location.lat, lng: location.lng};  
    this.id = new DataTransfer().toString() + Math.random().toString();
  }
}
