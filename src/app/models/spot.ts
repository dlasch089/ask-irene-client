// names/keys taken from google spreadsheet

export class Spot {
  _id: string;
  name: string;
  district: Array<string> = [];
  categories: Array<string> = [];
  situation: Array<string> = [];
  price: Array<string> = [];
  vibe: Array<string> = [];
  tags: Array<string> = [];
  images: Array<string> = [];
  description: string;
  links: any = {
    googleMaps: ''
  }; // 1. web, 2. facebook, 3. google maps, 4. instagram
  location: Object; // object containing lat, long like mongoose likes it? or just array of lat, lng?
}
