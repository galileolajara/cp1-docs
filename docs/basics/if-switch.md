---
sidebar_position: 5
---

# If and Switch statements

## If statements
Unlike in other C-like programming languages, `if` statements in Cp1 does not require a parenthesis around the expression but always require `{` and `}` even for one-line statements.

In fact, cp1 always require `{` and `}` on all kinds of statements.
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   a! = 1;
   b! = 2;
   if a > b {
      C1.stdout{"a is larger than b\n"}
   } elif a == b {
      C1.stdout{"a is equals b\n"}
   } else {
      C1.stdout{"b is larger than a\n"}
   }

   // *COMPILE ERROR*, b = 1 must be surrounded by `{` and `}`
   if a == 7
      b = 1;
   return 0;
}
```

## Switch statements
Unlike in other C-like programming languages, `break` are not used after the `case` statement ends.
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   a! = 3;
   switch a {
      case 1 {
         C1.stdout{"a is 1\n"}
      }
      case 2 {
         C1.stdout{"a is 2\n"}
      }
      default {
         C1.stdout{"a is neither 1 or 2\n"}
      }
   }
}
```

## Advanced usage of Switch statement
Here's an advanced usage of `switch` statement where `case` statements are located on other files. This can be used to **emulate virtual methods** in C++.

- In main.cp1:
```cpone
require "LibCp1/stdout.cp1";
require "cat.cp1";
require "dog.cp1";
using C1 = LibCp1;
enum AnimalType[#cow, #cat, #dog]:u8;
struct Animal[type:AnimalType] {
   make-sound(anm:this) {
      // Advanced use of switch statement.
      // This will collect functions that has '@case.speak()' attribute
      // across different .cp1 files under the 'Animal' namespace.
      switch.speak(anm) anm.type {
         case #cow {
            C1.stdout{"Moooo\n"}
         }
         default {
            C1.stdout{"Unknown animal type\n"}
         }
      }
   }
}
main():intc {
   var anm:Animal.;
   anm.type = #cow;
   anm.make-sound(); // Moooo
   anm.type = #cat;
   anm.make-sound(); // Meeooww
   anm.type = #dog;
   anm.make-sound(); // Arrrfff
   return 0;   
}
```
- In cat.cp1
```cpone
using C1 = LibCp1;
using Animal { // Go inside the namespace of struct Animal
   // cp1 will call this function on case #cat of the switch statement in main.cp1.
   speak-cat(anm:this) @case.speak() {
      C1.stdout{"Meeooww\n"}
   }
}
```
- In dog.cp1
```cpone
using C1 = LibCp1;
using Animal { // Go inside the namespace of struct Animal
   // cp1 will call this function on case #dog of the switch statement in main.cp1.
   speak-dog(anm:this) @case.speak() {
      C1.stdout{"Arrrfff\n"}
   }
}
```
