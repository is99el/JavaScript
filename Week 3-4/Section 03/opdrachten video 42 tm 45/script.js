1;
const objectOne = {
  job: "teacher",
  getFullSentence: function () {
    return `My job is being a ${this.job}`;
  },
};
console.log(objectOne.getFullSentence());

//2
const objectTwo = {
  job: "teacher",
  age: 36 - 3,
  getFullSentence: function () {
    return `My job is bein a ${this.job} and I am ${this.age} years old`;
  },
};
console.log(objectTwo.getFullSentence());

//3
const objectThree = {
  friends: "Koe and Vos",
  getFullSentence: function () {
    return `My friends are ${this.friends} `;
  },
};
console.log(objectThree.getFullSentence());

//4
const objectFour = {
  age: 10 - 2,
  getFullSentence: function () {
    return `${this.age}`;
  },
};
console.log(objectFour.getFullSentence());

//5
const object1 = {
  firstName: "Piet",
  lastName: "Janssens",
  job: "Fighter",
  getJobAndName: function (name, job) {
    return `My name is ${name} and I am a ${job}.`;
  },
};
console.log(object1.getJobAndName("Piet " + "Janssens", "Fighter"));

//6
const object2 = {
  firstName: "Ismael",
  lastName: "Azaaouaj",
  age: 18,
  getJobAndName: function () {
    return `My name is ${this.firstName} ${this.lastName} and I am a ${this.age} years old.`;
  },
};
console.log(object2.getJobAndName());

//7

const object = {
  firstName: "Piet",
  lastName: "Janssens",
  job: "Fighter",
  birthYear: 2000,
  getAge: function (name, job) {
    if (!this.age) this.age = new Date().getFullYear - this.birthYear;
    return this.age;
  },
};
console.log(object.getAge());

//8
//a
const object11 = {
  firstName: "Piet",
  lastName: " BU",
  age: 20,
  job: "Fighter",
  place: "Amsterdam",
  getJobAndName: function () {
    return ` I am a ${this.age} years old.`;
  },
};

const object22 = {
  firstName: "Ismael",
  lastName: " Azaaouaj",
  age: 18,
  place: "Almere",
  getJobAndName: function () {
    return ` I am a ${this.age} years old.`;
  },
};

//b
// console.log(object22.getJobAndName() + object11.getJobAndName());
// if (object11.age > object22.age) {
//   console.log(object11.firstName + object11.lastName);
// } else {
//   console.log(object22.firstName + object22.lastName);
// }

//c
if (object11.place === "Almere") {
  console.log(object11.firstName + object11.lastName);
} else if (object22.place === "Almere") {
  console.log(object22.firstName + object22.lastName);
} else {
  console.log("geen ene klopt");
}
