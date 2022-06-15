console.log("----------- var ---------")

function sayHello() {

    for (var i = 1; i <= 5; i++) {
        console.log("Value of i is:", i)
    }

    console.log("Value of i after for loop is:", i)

}

sayHello()

console.log("----------- let ---------")

function sayHi() {

    for (let i = 1; i <= 5; i++) {
        console.log("Value of i is:", i)
    }

    // console.log("Value of i after for loop is:", i)
    // console.log("Value of i after for loop is:", i)
    //     ^

    // ReferenceError: i is not defined

}

sayHi();

console.log('-------const-----------')

const company = 'SCB';

company = 'Standard Chartered'
// TypeError: Assignment to constant variable.