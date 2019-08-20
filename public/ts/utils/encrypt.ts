import sha256 from "crypto-js/sha256";

interface EncryptInterface {
  encryptPassword(pw: string): string;
}

class Encrypt implements EncryptInterface {
  encryptPassword = (pw: string): string => {
    return sha256(pw);
  };
}

export default new Encrypt();
