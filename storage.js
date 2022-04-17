const FILE_PATH = "./data.txt";
const fs = require("fs");

class AppStorage {
  static users = [];

  static loadData() {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    this.users = JSON.parse(data || []);
    return this.users;
  }

  static updateData() {
    fs.writeFile(FILE_PATH, JSON.stringify(this.users), (err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  static updateUser(newUser) {
    const user = this.getUser(newUser.id);
    if (user) {
      user.sended = newUser.sended;

      if (user.sended) {
        user.name = newUser.name;
        user.sendedValue = newUser.sendedValue;
      }

      this.updateData();
    }

    return user;
  }

  static getUser(id) {
    this.loadData();
    let user = this.users.find((item) => item.id === id);
    if (!user) {
      user = {
        id,
        sended: false,
        sendedValue: false,
      };
      this.users.push(user);
      this.updateData();
    }
    return user;
  }
}

module.exports = AppStorage;
