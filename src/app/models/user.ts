export class User {
  id: string;
  username: string;
  password: string;
  email: string;
  image: string;
  role: Array<string>;
  favorites: Array<string>;
  wishlist: Array<string>;

  // Ask Andre about this:
  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
