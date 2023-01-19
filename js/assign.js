//Question 1
let list_a = [1, 2, 3, 5, 6, 7];
let b = 1
for (let i of list_a){
    if(b++ != i ){
        console.log(list_a.indexOf(i));
        break
    }
};


//Question 2
let list_b = [10, 12, -9, 3, -1, 0, 15];
let a = 0
for(let i of list_b ){
    if(i >= 0){
        a += i
    }
};
console.log(a)