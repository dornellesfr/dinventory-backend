import * as bcrypt from 'bcrypt';

export class BCrypt {
  private readonly _salts: number;
  constructor() {
    this._salts = 10;
  }

  encryptPassword(password: string): string {
    const salt = bcrypt.genSaltSync(this._salts);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}

export default BCrypt;
