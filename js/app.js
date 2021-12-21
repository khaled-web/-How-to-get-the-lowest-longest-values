// 
function secondValues(arr) {
 let values = [...new Set(arr)].sort((a, b) => a - b);
 if (values.length < 2) {
  return `${values[0]}`
 } else if (values.length === 2) {
  return `${values[0]} ${values[1]}`
 } else {
  return `${values[1]} ${values[values.length -2]}`
 }
 return values;
}

console.log(secondValues([1]));
// 1
console.log(secondValues([4, 2]));
// 2 4
console.log(secondValues([11, 44, 22]));
// 11, 22, 44 === 22
console.log(secondValues([3, 2, 88, -11, 67, 7]));
// -11, 2, 3, 7, 67, 88 ==== 2, 67