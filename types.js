// null, undefined, boolean, number, string, object, symbol

console.log(typeof 0); // number
console.log(typeof true); // boolean
console.log(typeof 'Javascript'); // string
console.log(typeof undefined); // undefined
console.log(typeof Math); // object
console.log(typeof Symbol('JS')); // symbol
console.log(typeof null); // object!!!
console.log(typeof function() {}); // function!!!
console.log(typeof NaN); // number!!!

// type conversion

console.log(1 + '2'); // '12'
console.log('' + 1 + 0); // '10'
console.log('' - 1 + 0); // -1
console.log('3' * '8'); // 24
console.log(4 + 10 + 'px'); // '14px'
console.log('px' + 4 + 10); // 'px410'
console.log('42' - 40); // 2
console.log('42px' - 2) // NaN
console.log(null + 2); // 2
console.log({} + {}); // [object Object][object Object]
console.log({} + []); // [object Object]
console.log(undefined + 3); // NaN

// == vs ===

console.log(2 == '2'); //true
console.log(2 === '2'); // false
console.log(undefined == null); // true
console.log(undefined === null); //false
console.log('0' == false); // true
console.log(0 == '0'); // true
console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); //false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); //true
console.log(0 == {}); // false
console.log(0 == null); // false
console.log({} == {}); // false
console.log({} === {}); // false
console.log([] == []); // false