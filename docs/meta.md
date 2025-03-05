---
sidebar_position: 12
---

# Metaprogramming
Metaprogramming in Cp1 is designed to be **simple yet powerful**. Not to mention that it is also fast to compile a metaprogram **thanks to QuickJS** of Fabrice Bellard. Metaprograms compiles **just as fast as regular codes** if they were not modified.

## Parts of Metaprograms
To understand metaprograms, we need to know two basic parts of a metaprogram:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

// Part 1: Code of the metaprogram
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

**Code of the metaprogram** contains the `meta` keyword, name of the metaprogram and the code. The code will effectively become a new cp1 file for every **usage of the metaprogram**. That's why we add 'using C1 = LibCp1' again even if we already have a line for it above. You would just type regular codes inside a metaprogram but you are able to use the `${...}` syntax of JavaScript's template literals to **insert some codes at compile-time**.


**Usage of the metaprogram** contains a JSON object that will become the 'arg' variable in the **code of the metaprogram**. Hence, `${arg.name}` is replaced by "Greet", and so on and so forth.

It is that simple! Metaprogramming of Cp1 aims to be the **easiest metaprogramming system** among today's modern languages.

Advance usage of the code of the metaprogram is the following:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

meta #MakeAFunction {
   using C1 = LibCp1;
   ${arg.name}() {
      C1.stdout{"${arg.message}\n"}
#     if (os.platform == "win32") { // Part 3: A JavaScript code. Begins with an unindented '#'.
         C1.stdout{"This metaprogram was compiled in Windows OS\n"}
#     }
      C1.stdout{"This metaprogram was compiled on ${Date.now()}\n"} // Date.now is a JS code.
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
// hello.cp1
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
      \${arg.name}() { // '\$' means evaluate arg.name on #MakeAFunctionFor${arg.name} (later)
         C1.stdout{"${arg.message}\n"} // Evaluate arg.message on #MakeAFunction (sooner)
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

   // Read cp1/include/LibCp1/stdout.cp1 to learn more!
   return 0;
}
```
