var john = {
    name: "John",
    introduce: function () {
        console.log("My name is " + this.name);
    }
}

// when executed over the john object (i.e. with .(dot)), this is the john object
john.introduce();

var johnIntroduce = john.introduce;

// when executed detached of the john object, this is the global scope, i.e. window
// and this.name is undefined
johnIntroduce();

var newJohn = {
    name: "New John",
    // here introduce is attached to the newJohn object
    introduce: johnIntroduce,
};

// when executed over the newJohn object (i.e. with .(dot)), this is the newJohn object
newJohn.introduce();
