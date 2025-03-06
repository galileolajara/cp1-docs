---
sidebar_position: 1
---

# Enums, Structs and Unions

In cp1, names of enum, struct or union must begin with an upper-case letter:
```cpone
struct Animal[]; // A valid struct with no member variable.
struct animal[]; // *COMPILE ERROR*, name must begin with upper-case letter
```

You can declare an enum, struct or union in one cp1 file and declare methods on another cp1 file:

- In main.cp1
```cpone
require "LibCp1/stdout.cp1";
require "animal.cp1";
using C1 = LibCp1;
enum AnimalType[#cow, #cat, #dog]:u8; // An enum that's an 8-bit unsigned integer
struct Animal[type:AnimalType, num-legs:u8] { // Declare a struct
   sit(anm:this) { // Declare a method
      C1.stdout{"*sits*\n"}
   }
}
main():intc {
   return 0;
}
```
- In animal.cp1
```cpone
using Animal { // Go inside the namespace of the 'Animal' struct
   make-sound(anm:this) { // Declare a method for 'Animal' struct
      switch anm.type {
         case #cow {
            C1.stdout{"Moooo\n"}
         }
         case #cat {
            C1.stdout{"Meeooww\n"}
         }
         case #dog {
            C1.stdout{"Arrrfff\n"}
         }
      }
   }
}
using AnimalType { // Go inside the namespace of the 'AnimalType' enum
   to-string(type:this):char[] { // Declare a method for 'AnimalType' enum
      switch type {
         case #cow { return "cow" }
         case #cat { return "cat" }
         case #dog { return "dog" }
      }
      return "*unknown*";
   }
}
```
