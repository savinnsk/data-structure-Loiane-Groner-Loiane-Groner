
//PUSH - add last
    //no push
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // no push 
    numbers[numbers.length] = 10;



    // with push 
    numbers.push(11);
    numbers.push(12, 13);


//UNSHIFT - add first
    //no unshift
    Array.prototype.insertFirstPosition = function(value) {
        for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
        }
        this[0] = value;
        };
        numbers.insertFirstPosition(-1);

    //with unshift 
    numbers.unshift(-2);
    numbers.unshift(-4, -3);

//POP - remove last
    numbers.pop();


//SHIFT - remove first
    // no shift
    Array.prototype.reIndex = function(myArray) {
        const newArray = [];
        for(let i = 0; i < myArray.length; i++ ) {
        if (myArray[i] !== undefined) {
        // console.log(myArray[i]);
        newArray.push(myArray[i]);
        }
        }
        return newArray;
        }
        // remove a primeira posição manualmente e executa reIndex
        Array.prototype.removeFirstPosition = function() {
        for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
        }
        return this.reIndex(this);};
        numbers = numbers.removeFirstPosition();
    //with shift
        numbers.shift();

//SPLICE
    numbers.splice(5,3);      