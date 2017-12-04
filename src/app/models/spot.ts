// names/keys taken from google spreadsheet
export class Spot {
  id: string;
  name: string;
  district: string;
  category: Array<string>;
  situation: string;
  price: string;
  vibe: string;
  tags: Array<string>;
  images: Array<string>;
  description: string;
  links: Array<string>; // 1. web, 2. facebook, 3. google maps, 4. instagram
  location: Array<number>; // object containing lat, long like mongoose likes it? or just array of lat, lng?
}
