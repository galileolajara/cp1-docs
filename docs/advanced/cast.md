---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Casting

There are two ways to cast variables. First is using `var` keyword and explicitly specify a different type.
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
main() {
   var x = 7.0f; // Declare 'x' as a 32-bit float with a value of 7.0f.

   var y:i32 = x; // Cast 'x' to i32.
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
main():
   var x = 7.0f // Declare 'x' as a 32-bit float with a value of 7.0f.

   var y:i32 = x // Cast 'x' to i32.
```
</TabItem>
</Tabs>

Second is using colon `:` symbol.
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
main() {
   var x = 7.0f; // Declare 'x' as a 32-bit float with a value of 7.0f

   var y; // Declare 'y' without a type and determine the type later.
   y = x:i32; // Cast 'x' to i32. 'y' is now i32.
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
main() {
   var x = 7.0f // Declare 'x' as a 32-bit float with a value of 7.0f

   var y // Declare 'y' without a type and determine the type later.
   y = x:i32 // Cast 'x' to i32. 'y' is now i32.
```
</TabItem>
</Tabs>

The `var` keyword allows casting to a complex type:
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

// A hypothetical function that reads a file
// and returns the contents.
read-file(path:char[], file-size:usz&):ref;

main():intc {
   data! = read-file("test.txt", file-size!);

   var ascii:u8[] = data; // Cast to an array of unsigned 8-bit integers
   loop i = 0; file-size; i++ {
      C1.stdout{"An ascii value of " ascii[i] "\n"}
   }
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

// A hypothetical function that reads a file
// and returns the contents.
read-file(path:char[], file-size:usz&):ref;

main():intc:
   data! = read-file("test.txt", file-size!)

   var ascii:u8[] = data // Cast to an array of unsigned 8-bit integers
   loop i = 0; file-size; i++:
      C1.stdout{"An ascii value of " ascii[i] "\n"}
   return 0
```
</TabItem>
</Tabs>

Whereas the colon `:` symbol does not permit casting to complex type:
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

// A hypothetical function that reads a file
// and returns the contents.
read-file(path:char[], file-size:usz&):ref;

main():intc {
   data! = read-file("test.txt", file-size!);

   var ascii = data:u8[]; // *COMPILE ERROR*, unexpected token '['
   loop i = 0; file-size; i++ {
      C1.stdout{"An ascii value of " ascii[i] "\n"}
   }
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

// A hypothetical function that reads a file
// and returns the contents.
read-file(path:char[], file-size:usz&):ref;

main():intc:
   data! = read-file("test.txt", file-size!)

   var ascii = data:u8[] // *COMPILE ERROR*, unexpected token '['
   loop i = 0; file-size; i++:
      C1.stdout{"An ascii value of " ascii[i] "\n"}
   return 0
```
</TabItem>
</Tabs>

You can use the colon `:` symbol for specifying the type of a number literal:
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
main():intc {
   x! = 7:f32; // integer literal '7' is now a 32-bit float
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
main():intc:
   x! = 7:f32 // integer literal '7' is now a 32-bit float
   return 0
```
</TabItem>
</Tabs>
