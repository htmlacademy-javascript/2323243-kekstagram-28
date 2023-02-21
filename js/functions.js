//1. Функция длины строки

// const isLessOrEqual = (string, length) => string.length <= length;

// isLessOrEqual('привет', 7);


// 2. Функция палиндром
// функция может принимать строку в разном регистре
// функция может содержать пробелы и пробелы не должны влиять на палиндром

/* const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ','');

  let reverseString = '';
  for(let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString[i];
  }
return tempString === reverseString
}
isPalindrom('Лёша на полке клопа нашёл') */


// 3. функция возвращающая целое число
// const extractNumber = (string) => {
//     if (typeof string === 'number') {
//       return string;
//     }
//     let result ='';
//     for(let i = 0; i < string.length; i++){
//       if (!Number.isNaN(parseInt(string.at(i),10)));
//     result += string.at(i)
//   }
//   return parseInt(result,10);
// }


// 4. формирование адресов
// eslint-disable-next-line no-unused-vars
// const padStart = (string, minLength, pad) => {
//   const actualPad = minLength - string.length;
//   if (actualPad <= 0) {
//     return string;
//   }
//   const tempPad = pad.slice(0, actualPad % pad.length);

//   const tempRepeat = pad.repeat(actualPad / pad.length);

//   return tempPad + tempRepeat + string;
// };

// вариант решения с while
// const padStart = (string, minLength, pad) => {
//   let result = string;
//   while (result.length < minLength){
//     const newResultLength = result.length + pad.length;
//     const actualPad = newResultLength <= minLength ? pad : pad.slice(0,minLength - newResultLength);
//     result = actualPad + result;
//   }
//   return result;
// };
