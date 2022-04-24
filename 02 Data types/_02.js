//1
let challange = "30 Days Of JavaScript";

//2
console.log(challange);

//3
console.log(challange.length);

//4
console.log(challange.toUpperCase());

//5
console.log(challange.toLocaleLowerCase());

//6
console.log(challange.substr(challange.indexOf("Days"), challange.lastIndexOf("Days", 5) +1));

// 7
console.log(challange.substring(challange.indexOf("Days"), challange.length));

//8
console.log(challange.includes("Script"));

//9
console.log(challange.split());

//10
console.log(challange.split(" "));

//11
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(", "));

//12
console.log(challange.replace("JavaScript", "Python"));

//13
console.log(challange.charAt(15));

//14
console.log(challange.charCodeAt(challange.search("J")));

//15
console.log(challange.indexOf("a"));

//16
console.log(challange.lastIndexOf("a"));

//17 
console.log("You cannot end a sentence with because because because is a conjunction".indexOf("because"));

//18 
console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf("because"));

//19
console.log("You cannot end a sentence with because because because is a conjunction".search("because"));

//20
console.log(' 30 Days Of JavaScript '.trim());

//21
console.log(challange.startsWith(30));

//22 
console.log(challange.endsWith("JavaScript"));

//23
console.log(challange.match(/a/gi ));

//24
console.log("30 Days of ".concat("JavaScript"));

//25
console.log(challange.repeat(2));

//===============================

//1
console.log(`The quote ${'There is no exercise better for the heart than reaching down and lifting people up.'} by John Holmes teaches us to ${'help'} one another.`);

//2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

//3
console.log(Number("10") === 10);

//4
console.log(Math.round(Number.parseFloat("9.8")) === 10);

//5
let str1 = "Python";
let str2 = "Jargon"
console.log(str1.includes("on"), str2.includes("on"));

//6
console.log("I hope this course is not full of jargon".includes("jargon"));

//7
console.log(Math.floor(Math.random() * 100) + 1);

//8
console.log(Math.trunc(Math.random() * (50 - 100 + 1) + 100));

//9
console.log(Math.floor(Math.random() * 255) + 1);

//10
let str = "JavaScript";
let random = Math.trunc(Math.random() * str.length);
console.log(str[random]);

//11
console.log(`1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`);

//12
let strSlice = 'You cannot end a sentence with because because because is a conjunction'
console.log(strSlice.slice(strSlice.indexOf("because"), strSlice.lastIndexOf("e", 54) + 1));

//===============================

//1
let countLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
countLove = countLove.toLocaleLowerCase();
console.log(countLove.match(/love/gi));

//2
console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/gi));

//3
console.log('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'.replace(/[&\/\\#,+()$@~%.'":*?<>{}]/g, ""));

//4
console.log(((5000 + 15000) * 12) + 10000);