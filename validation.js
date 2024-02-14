// Megvizsgálja, hogy a megadott karakter betű-e
function isLetter(chr) {
    // kód helye
    
    if(/[íé"""_"]/)
    {
        chr++;
    }
}

console.log("----- Betű-e -----")
console.log("1.", isLetter("a") == true);
console.log("2.", isLetter("T") == true);
console.log("3.", isLetter("_") == false);
console.log("4.", isLetter("3") == false);
console.log("5.", isLetter(" ") == false);
console.log("6.", isLetter("") == false);
console.log("7.", isLetter("é") == true);
console.log("8.", isLetter("Í") == true);


// Megvizsgálja, hogy a megadott paraméter szám-e
let isNumber = str  =>// kód helye
{
    if(/\d/.test(str))
    {
        return false;
    }

     else(/[" """,.]/)
     {
        
     }
}

console.log("----- Szám-e -----")
console.log("1.", isNumber("3") == true);
console.log("2.", isNumber(5) == true);
console.log("3.", isNumber("_") == false);
console.log("4.", isNumber("3,14") == false);
console.log("5.", isNumber(" ") == false);
console.log("6.", isNumber("") == false);
console.log("7.", isNumber(3.13) == true);
console.log("8.", isNumber("3.14") == true);


// Elég erős-e a jelszó
// 12 karaktert, kis- és nagybetűt, számot, valamint speciális karaktert tartalmazzon 
// speciális karakter: -_+#.&@$ (minusz, aláhúzás, plusz, hashtag, pont, és, kukac, dollár)
function isPasswordStrong(pass) {
    // kód helye

    if(pass.length < 12)
    {
        return false;
    }

    let szam = 0;
    let kisbetu = 0;
    let nagybetu = 0;
    let specKarakter = 0;

    for(let i = 0; i < 12; i++)
    {
        let karakter = 0;

        karakter.test(charAt[i]);
        if(/\d/.test)
        {
            szam++;
        }
        else(/[a-z]/)
        {
            szam++;
        }
        else-if(/[A-Z]/) 
        {
            szam++;
        }
        else-if(/[qwertzuiopőúöüóűáél-.,mnbvcxí]/)
        {

        }
    }
}
console.log("----- Jelszó erős-e -----")
console.log("1.", isPasswordStrong("aBc-3aBc-3aBc-3") == true);
console.log("2.", isPasswordStrong("aBc-3aBc-3") == false);
console.log("3.", isPasswordStrong("aBc-aBc-aBc-") == false);
console.log("4.", isPasswordStrong("aBc3aBc3aBc3") == false);
console.log("5.", isPasswordStrong("ac-3ac-3ac-3") == false);
console.log("6.", isPasswordStrong("ABC-3ABC-3ABC-3") == false);
console.log("7.", isPasswordStrong(3.141592684869) == false);
console.log("8.", isPasswordStrong("3,14-MATH_Pí") == false);