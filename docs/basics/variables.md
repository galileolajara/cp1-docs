---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Variables and Data Types

## Two ways to declare variables
- First is through the `var` keyword:
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
main():intc {
   var w = 1; // Automatically declared as i32 (32-bit signed integer)
   var x = 1.0f; // Automatically declared as f32 (32-bit float)
   var y:f32; // You can specify the variable type using the colon ':' symbol
   var z:i32 = 7;

   // You can declare a variable without a type and without assignment operator '='
   var a;
   // The type of 'a' will be determined based on its first usage.
   // In this case, = 7.0f will cause 'a' to have f32 type (32-bit float)
   a = 7.0f;

   // *COMPILE ERROR*, 'a' was already declared as 32-bit float and
   // cannot be set to signed integer '7'.
   a = 7;
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
main():intc:
   var w = 1 // Automatically declared as i32 (32-bit signed integer)
   var x = 1.0f // Automatically declared as f32 (32-bit float)
   var y:f32 // You can specify the variable type using the colon ':' symbol
   var z:i32 = 7

   // You can declare a variable without a type and without assignment operator '='
   var a
   // The type of 'a' will be determined based on its first usage.
   // In this case, = 7.0f will cause 'a' to have f32 type (32-bit float)
   a = 7.0f

   // *COMPILE ERROR*, 'a' was already declared as 32-bit float and
   // cannot be set to signed integer '7'.
   a = 7
   return 0
```
</TabItem>
</Tabs>
- Second is by appending `!` in the variable name:
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

add(a:i32, b:i32, c:i32&) {
   c = a + b;
}

main():intc {
   x! = 1; // Declare variable 'x' then assign it with a value of '1'

   // Declare variable 'sum' then use the function argument's type
   // to determine the type of 'sum', which is i32.
   add(1, 7, sum!);

   C1.stdout{"1 + 7 = " sum "\n"}
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

add(a:i32, b:i32, c:i32&):
   c = a + b

main():intc:
   x! = 1 // Declare variable 'x' then assign it with a value of '1'

   // Declare variable 'sum' then use the function argument's type
   // to determine the type of 'sum', which is i32.
   add(1, 7, sum!)

   C1.stdout{"1 + 7 = " sum "\n"}
```
</TabItem>
</Tabs>

## Data types in Cp1
- `i8`, `i16`, `i32`, `i64` - 8/16/32/64-bit signed integer.
- `u8`, `u16`, `u32`, `u64` - 8/16/32/64-bit unsigned integer.
- `isz`, `usz` - signed/unsigned integer that's 32-bit in 32-bit programs, and 64-bit in 64-bit programs.
- `f32`, `f64` - 32/64-bit floating point.
- `ref` - equivalent to `void*` in C. A pointer/reference to anything.
- `char` - equivalent to `char` in C. An 8-bit character data type.
- `intc` - equivalent to `int` in C. Used for compatibility with C, use `i8`/`i16`/`i32`/`i64` elsewhere.
- `bool` - A boolean data type.

## Variable initialization
Variables are initialized to `0` or `null` by default. If you don't want this behavior, use `?` symbol.
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
add(a:i32, b:i32, c:i32&) {
   c = a + b;
}
main():intc {
   var x:f32; // Initialized to 0.0f
   var y:i32 = ?; // Uninitialized variable, can be a garbage value at run-time

   // Variable 'a' is initialized to zero before passing it as an argument
   add(1, 7, a!);

   // Declare a variable 'b' but don't initialize it to zero using '?' symbol
   add(1, 7, b?);
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
add(a:i32, b:i32, c:i32&):
   c = a + b

main():intc:
   var x:f32 // Initialized to 0.0f
   var y:i32 = ? // Uninitialized variable, can be a garbage value at run-time

   // Variable 'a' is initialized to zero before passing it as an argument
   add(1, 7, a!)

   // Declare a variable 'b' but don't initialize it to zero using '?' symbol
   add(1, 7, b?)
   return 0
```
</TabItem>
</Tabs>

## Global variables
Global variables are accessed with a dot `.` prefix. This is in contrast to local variables where there are no prefix.
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
var counter:i32; // Global variable

main():intc {
   .counter = 7; // Set global variable 'counter' to 7

   counter = 8; // *COMPILE ERROR*, local variable 'counter' was not found
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
var counter:i32; // Global variable

main():intc:
   .counter = 7 // Set global variable 'counter' to 7

   counter = 8 // *COMPILE ERROR*, local variable 'counter' was not found
   return 0
```
</TabItem>
</Tabs>
Unlike local variables, global variables does not have auto variable type deduction so type must be specified when declaring them.
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
var counter; // *COMPILE ERROR*, expects ':' and a type after 'counter'.

main():intc {
   .counter = 7; // Set global variable 'counter' to 7
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
var counter; // *COMPILE ERROR*, expects ':' and a type after 'counter'.

main():intc:
   .counter = 7 // Set global variable 'counter' to 7
   return 0
```
</TabItem>
</Tabs>

## The `@const` attribute
Currently, the only supported way of *const correctness* is by adding `@const` attribute after the type.
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

print(msg:char @const[]) { // Note that there is a space before '@const'
   C1.stdout{msg "\n"}
}

main():intc {
   print("Hello world");
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

print(msg:char @const[]): // Note that there is a space before '@const'
   C1.stdout{msg "\n"}

main():intc:
   print("Hello world");
   return 0
```
</TabItem>
</Tabs>
