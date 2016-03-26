(function () {
	var ten = function() { return 10; };

	ten.toPower = function(num) {return (Math.pow(10, num)); };
	ten.isTen = function(num) {if(num == 10 || num.toString().toLowerCase() == "ten" || num == "X") {return true;} else {return false;}};
	ten.isLessThan = function(num) { return (num < 10); };
	ten.isGreaterThan = function(num) { return (num > 10); };
	ten.minus = function(num) { return (10 - num); }; 
	ten.plus = function(num) { return (10 + num); };
	ten.times = function(num) { return (10 * num); };
	ten.over = function(num) { return (10 / num); };
	ten.splitArray = function() { return [1, 0]; };
	ten.array = function() { return [10]; };
	ten.isFactor = function(num) { if(10 % num == 0) { return true; } else {return false;}};
	ten.isMultiple = function(num) { if(num % 10 == 0) { return true; } else {return false;}};
	ten.string = function() { return "ten"; };
	ten.loud = function() { return "TEN"; };
	ten.quiet = function() { return "ten"; };
	ten.camel = function() { return "Ten"; };
	ten.inverseCamel = function() { return "tEN"; };
	ten.roman = function() { return 'X'; };
	ten.morse = function() { return "• − − − −   − − − − −"; };
	ten.negative = function() { return -10; };
	ten.positive = function() { return 10; };
	ten.base = function(num) { return ten().toString(num); }
	ten.binary = function() { return ten.base(2); };
	ten.octal = function() { return ten.base(8); };
	ten.hex = function() { return ten.base(16); };
	ten.md5 = function() { return "d3d9446802a44259755d38e6d163e820"; };
	ten.music = function() { return "Album: Ten, Artist: Pearl Jam - 1991"; };
	ten.fraction = function() { return "10 / 1"; };
	ten.grade = function() { return "Sophomore"; };
	ten.scientificNotation = function(coefficient, exponent) { return ( coefficient * (Math.pow(10, exponent))); }; 
	ten.microsoft = function() { return "Windows 10"; };
	ten.cartoonNetwork = function() { return "Ben 10"; }; 
	ten.roundToTenth = function(num) { return (Math.round(10 * num) / 10); };
	ten.fingersCount = function() { return 10; };
	ten.valueOf = function() { return 10; };
	ten.arrayNum = function(num) { return [num, num, num, num, num, num, num, num, num, num]; };
	ten.array2dNum = function(num) { return [ten.arrayNum(num), ten.arrayNum(num), ten.arrayNum(num), ten.arrayNum(num), ten.arrayNum(num), ten.arrayNum(num), ten.arrayNum(num), ten.arrayNum(num), ten.arrayNum(num), ten.arrayNum(num)]; };
	ten.array3dNum = function(num) { return [ten.array2dNum(num), ten.array2dNum(num), ten.array2dNum(num), ten.array2dNum(num), ten.array2dNum(num), ten.array2dNum(num), ten.array2dNum(num), ten.array2dNum(num), ten.array2dNum(num), ten.array2dNum(num)]; };
	ten.tenlist = function() { return ten.arrayNum(10); };
	ten.tenlist2d = function() { return ten.arrayNum(10); };
	ten.tenlist3d = function() { return ten.arrayNum(10); };


	ten.rgbRed = function() { return "rgb(10, 0, 0)"; };
	ten.rgbGreen = function() { return "rgb(0, 10, 0"; };
	ten.rgbBlue = function() { return "rgb(0, 0, 10)"; };
	ten.rgbAll = function() { return "rgb(10, 10, 10)"; };
	ten.rgbReverse = function() { return "rgb(245, 245, 245)"; };

	ten.element = function() { return "Neon"; };
	ten.elementWeight = function() { return 20.1797; };
	ten.elementGroup = function() { return "Noble Gasses"; };
	ten.elementElectronConfiguration = function() { return "[He] 2s2 2p6"; }; 
	ten.elementCovalentRadius = function() { return "58 pm"; };

	var langs = ["dhjetë", "hamar", "дзесяць", "deset", "десет", "desena", "deset", "desítka", "ti", "tien", "kümme", "kymmenen", "dix", "dez", "zehn", 'δέκα', "tíz", "tíu", "deich", "dieci", "desmit", "dešimt", "десет", "għaxar", "ten", "dziesięć", "dez", "zece", "10", "десет", "desiatka", "deset", "diez", "tio", "десять", "deg", "צען", "տասը", "on", "দশ", "十", "十", "ათი", "દસ", "दस", "kaum", "十", "ಹತ್ತು", "он", "ចំនួន​ដប់", "열", "ສິບ", "പത്ത്", "दहा", "Арван", "တဆယ်", "दस", "දස", "даҳ", "பத்து", "పది", "สิบ", "دس", "o'n", "mười", "عشرة", "עשר", "ده", "on", "tien", "khumi", "goma", "iri", "tse leshome", "toban", "kumi", "mẹwa", "eziyishumi", "sa napulo ka", "sampu", "sepuluh", "sepuluh", "folo", "sepuluh", "tekau", "dek", "dis", "decem"];

	ten.albanian = function() { return langs[0]; };
	ten.basque = function() { return langs[1]; };
	ten.belarusian = function() { return langs[2]; };
	ten.bosnian = function() { return langs[3]; };
	ten.bulgarian = function() { return langs[4]; };
	ten.catalan = function() { return langs[5]; };
	ten.croatian = function() { return langs[6]; };
	ten.czech = function() { return langs[7]; };
	ten.danish = function() { return langs[8]; };
	ten.dutch = function() { return langs[9]; };
	ten.estonian = function() { return langs[10]; };
	ten.finnish = function() { return langs[11]; };
	ten.french = function() { return langs[12]; };
	ten.galician = function() { return langs[13]; };
	ten.german = function() { return langs[14]; };
	ten.greek = function() { return langs[15]; };
	ten.hungarian = function() { return langs[16]; };
	ten.icelandic = function() { return langs[17]; };
	ten.irish = function() { return langs[18]; };
	ten.italian = function() { return langs[19]; };
	ten.latvian = function() { return langs[20]; };
	ten.lithuanian = function() { return langs[21]; };
	ten.macedonian = function() { return langs[22]; };
	ten.maltese = function() { return langs[23]; };
	ten.norwegian = function() { return langs[24]; };
	ten.polish = function() { return langs[25]; };
	ten.portuguese = function() { return langs[26]; };
	ten.romanian = function() { return langs[27]; };
	ten.russian = function() { return langs[28]; };
	ten.serbian = function() { return langs[29]; };
	ten.slovak = function() { return langs[30]; };
	ten.slovenian = function() { return langs[31]; };
	ten.spanish = function() { return langs[32]; };
	ten.swedish = function() { return langs[33]; };
	ten.ukrainian = function() { return langs[34]; };
	ten.welsh = function() { return langs[35]; };
	ten.yiddish = function() { return langs[36]; };
	ten.armenian = function() { return langs[37]; };
	ten.azerbaijani = function() { return langs[38]; };
	ten.bengali = function() { return langs[39]; };
	ten.chinesesimplified = function() { return langs[40]; };
	ten.chinesetraditional = function() { return langs[41]; };
	ten.georgian = function() { return langs[42]; };
	ten.gujarati = function() { return langs[43]; };
	ten.hindi = function() { return langs[44]; };
	ten.hmong = function() { return langs[45]; };
	ten.japanese = function() { return langs[46]; };
	ten.kannada = function() { return langs[47]; };
	ten.kazakh = function() { return langs[48]; };
	ten.khmer = function() { return langs[49]; };
	ten.korean = function() { return langs[50]; };
	ten.lao = function() { return langs[51]; };
	ten.malayalam = function() { return langs[52]; };
	ten.marathi = function() { return langs[53]; };
	ten.mongolian = function() { return langs[54]; };
	ten.myanmar = function() { return langs[55]; };
	ten.nepali = function() { return langs[56]; };
	ten.sinhala = function() { return langs[57]; };
	ten.tajik = function() { return langs[58]; };
	ten.tamil = function() { return langs[59]; };
	ten.telugu = function() { return langs[60]; };
	ten.thai = function() { return langs[61]; };
	ten.urdu = function() { return langs[62]; };
	ten.uzbek = function() { return langs[63]; };
	ten.vietnamese = function() { return langs[64]; };
	ten.arabic = function() { return langs[65]; };
	ten.hebrew = function() { return langs[66]; };
	ten.persian = function() { return langs[67]; };
	ten.turkish = function() { return langs[68]; };
	ten.afrikaans = function() { return langs[69]; };
	ten.chichewa = function() { return langs[70]; };
	ten.hausa = function() { return langs[71]; };
	ten.igbo = function() { return langs[72]; };
	ten.sesotho = function() { return langs[73]; };
	ten.somali = function() { return langs[74]; };
	ten.swahili = function() { return langs[75]; };
	ten.yoruba = function() { return langs[76]; };
	ten.zulu = function() { return langs[77]; };
	ten.cebuano = function() { return langs[78]; };
	ten.filipino = function() { return langs[79]; };
	ten.indonesian = function() { return langs[80]; };
	ten.javanese = function() { return langs[81]; };
	ten.malagasy = function() { return langs[82]; };
	ten.malay = function() { return langs[83]; };
	ten.maori = function() { return langs[84]; };
	ten.esperanto = function() { return langs[85]; };
	ten.haitiancreole = function() { return langs[86]; };
	ten.latin = function() { return langs[87]; };
	


	if(typeof module !== 'undefined' && module.exports) {
	module.exports = ten;
	} else if (typeof define === 'function' && define.amd){
	define(ten);
	} else if (window) {
	window.ten = ten;
	}
}());