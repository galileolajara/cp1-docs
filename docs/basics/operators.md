---
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Operators

## Structure-Of-Array Member Operator
Cp1 have an operator that facilitates data-oriented programming. *More to like this in the future*.
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
// @soa-field attribute enables the Structure-Of-Array Member Operator
enum Player[]:u8 @soa-field(.player-data.);

struct PlayerData[
   x:u8[256],
   y:u8[256],
];

var player-data:PlayerData.;

main():intc {
   var p:Player; // Declare variable 'p'. Initialized to zero value.
   p[]x = 0; // Syntactic sugar to .player-data.x[p] = 0;
   p[]y = 0; // Syntactic sugar to .player-data.y[p] = 0;
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
// @soa-field attribute enables the Structure-Of-Array Member Operator
enum Player[]:u8 @soa-field(.player-data.);

struct PlayerData[
   x:u8[256],
   y:u8[256],
];

var player-data:PlayerData.;

main():intc:
   var p:Player // Declare variable 'p'. Initialized to zero value.
   p[]x = 0 // Syntactic sugar to .player-data.x[p] = 0
   p[]y = 0 // Syntactic sugar to .player-data.y[p] = 0
   return 0
```
</TabItem>
</Tabs>

## Parenthesis in operators
You must use parenthesis when dealing with different operators:
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
main():intc {
   x! = 1 + 7 * 2; // *COMPILE ERROR*, unexpected token '*', add more parenthesis
   y! = (1 + 7) * 2; // Good, have enough parenthesis
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
main():intc:
   x! = 1 + 7 * 2 // *COMPILE ERROR*, unexpected token '*', add more parenthesis
   y! = (1 + 7) * 2 // Good, have enough parenthesis
   return 0
```
</TabItem>
</Tabs>

## Comparison Operators

<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   if 1 == 1 { C1.stdout{"1 is equal to 1\n"} }
   if 0 != 1 { C1.stdout{"0 is not equal to 1\n"} }
   if 3 > 2  { C1.stdout{"3 is greater than 2\n"} }
   if 2 >= 2 { C1.stdout{"2 is greater than or equal to 2\n"} }
   if 1 < 2  { C1.stdout{"1 is less than 2\n"} }
   if 2 <= 2 { C1.stdout{"2 is less than or equal to 2\n"} }
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc:
   if 1 == 1:
      C1.stdout{"1 is equal to 1\n"}
   if 0 != 1:
      C1.stdout{"0 is not equal to 1\n"}
   if 3 > 2:
      C1.stdout{"3 is greater than 2\n"}
   if 2 >= 2:
      C1.stdout{"2 is greater than or equal to 2\n"}
   if 1 < 2:
      C1.stdout{"1 is less than 2\n"}
   if 2 <= 2:
      C1.stdout{"2 is less than or equal to 2\n"}
   return 0
```
</TabItem>
</Tabs>

## Math Operators

<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   C1.stdout{1 + 1  "\n"} // Addition
   C1.stdout{2 - 1  "\n"} // Subtraction
   C1.stdout{5 * 4  "\n"} // Multiplication
   C1.stdout{9 / 3  "\n"} // Division
   C1.stdout{13 % 4 "\n"} // Modulo (remainder of)
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   C1.stdout{1 + 1  "\n"} // Addition
   C1.stdout{2 - 1  "\n"} // Subtraction
   C1.stdout{5 * 4  "\n"} // Multiplication
   C1.stdout{9 / 3  "\n"} // Division
   C1.stdout{13 % 4 "\n"} // Modulo (remainder of)
   return 0;
}
```
</TabItem>
</Tabs>

## Bitwise Operators

<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   C1.stdout{3 & 1   "\n"} // Bit-wise And
   C1.stdout{2 | 1   "\n"} // Bit-wise Or
   C1.stdout{1 ^ 1   "\n"} // Bit-wise XOR
   C1.stdout{1 << 7  "\n"} // Bit-wise left shift
   C1.stdout{7 >> 2  "\n"} // Bit-wise right shift
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc:
   C1.stdout{3 & 1   "\n"} // Bit-wise And
   C1.stdout{2 | 1   "\n"} // Bit-wise Or
   C1.stdout{1 ^ 1   "\n"} // Bit-wise XOR
   C1.stdout{1 << 7  "\n"} // Bit-wise left shift
   C1.stdout{7 >> 2  "\n"} // Bit-wise right shift
   return 0
```
</TabItem>
</Tabs>

## Boolean Operators
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc {
   C1.stdout{true && true && true  "\n"} // And
   C1.stdout{true || false || true "\n"} // Or

   // A different form of boolean operator
   C1.stdout{(&&, true, true, true, true)  "\n"} // Ands
   C1.stdout{(||, true, true, true, true)  "\n"} // Ors
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():intc:
   C1.stdout{true && true && true  "\n"} // And
   C1.stdout{true || false || true "\n"} // Or

   // A different form of boolean operator
   C1.stdout{(&&, true, true, true, true)  "\n"} // Ands
   C1.stdout{(||, true, true, true, true)  "\n"} // Ors
   return 0
```
</TabItem>
</Tabs>

## Assignment Operators
- `x = 7`. Assign x to have a value of 7.
- `x += 9`. Assign x to have a value of x + 9.
- `x -= 1`. Assign x to have a value of x - 1.
- `x *= 2`. Assign x to have a value of x * 2.
- `x /= 3`. Assign x to have a value of x / 3.
- `x &= 1`. Assign x to have a value of x & 1.
- `x |= 2`. Assign x to have a value of x | 2.
- `x ^= 3`. Assign x to have a value of x ^ 3.
- `x <<= 1`. Assign x to have a value of x \<< 1.
- `x >>= 2`. Assign x to have a value of x >> 2.

## Unary Operators
- `!x`. NOT x.
- `~x`. Bit-wise NOT x.
- `&x`. Reference to x. `&x` is a `ref` type:
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
// A hypothetical function that writes data to a file
write-to-file(path:char @const[], data:ref, size:usz);
main():intc {
   var x = 12345; // Declare 'x' as i32

   // Get the reference of 'x' and write the contents of 'x' to a file.
   write-to-file("test.txt", &x, 4);
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
// A hypothetical function that writes data to a file
write-to-file(path:char @const[], data:ref, size:usz);
main():intc:
   var x = 12345 // Declare 'x' as i32

   // Get the reference of 'x' and write the contents of 'x' to a file.
   write-to-file("test.txt", &x, 4)
   return 0
```
</TabItem>
</Tabs>

## Array Index Operator
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main() {
   var text = "Hello world";
   C1.stdout{text[0] "\n"} // Array index operator. Get the first element in 'text'.
   C1.stdout{text[1] "\n"} // Array index operator. Get the second element in 'text'.
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;
main():
   var text = "Hello world"
   C1.stdout{text[0] "\n"} // Array index operator. Get the first element in 'text'.
   C1.stdout{text[1] "\n"} // Array index operator. Get the second element in 'text'.
```
</TabItem>
</Tabs>

## SizeOf Operator
The sizeof operator in C is achieved via putting `[usz]` after the type.
<Tabs groupId="syntax-mode">
<TabItem value="standard" label="Standard Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

struct Data[x:i32, y:f32, z:bool];

main():intc {
   C1.stdout{"sizeof Data is " Data[usz] "\n"}
   return 0;
}
```
</TabItem>
<TabItem value="basic" label="Basic Syntax Mode">
```cpone
require "LibCp1/stdout.cp1";
using C1 = LibCp1;

struct Data[x:i32, y:f32, z:bool];

main():intc:
   C1.stdout{"sizeof Data is " Data[usz] "\n"}
   return 0
```
</TabItem>
</Tabs>

## Ternary Operator *(planned)*
There will be a support for ternary operator. Stay tuned!

## Operator Overloading *(planned)*
There will be a support for operator overloading. Stay tuned!
