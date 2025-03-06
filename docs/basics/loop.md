---
sidebar_position: 6
---

# The Loop statement

The usual `for` and `while` loops in other languages are merged into one `loop` keyword in cp1.

Here's the simplest form of `loop` keyword as an infinite loop:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   loop {
      C1.stdout{"Looping infinitely!!!\n"}
   }
   return 0;
}
```

Here's an example of the usual `for` loop:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   // Declare a variable named 'i' and set it to 0
   // Repeat the statements inside '{' and '}' while i is less than 10.
   // Increment i after running the statements inside '{' and '}'
   loop i = 0; i < 10; i++ {
      C1.stdout{i "\n"}
   }
   return 0;
}
```

Here's an example of the usual `while` loop:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   i! = 0;
   loop i < 10 {
      C1.stdout{i "\n"}
      i++;
   }
   return 0;
}
```

If the expression after the `loop` keyword evaluates to an **integer value** instead of a boolean value, the integer value determines how many repetitions the loop will have.
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   loop 3 { // Loop 3 times
      C1.stdout{"Hello!\n"}
   }
   return 0;
}
```

If the expression after the `loop` keyword is an **integer value**, it is only *evaluated once*. Look at this example:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   i! = 3;
   loop i { // Loop 3 times
      C1.stdout{"Hello!\n"}
      i++; // Even if i is modified, the loop will still repeat 3 times only
   }
   return 0;
}
```

When using the `loop` syntax just like the usual `for` loop, *variable declarations are optional*:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   i! = 0;
   j! = 0;
   loop ; 3; i++; j++ { // Loop 3 times. Increment i and j after printing "Hello!"
      C1.stdout{"Hello!\n"}
   }
   return 0;
}
```

You can also choose **not to increment** any variable after the `loop` keyword:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   loop i = 0, j = 0; 3 { // Loop 3 times.
      C1.stdout{"Hello!\n"}
      i++;
      j++;
   }
   return 0;
}
```

You can also omit the condition expression:
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   loop i = 0, j = 0; ; i++; j++ { // Infinite loop
      C1.stdout{"Hello!\n"}
   }
   return 0;
}
```
