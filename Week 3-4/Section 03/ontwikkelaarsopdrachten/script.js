//1
const objectOne = {
  firstName: "Henk",
  lastName: "de Vries",
  age: 2021 - 1988,
  job: "teacher",
  friends: ["Koe", "Vos"],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(objectOne.friends.length);
//omdat je aangeeft dat je wilt zien hoe lang je object is
