// console.log('Hello, world!')
// console.log('im learning javascript')
// console.log('i love javascript')
// console.log('ha?')
// console.log(1+2)

//variable vanako k ho? --

 let bottle="water"// string 
let dustbin="kura"

const pi=3.14 //number 'no need to use any inverted come in numbeer'
const boilingpoint=100
const gravity=9.8 

//boolean
let isRaining=true
let isnepali =true

console.log("mero dustbin ma k xa? " +dustbin)//20 ra 21 bata jun pani use garda hunxa as per convie
console.log(`mero dustbin ma k xa? ${dustbin} ` )//concatination

console.log(`i have ${bottle} with ${boilingpoint} boilingpoint`)


//array
//array can be used when the data are of same catogori
let friend1="arina"
let friend2="bipana"

let frind=["arina","bipana"]
frind.push("me")//last ma halxa
frind.unshift("hello")//first ma halxa
frind.pop()//last ko array delet hunxa 
frind.shift()//first ko 
frind[1]="hana"
//console.log(frind)//line 31 32 33 lai manuplate garxa


let countrys=["nepal","india","china"]
countrys[0]="america"
countrys[1]="ucrain"
countrys[2]="russia"


console.log(countrys.length)
console.log(countrys)

let number=[1,2,3,4,5,6,7,8,9,0]

//slice
let newnum= number.slice(1,4)
let evenNums=[2,4,6,8,10,12]
console.log(newnum)
let newEvenNums= evenNums.slice(3)
console.log(newEvenNums)


//splice

let nums=[1,2,3,4,5,6,7]
nums.splice(1,2,"bipana")
console.log(nums)



let test = [1,2,3,4,5]
test.splice(0,5,"a","e","i","o","u")
console.log(test)
console.log(test.length)


//split

let massage= "im am from nepal"
let newmassage=massage.split("")
console.log(newmassage)




//object

let name="bipana"
let age ="10"
let cast="rai"

let me={
   name: "bipana",
   cast: "rai",
   age: 15

}

let country="nepal"
let language="nepali"
let islandlock=true
let isasia=true

let countris={
    country :"nepal",
    langage: "nepali"
    
}