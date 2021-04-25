console.log('my' + 'cat');
console.log('1'+2);
console.log(`string literals: 1+2 = ${1+2}`);
console.log("ellie's book");

let counter = 2;
const eden = ++counter;
console.log(counter);
const edens =counter++;
console.log(counter);
const edens3 =counter--;
console.log(counter);




const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


const container = 'sofia';
if (container === 'eden') {
 console.log('welcome, eden!');
} else if (container === 'sofia') { 
 console.log('you are not eden!');
} else { 
 console.log('unknown');
} 


const browser = 'IE';
switch (browser) {
 case 'IE':
   console.log('go away');
   break;
 case 'chrome': 
 case 'Firefox':
   console.log('love you!');
   break;
 default:
   console.log('same all!');
   break;  
}


let i = 3;
while (i < 6) 
   {console.log(`while: ${i}`);
   i++; 
}

do { console.log(`while: ${i}`);
   i--;
} 
while (i > 0);


const value1 = true;
console.log(!value1);


console.log(name === 'ellie' ? 'lia' : 'dfno');

for (i=3; i >0; i--) 
{ console.log(`for: ${i}`); }

for (let i=3; i >0; i = i-2) 
{ console.log(`for: ${i}`); }


for (let i=0; i<11; i++) {
  if (i > 8) {
  break;
}
  console.log(`q2. ${i}`); 
}

function changebox(objc) {
  objc.box = 'coder';
}

const lali = {name: 'lali'};
changebox(lali);
console.log(lali);


