const multiplier={
numbers:[2,6,9,4,11],
multiplyBy:5,
multiply(){
    return this.multiplyBy.map((number) => number * this.multiplyBy);
}
}

console.log(multiplier.multiply());