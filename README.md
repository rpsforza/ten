# ten.js

Everything 10, All in Javascript

### Usage
##### Require the module
```javascript
var ten = require('ten');
```

##### In the browser
```html
<script type="text/javascript" src="./ten.js"></script>
```

##### Basic 10
```javascript
ten(); // 10
```

##### Addition
```javascript
ten + ten(); // 20
ten.plus(12); // 22
```

##### Subtraction
```javascript
ten - ten(); // 0
ten.minus(3); // 7
```

##### Multiplication
```javascript
ten * ten(); // 100
ten.times(5); // 50
```

##### Division
```javascript
ten / ten(); // 1
ten.over(1); // 10
ten.over(2); // 5
```

##### Other Maths
```javascript
ten.toPower(3); // 1000
ten.isLessThan(1); //  false
ten.isGreaterThan(9); // true
ten.isFactor(5); // true
ten.isMultiple(230); // true
ten.scientificNotation(3.14159, 7) // 31415900
ten.roundToTenth(4.20691); // 4.2
ten.valueOf(); // 10
ten.fraction(); // 10 / 1
ten.factorial(); // 3628800
ten.sqrt(); // 3.162278
ten.log(); // 1
ten.naturallog(); // 2.302585
ten.sin() // -0.5440211
ten.cos("deg"); // 0.9848078
ten.tan("rad"); // 0.6483608
```

##### Chemistry of 10 (Neon)
```javascript
ten.element(); // Neon
ten.elementWeight(); // 20.1797
ten.elementGroup(); // Noble Gasses
ten.elementElectronConfiguration(); // [He] 2s2 2p6
ten.elementCovalentRadius(); // 58 pm
```

##### RGBs of 10
```javascript
ten.rgbRed(); // rgb(10, 0, 0)
ten.rgbGreen(); // rgb(0, 10, 0)
ten.rgbBlue(); // rgb(0, 0, 10)
ten.rgbAll(); // rgb(10, 10, 10)
ten.rgbReverse(); //rgb(245, 245, 245)
```

##### Circles of Radius 10
```javascript
ten.circleArea(); // 314.1592653589793
ten.circleCircumference(); // 62.83185307179586
ten.circleDiameter(); // 20 
ten.circleRadius(); //10
```

##### Different sorts of 10
```javascript
ten.roman() // X
ten.morseCode() // • − − − −   − − − − −
ten.negative() // -10
ten.positive() // 10
five.md5() // d3d9446802a44259755d38e6d163e820
```

##### 10 goes multilingual
```javascript
ten.albanian() // dhjetë
ten.basque() // hamar
ten.belarusian() // дзесяць
ten.bosnian() // deset
ten.bulgarian() // десет
ten.catalan() // desena
ten.croatian() // deset
ten.czech() // desítka
ten.danish() // ti
ten.dutch() // tien
ten.estonian() // kümme
ten.finnish() // kymmenen
ten.french() // dix
ten.galician() // dez
ten.german() // zehn
ten.greek() // δέκα
ten.hungarian() // tíz
ten.icelandic() // tíu
ten.irish() // deich
ten.italian() // dieci
ten.latvian() // desmit
ten.lithuanian() // dešimt
ten.macedonian() // десет
ten.maltese() // għaxar
ten.norwegian() // ten
ten.polish() // dziesięć
ten.portuguese() // dez
ten.romanian() // zece
ten.russian() // 10
ten.serbian() // десет
ten.slovak() //desiatka
ten.slovenian() // deset
ten.spanish() // diez
ten.swedish() // tio
ten.ukrainian() // десять
ten.welsh() // deg
ten.yiddish() // צען
ten.armenian() // տասը
ten.azerbaijani() // on
ten.bengali() // দশ
ten.chinesesimplified() // 十
ten.chinesetraditional() // 十
ten.georgian() // ათი
ten.gujarati() // દસ
ten.hindi() // दस
ten.hmong() // kaum
ten.japanese() // 十
ten.kannada() // ಹತ್ತು
ten.kazakh() // он
ten.khmer() // ចំនួន​ដប់
ten.korean() // 열
ten.lao() // ສິບ
ten.malayalam() // പത്ത്
ten.marathi() // दहा
ten.mongolian() // Арван
ten.myanmar() // တဆယ်
ten.nepali() // दस
ten.sinhala() // දස
ten.tajik() // даҳ
ten.tamil() // பத்து
ten.telugu() // పది
ten.thai() // สิบ
ten.urdu() // دس
ten.uzbek() // o'n
ten.vietnamese() // mười
ten.arabic() // عشرة
ten.hebrew() // עשר
ten.persian() // ده
ten.turkish() // on
ten.afrikaans() // tien
ten.chichewa() // khumi
ten.hausa() // goma
ten.igbo() // iri
ten.sesotho() // tse leshome
ten.somali() // toban
ten.swahili() // kumi
ten.yoruba() // mẹwa
ten.zulu() // eziyishumi
ten.cebuano() // sa napulo ka
ten.filipino() // sampu
ten.indonesian() // sepuluh
ten.javanese() // sepuluh
ten.malagasy() // folo
ten.malay() // sepuluh
ten.maori() // takau
ten.esperanto() // dek
ten.haitiancreole() // dis
ten.latin() // decem
```

##### Different radices
```javascript
ten.binary(); // 1010
ten.octal(); // 12
ten.hex(); // a
ten.base(4); // 22
ten.base(3); // 101
```

##### Texts of 10
```javascript
ten.string(); // ten
ten.camel(); // Ten
ten.loud(); // TEN
ten.quiet(); // ten
ten.inverseCamel(); // tEN
ten.letter(); // j
```

##### Assertion
```javascript
ten.isTen(10); // true
ten.isTen("ten"); // true
ten.isTen(4); // false
```

##### Novelty
```javascript
ten.music(); // Album: Ten, Artist: Pearl Jam - 1991
ten.cartoonnetwork(); // Ben 10
ten.microsoft(); // Windows 10
ten.fingersCount(); // 10
ten.grade(); // Sophomore
```

##### Arrays of 10
```javascript
ten.arrayNum(3); // [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
ten.arrayNum2d(i) // [arrayNum(i), arrayNum(i), ... ]
ten.arrayNum3d(i) // [arrayNum2d(i), arrayNum2d(i), ... ]
ten.tenlist(); // [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
ten.tenlist2d(); // arrayNum2d(10);
ten.tenlist3d(); // arrayNum3d(10);
ten.array(); // [10]
ten.splitArray(); // [1, 0]
```

##### Asynchronous Usage
```javascript
ten.async(function(err, ten) {
	// ten === 10
});
```

##### Unicode
```javascript
ten.oclock(); // '🕙'
ten.timestenemoji(); // 💯
```

### Development
##### The code
All of the logic & heavy lifting is achieved in one self-contained file:
```
./ten.js
```
