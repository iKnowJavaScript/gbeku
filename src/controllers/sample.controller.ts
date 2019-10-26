const allUsers = [{ name: "victor", age: 25 }, { name: "john", age: 25 }];

class sampleController {
  async getUser(id: number) {
    return await allUsers[id];
  }
}

export default new sampleController();
