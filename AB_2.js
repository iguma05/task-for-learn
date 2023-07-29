var a = {
  firstName: "Bill",
  lastName: "Ivan",
  sayName: function () {
    console.log(this.firstName);
  },
  sayLastName: () => {
    console.log(this.lastName);
  },
};

a.sayName(); // Bill

var b = a.sayName;

b(); //undefined

a.sayName.bind({ firstName: "Boris" })(); //Boris

a.sayName(); //Bill
a.sayLastName(); //undefined

a.sayName.bind({ firstName: "Boris" }).bind({ firstName: "Tom" })(); //Boris
a.sayLastName.bind({ lastName: "Jim" })(); //undefined
