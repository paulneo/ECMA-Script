const bigNumber = 132122138471228341234n;

const anotherBigNumber = BigInt(132122138471228341234);

console.log(bigNumber);
console.log(anotherBigNumber);

const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt('1234567890123456789012345678901234567890');
const bigintFromNumber = BigInt(10);

console.log(bigint);
console.log(sameBigint);
console.log(bigintFromNumber);

const a = 123512323419823719827391n;
const b = 312435124124312315123123n;

const AbigInt = BigInt(123512323419823719827391);
const BbigInt = BigInt(312435124124312315123123);

console.log(a + b);
console.log(AbigInt + BbigInt);

const max = Number.MAX_SAFE_INTEGER;
const min = Number.MIN_SAFE_INTEGER;

console.log(max); // 9007199254740991
console.log(min); // -9007199254740991
