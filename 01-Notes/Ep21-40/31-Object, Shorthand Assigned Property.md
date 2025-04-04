# **JavaScript Learning Notes - Episode 31**

**Topic: Objects & Shorthand Assigned Properties**

---

## 🕘 **Timestamps Covered**
- **00:10** – What is Object  
- **01:35** – Creating Object  
- **07:15** – Object property in a string type  
- **07:55** – Accessing String type Property  
- **12:05** – Shorthand Assigned Property  
- **14:02** – Adding Dynamic Property in Object  

---

## 🧱 **What is an Object?**

An **object** is a collection of related **data and functions** in **key-value pairs**.  
Each key is called a **property**, and if a property holds a function, it's called a **method**.

```javascript
let userProfile = {
    userName: "Arun",
    age: 32,
    hairColor: "black",
    eyeColor: "brown",
    eat: function () {
        console.log("I'm gonna eat ice cream");
        return "Vanilla Ice Cream";
    }
};

console.log(userProfile.userName);       // Arun
console.log(userProfile.hairColor);      // black
console.log(userProfile.age);            // 32
console.log(userProfile.eat());          // Executes and returns: "Vanilla Ice Cream"
```

---

## 📦 **String-Type Property Names**

- Useful when property names have spaces or special characters.
- You **must** access them using **bracket notation** (`[]`).

```javascript
let vehicle = {
    "vehicleType": "four-wheeler",
    "price": 200000,
    fuelType: "petrol",
    "seater type": ["two", "three", "four"]
};

console.log(vehicle["vehicleType"]);     // four-wheeler
console.log(vehicle["seater type"]);     // ["two", "three", "four"]
console.log(vehicle["seater type"][2]);  // four
```

---

## ✨ **Shorthand Assigned Property**

If the **key and variable name are the same**, you can use shorthand.

```javascript
let uName = "Arun";
let age = 30;

let person1 = {
    uName: uName,
    age: age
};

let person2 = {
    uName,
    age
};

console.log(person1); // { uName: "Arun", age: 30 }
console.log(person2); // { uName: "Arun", age: 30 }
```

---

## 🔄 **Dynamic Property Names**

You can define properties dynamically using `[]` syntax inside an object.

```javascript
let dynamicProp = "employeeId";

let person3 = {
    uName,
    age,
    ['dynamicProp']: "UEQ2343",      // Key = "dynamicProp" (literal string)
    [dynamicProp]: "IFS246"         // Key = employeeId (from variable)
};

console.log(person3);
// Output:
// {
//   uName: 'Arun',
//   age: 30,
//   dynamicProp: 'UEQ2343',
//   employeeId: 'IFS246'
// }

console.log(person3.dynamicProp);      // UEQ2343
console.log(person3[dynamicProp]);     // IFS246
```

---

## ✅ **Summary**

| Concept | Description |
|--------|-------------|
| Object | Stores key-value pairs for structured data |
| Property Types | Can be regular names or strings |
| Shorthand Properties | Use variable names directly as keys |
| Dynamic Properties | Define keys using variable values |

---



# JavaScript Learning Notes - Episode 31: Object, Shorthand Assigned Property in Javascript



**Topics Covered:**

* What is Object
* Creating Object
* Object property in a string type
* Accessing String type Property
* Shorthand Assigned Property
* Adding Dynamic Property in Object

---

**🕘 00:10 - What is Object**

* An **object** in JavaScript is a fundamental data type that allows you to store collections of related data and functionality.
* Objects are made up of **properties**, where each property consists of a **key** (a string or Symbol) and a **value** (which can be any JavaScript data type, including other objects and functions).
* Objects are used to represent real-world entities or concepts with their associated attributes and behaviors.

**Example:**

```javascript
let userProfile = {
  userName: "Arun",
  age: 32,
  hairColor: "black",
  eyeColor: "brown",
  eat: function() {
    console.log("I'm gonna eat ice cream");
    return "Vanilla Ice Cream";
  }
};
```

In this example, `userProfile` is an object with properties like `userName`, `age`, `hairColor`, `eyeColor`, and a method `eat` (a function associated with the object).

**🕘 01:35 - Creating Object**

You can create JavaScript objects using **object literals**, which involve defining key-value pairs within curly braces `{}`.

```javascript
let person = {
  name: "John",
  age: 30
};

let car = {
  brand: "Toyota",
  model: "Corolla"
};
```

**Accessing Properties:**

You can access object properties using two main ways:

