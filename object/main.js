//ESSENTIAL
// 1.Fix the syntax & style 
// issues with the three objects below:

let obj1 = {
  firstName: 'Yan',
  lastname: 'Fan'
}

let obj2 = { a: 1,
   b: 2, 
   c: 3,
    d:4} 

    let obj3 = { 
      animal: 'dog' ,
      noise: 'bark', 
      age: 3, 
      type :'Golden Retriever' ,
      color: 'Yellow'
}


//2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.

let person = {
  firstName : "yassmine",
  lastName : "adouani",
  hometown : "hamam lanef",
  age : 22
}


person.favFood = "pasta"; 

delete person.lastName

//3.Access the favorite food property in the object using dot notation, and reassign it to a different food.

person.favFood = "pizza"

//!!!4.Change your object to have a single name key, the value of which is an object 
//– this object should have first, last and middle keys containing your first, last, and middle names respectively.

let user ={
  name : {
    firstName : "yas"
    middleName:"min"


  }
}


//5.Write a function called emptyObject that takes no parameters and returns an empty object.

function emptyObject(){
  let person={}
  return person
}


//6.Write a function called addProperty that takes two parameters,
// an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.


function addProperty(object,key){
  object.key=true
}

//Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌deleteProperty‌‌ ‌that‌ ‌takes‌ 
//‌two parameters an‌ ‌object‌ ‌and‌ a key as a string. It then removes the property with that key from the object.

function deleteProperty(object,key){
  delete object.key
}


//!!!8.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addObjectProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌
// ‌a‌ ‌string as a key‌, ‌and‌ ‌a second ‌object. It then adds a new property with the passed key and the second object as its value.

function addObjectProperty(object,key,object2){
  object.key=object2
}


//9.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addFullNameProperty‌‌ ‌that‌ ‌takes‌ ‌an‌ ‌object‌ ‌as‌ ‌a‌ ‌parameter.‌ 
// ‌If the object has both a firstName and a lastName property, then it adds a new property
//  with the key fullName and the value as a string of the firstName and lastName combined with a space between them.

function addFullNameProperty(object){
  for (let key in object){
    if (key ='fullName')
    console.log(object.key)
    else object.fullName= object.firstName + " " + object.lastName

  }

}

// 10.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addArrayProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌ ‌and‌ ‌an‌ ‌array.‌
//  ‌It then adds a new property to the object with the specified key and its value is the array.

function addArrayProperty(object,key,array){
  object.key=array
}


//11.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌
// takes ‌an‌ ‌object‌ ‌as a parameter. It then prints out to the console the values of all the object’s properties.

function printAllProperties(obj) {
  for (let key in obj) {
          console.log(key + ": " + obj.key);
      }
  }


  //EXTENTED
  // 1.Write a function called removeNumbersLargerThan that takes two parameters, 
  // a number and an object. It then removes all properties with values larger than the specified number.

  function removeNumbersLargerThan(number,object){
    for (let key in object){
    if (object.key > number){
      delete object.key
    }
  }
  }

  //2.Write a function called removeAllEvenValues that takes an object as a parameter
  //. It then removes all properties with values that are an even number.


  function removeAllEvenValues(object){
    for (let key in object){
      if (object.key%2===0){
        delete object.key
      }
    }
  }

  