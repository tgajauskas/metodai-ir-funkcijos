// 1. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".
// 2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.
// 3. Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25
// 4. Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50
// 5. Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".
// 6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"
// 7. Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"
// 8. Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].
// 9. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true
// 10. Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]
// 11. Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true
// 12. Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

// 1.

console.log("-------------")
console.log("1. Užduotis")

function convertMinute(minutes){
    const seconds = minutes * 60
    return seconds + " seconds"
}

console.log(convertMinute(3))

// 2.

console.log("-------------")
console.log("2. Užduotis")

function ageToDays(year){
    const days = year * 365
    return "Nugyventa jau dienų: " + days
}

console.log(ageToDays(28))

// 3.

console.log("-------------")
console.log("3. Užduotis")

const square = number => (number * number)

console.log(square(5))

// 4.

console.log("-------------")
console.log("4. Užduotis")

const areaOfTriangle = (height, width) => (height * width / 2)

console.log(areaOfTriangle(25, 25))

// 5.

console.log("-------------")
console.log("5. Užduotis")
function lastLetter(word){
    const lastLetter = word.slice(-1)
    return "Paskutinė raidė yra " + lastLetter
}

console.log(lastLetter("Petras"))

// 6.

console.log("-------------")
console.log("6. Užduotis")

function reverseWord(word){
    const splitWord = word.split("")
    const reverseArray = splitWord.reverse()
    const addWord = reverseArray.join("").toLowerCase()
    return addWord
}

console.log(reverseWord("Tomas"))

// 7.

console.log("-------------")
console.log("7. Užduotis")

function biggestNegativeNumber(arr){
    const negativeNumber = arr.filter(num => num < 0)
    if (negativeNumber.length === 0) {
        console.log("Nėra neigiamo skaičiaus")
        return
    }
    const biggestNegativeNumber = Math.max(...negativeNumber)
    return biggestNegativeNumber 
}

console.log(biggestNegativeNumber([-1, -100, -5, 10, 0, 11]))

// 8.

console.log("-------------")
console.log("8. Užduotis")

function arrayGenerator(number){
    const randomArray = []
    for (var i = 0; i < number; i++){
        const randomNumber = Math.floor(Math.random() * 10) + 1
        randomArray.push(randomNumber)
    }
    return randomArray
}

console.log(arrayGenerator(5))

// 9.

console.log("-------------")
console.log("9. Užduotis")

const checkIfBigger = (a, b) => a + b <= 100

console.log(checkIfBigger(10, 50))

// 10.

console.log("-------------")
console.log("10. Užduotis")
console.log("NO IDEA KAIP SITA SPRESTI, PARDON")

// 11.

console.log("-------------")
console.log("11. Užduotis")

function checkIfHoliday(year, month, day){
    const holidays = [
        new Date(year.getFullYear(), 0, 1),
        new Date(year.getFullYear(), 1, 16),
        new Date(year.getFullYear(), 2, 11),
        new Date(year.getFullYear(), 3, 9),
        new Date(year.getFullYear(), 3, 10),
        new Date(year.getFullYear(), 4, 1),
        new Date(year.getFullYear(), 4, 7),
        new Date(year.getFullYear(), 5, 4),
        new Date(year.getFullYear(), 5, 24),
        new Date(year.getFullYear(), 5, 6),
        new Date(year.getFullYear(), 6, 15),
        new Date(year.getFullYear(), 10, 1),
        new Date(year.getFullYear(), 10, 2),
        new Date(year.getFullYear(), 11, 24),
        new Date(year.getFullYear(), 11, 25),
        new Date(year.getFullYear(), 11, 26),
    ]
    const checkDate = new Date(year, month, day);
    for (var i = 0; i < holidays.length; i++){
        if (holidays[i].getTime() === year.getTime()){
            return true
        }
    }

    return false
}
console.log(checkIfHoliday(new Date(2023, 11, 25)))

// 12.

console.log("-------------")
console.log("12. Užduotis")

function missingFromArray(arr){
    arr.sort((a, b) => a - b)
    for (var i = 0; i < arr.length; i++){
        if (arr[i] !== i + 1){
            return i + 1
        }
    }
    return arr.length + 1
}

console.log(missingFromArray([1, 2, 3, 5]))