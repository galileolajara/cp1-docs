---
sidebar_position: 4
---

# Metaprogramming
Metaprogramming in Cp1 is designed to be **simple yet powerful**. Not to mention that it is also fast to compile a metaprogram **thanks to QuickJS** of Fabrice Bellard. Metaprograms compiles **just as fast as regular codes** if they were not modified.

## Parts of Metaprograms
To understand metaprograms, we need to know two basic parts of a metaprogram:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

// Part 1: The Metaprogram
meta #MakeAFunction {
   using C1 = LibCp1;
   ${arg.name}() {
      C1.stdout{"${arg.message}\n"}
   }
}

// Part 2: Usage of the metaprogram 
#MakeAFunction{name:"Greet",message:"Hello world"}
#MakeAFunction{name:"AskAge",message:"What's your age?"}

main():intc {
   Greet();
   AskAge();
   return 0;
}
```

**The metaprogram** contains the `meta` keyword, name of the metaprogram and the code. The code will effectively become a new cp1 file for every **usage of the metaprogram**. That's why we add 'using C1 = LibCp1' again even if we already have a line for it above. You would just type regular codes inside a metaprogram but you are able to use the `${...}` syntax of JavaScript's template literals to **insert some codes at compile-time**.


**Usage of the metaprogram** contains a JSON object that will become the 'arg' variable in **the metaprogram**. Hence, `${arg.name}` is replaced by "Greet".

It is that simple. Metaprogramming of Cp1 aims to be the **easiest metaprogramming system** among today's modern languages.

Advance usage of a metaprogram is the following:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

meta #MakeAFunction {
   using C1 = LibCp1;
   ${arg.name}() {
      C1.stdout{"${arg.message}\n"}
#     if (os.platform == "win32") { // A JavaScript code. Begins with an unindented '#'.
         C1.stdout{"This metaprogram was compiled in Windows OS\n"}
#     }

      // Date.now() is a JavaScript code.
      C1.stdout{"This metaprogram was compiled on ${Date.now()}\n"}
   }
}

#MakeAFunction{name:"Greet",message:"Hello world"}
#MakeAFunction{name:"AskAge",message:"What's your age?"}

main():intc {
   Greet();
   AskAge();
   return 0;
}
```

When you run `cp1-compile` with `-D` argument, there will be a key-value pair that's added to 'D' variable inside metaprograms' codes.
```cpone
// Filename: hello.cp1
// Compile with the following command: cp1-compile -Dexcited=true -c hello.c hello.cp1

require "LibCp1/stdout.cp1";
using C1 = LibCp1;

meta #MakeAFunction {
   using C1 = LibCp1;
   ${arg.name}() {
#     if (D.excited) { // Here is where the -Dexcited=true went
         C1.stdout{"${arg.message}!!!\n"}
#     } else {
         C1.stdout{"${arg.message}\n"}
#     }
   }
}

#MakeAFunction{name:"Greet",message:"Hello world"}
#MakeAFunction{name:"AskAge",message:"What's your age?"}

main():intc {
   Greet();
   AskAge();
   return 0;
}
```

## Reflection in Metaprograms
You can get information regarding the types and functions of your program by using `@reflection` on your metaprogram.
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

// Notice the @reflection below:
meta #PrintAllTypesAndFunctions @reflection {
   using C1 = LibCp1;
   PrintAllTypesAndFunctions() {
      C1.stdout{"Here are the list of types in this program:\n"}
#     for (let type in cp1_refl) {
#        if (type == "root") continue; // Don't print the root
         C1.stdout{"- ${type}\n"}
#     }
      C1.stdout{"Here are the list of functions in this program:\n"}
#     for (let type in cp1_refl) {
#        if (type == "root") {
#           for (let func in cp1_refl[type].functions) {
               C1.stdout{"- ${func}\n"}
#           }
#        } else {
#           for (let func in cp1_refl[type].functions) {
               C1.stdout{"- ${type}.${func}\n"}
#           }
#        }
#     }
   }
}

#PrintAllTypesAndFunctions{}

main():intc {
   PrintAllTypesAndFunctions();
   return 0;
}
```

## Nested Metaprograms
It is possible to write metaprograms that have another metaprograms inside of it. Just make sure that you indent your metaprograms accordingly.
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

meta #MakeAFunction {
   using C1 = LibCp1;
   ${arg.name}() {
      C1.stdout{"${arg.message}\n"}
   }
   meta #MakeAFunctionFor${arg.name} {
      using C1 = LibCp1;

      // '\$' means evaluate arg.name on #MakeAFunctionFor${arg.name} (later)
      \${arg.name}() {
         // Evaluate arg.message on #MakeAFunction (sooner)
         C1.stdout{"${arg.message}\n"}
      }
   }
   #MakeAFunctionFor${arg.name}{name:"${arg.name2}"}
}

#MakeAFunction{name:"Greet",message:"Hello world",name2:"Greet2"}
#MakeAFunction{name:"AskAge",message:"What's your age?",name2:"AskAge2"}

main():intc {
   Greet();
   AskAge();
   Greet2();
   AskAge2();
   return 0;
}
```

## Metafunctions and Metamethods
The reason why `C1.stdout{...}` have curly braces and have different syntax than other functions is because it is a **metafunction**. Metafunctions and metamethods are syntactic sugars that allows **implementation of printf-like functions easily**. Here's how it works:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   x! = 7;

   // This code:
   C1.stdout{"Hello world " x "\n"}

   // Is equivalent to this code:
   C1.stdout(tmp!);
       tmp.stdout-reserve-cstr("Hello World ", 12u, a!);
       x.stdout-reserve(tmp, b!);
       tmp.stdout-reserve-cstr("\n", 1u, c!);
   tmp.stdout-reserve-end();

       tmp.stdout-cstr("Hello World ", 12u, a);
       x.stdout(tmp, b);
       tmp.stdout-cstr("\n", 1u, c);
   tmp.stdout-end();

   // Read cp1/include/LibCp1/stdout.cp1 to learn more
   return 0;
}
```
