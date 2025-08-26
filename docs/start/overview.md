---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Brief Overview

## Running a Cp1 program
On your command prompt (Windows) or terminal (Linux, macOS, BSD), navigate to the location of cp1 folder and run:
```
cd cp1 # Assuming that cp1 is in your User/Home folder
cp1-run examples/01-hello.cp1     # To run the hello world example program
cp1-run examples/02-methods.cp1   # To run another example
cp1-run examples/03-loops.cp1     # To run another example
cp1-run examples/04-variables.cp1 # To run another example
cp1-run examples/05-virtual.cp1   # To run another example
```

## Generating a C code
If you prefer to generate a C code instead of running a cp1 file, you can type the following:
```
cp1-compile -c hello.c examples/01-hello.cp1
```

## Parts of a Cp1 program
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
require "LibCp1/stdout.cp1"; // Require. For including a cp1 file for compilation.
using C1 = LibCp1; // Tells the compiler that we will refer to LibCp1 as C1.

// A metaprogram named '#MakeAFunction'
meta #MakeAFunction {
   using C1 = LibCp1;
   ${arg.name}() { // A function declaration using arg.name as the function's name.
      C1.stdout{"${arg.message}\n"} // A print function, to display a message.
   }
}

// Usage of the metaprogram above
#MakeAFunction{name:"Greet",message:"Hello World"}
#MakeAFunction{name:"AskAge",message:"How old are you?"}

struct Dog[ // A declaration of struct 'Dog'
   sitting:bool, // A member variable
] {
   sit(dog:this) { // A method named sit
      if dog.sitting {
         C1.stdout{"*does nothing*\n"}
      } else {
         dog.sitting = true;
         C1.stdout{"*sits*\n"}
      }
   }
}

var dog-count:i32; // A global variable

main():intc { // The main function. intc is for C compatibility, use i32 elsewhere.
   // Function calls to the metaprograms we created above
   Greet();
   AskAge();
   
   // Variable declaration. The dot '.' after the 'Dog' means 'dog' is not a pointer.
   var dog:Dog.;
   dog.sit();

   // Increment the 'dog' global variable. Notice the dot '.' before
   // the variable name. The dot indicates we are accessing a global variable
   // instead of a local variable.
   .dog-count++;

   // Another variable declaration. No dot '.' means 'dog2' is a pointer.
   // By default, all variables are initialized to zero or null.
   var dog2:Dog;
   dog2.sit(); // The program *WILL CRASH* because 'dog2' is pointing to null
   .dog-count++;

   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
require "LibCp1/stdout.cp1"; // Require. For including a cp1 file for compilation.
using C1 = LibCp1; // Tells the compiler that we will refer to LibCp1 as C1.

// A metaprogram named '#MakeAFunction'
meta #MakeAFunction {
   using C1 = LibCp1;
   ${arg.name}(): // A function declaration using arg.name as the function's name.
      C1.stdout{"${arg.message}\n"} // A print function, to display a message.
}
// Usage of the metaprogram above
#MakeAFunction{name:"Greet",message:"Hello World"}
#MakeAFunction{name:"AskAge",message:"How old are you?"}

struct Dog[ // A declaration of struct 'Dog'
   sitting:bool, // A member variable
]:
   sit(dog:this): // A method named sit
      if dog.sitting:
         C1.stdout{"*does nothing*\n"}
      else:
         dog.sitting = true;
         C1.stdout{"*sits*\n"}

var dog-count:i32; // A global variable

main():intc: // The main function. intc is for C compatibility, use i32 elsewhere.
   // Function calls to the metaprograms we created above
   Greet()
   AskAge()
   
   // Variable declaration. The dot '.' after the 'Dog' means 'dog' is not a pointer.
   var dog:Dog.
   dog.sit()

   // Increment the 'dog' global variable. Notice the dot '.' before
   // the variable name. The dot indicates we are accessing a global variable
   // instead of a local variable.
   .dog-count++

   // Another variable declaration. No dot '.' means 'dog2' is a pointer.
   // By default, all variables are initialized to zero or null.
   var dog2:Dog
   dog2.sit() // The program *WILL CRASH* because 'dog2' is pointing to null
   .dog-count++

   return 0
```
</TabItem>
</Tabs>