1. **Dot notation:** Used when the property key is a valid JavaScript identifier (no spaces or special characters, doesn't start with a number).

   ```javascript
   console.log(userProfile.userName); // Output: Arun
   console.log(car.brand);           // Output: Toyota
   ```

2. **Bracket notation:** Used when the property key is a string (especially if it contains spaces or special characters) or when the key is a variable.

   ```javascript
   console.log(userProfile["age"]);     // Output: 32
   console.log(car["model"]);           // Output: Corolla
   ```

**Accessing Methods:**

To call a method (a function property) of an object, you use parentheses after accessing the property.

```javascript
console.log(userProfile.eat); // Output: [Function: eat] (the function itself)
let iceCreamType = userProfile.eat();
console.log(iceCreamType);    // Output: I'm gonna eat ice cream \n Vanilla Ice Cream
```

**🕘 07:15 - Object property in a string type**

Object property keys can be strings, which is particularly useful when you need to have keys that are not valid JavaScript identifiers (e.g., contain spaces or special characters).

```javascript
let vehicle = {
  "vehicleType": "four-wheeler",
  "price": 200000,
  fuelType: "petrol",
  "seater type": ["two", "three", "four"]
};
```

Here, `"vehicleType"` and `"seater type"` are string-type properties.

**🕘 07:55 - Accessing String type Property**

You must use **bracket notation** to access properties whose keys are strings, especially if they contain spaces or are not valid identifiers. You can also use bracket notation for any property, even if its key is a valid identifier.

```javascript
console.log(vehicle["vehicleType"]); // Output: four-wheeler
console.log(vehicle["price"]);       // Output: 200000
console.log(vehicle.fuelType);      // Output: petrol (dot notation works for valid identifiers)
console.log(vehicle["seater type"]); // Output: [ 'two', 'three', 'four' ]
console.log(vehicle["seater type"][2]); // Output: four (accessing an element of the array value)
```

**Key takeaway:** Use bracket notation `[]` when the property key is a string or when you are using a variable to access the property. Use dot notation `.` when the property key is a known, valid JavaScript identifier.

**🕘 12:05 - Shorthand Assigned Property**

In ES6 (ECMAScript 2015) and later, if you have a variable whose name is the same as the property key you want to create in an object, you can use a shorthand syntax. Instead of writing `key: value`, you can simply write the variable name.

```javascript
let uName = "Arun";
let age = 30;

// Traditional way:
let person1 = {
  uName: uName,
  age: age
};

// Shorthand property assignment:
let person2 = {
  uName, // Equivalent to uName: uName
  age    // Equivalent to age: age
};

console.log(person1, person2);
// Output: { uName: 'Arun', age: 30 } { uName: 'Arun', age: 30 }
```

This shorthand syntax makes object creation more concise when the property names match existing variable names.

**🕘 14:02 - Adding Dynamic Property in Object**

You can add properties to an object dynamically (after the object has been created) using bracket notation with a variable that holds the property key.

```javascript
let dynamicProp = "employeeId";
let person3 = {
  uName,
  age,
  ['dynamicProp']: "UEQ2343", // Using a string literal as a dynamic key
  [dynamicProp]: "IFS246"     // Using a variable as a dynamic key
};
console.log(person3);
// Output: { uName: 'Arun', age: 30, dynamicProp: 'UEQ2343', employeeId: 'IFS246' }
console.log(person3.dynamicProp, person3[dynamicProp]);
// Output: UEQ2343 IFS246
```

* **`['dynamicProp']: "UEQ2343"`:** Here, a string literal `'dynamicProp'` is used within the square brackets to define a property with that exact name.
* **`[dynamicProp]: "IFS246"`:** Here, the value of the `dynamicProp` variable ("employeeId") is used as the key for the new property. This allows you to add properties to an object where the key is determined at runtime.

**Key Concepts:**

* **Objects:** Collections of key-value pairs (properties).
* **Properties:** Consist of a key (string or Symbol) and a value (any JavaScript type).
* **Object Literals:** The most common way to create objects using `{}`.
* **Dot Notation:** Accessing properties using `object.key` (for valid identifier keys).
* **Bracket Notation:** Accessing properties using `object['key']` (for string keys or when using variables).
* **Methods:** Functions that are properties of objects.
* **Shorthand Property Assignment:** Concise syntax for object creation when variable names match desired keys.
* **Dynamic Properties:** Adding properties to objects using variables as keys with bracket notation.

---