---
sidebar_position: 11
---

# Where are the Pointers of C?

In Cp1, there are no pointers. Instead there are arrays `[]`, reference `&` and the `ref` type. This simplifies usage of C and also makes the code easier to read and understand.
```cpone
struct Position[x:i32, y:i32];
var pos:Position; // A pointer to a 'Position'. Equivalent to 'struct Position* pos' in C.
pos.x = 1; // Program *WILL CRASH* because 'position' is null

// Adding '.' after the type will not make it a pointer.
// Below is equivalent to 'struct Position loc' in C.
var loc:Position.;
loc.x = 1; // Program will not crash because 'location' is not a pointer

var name:char @const[]; // Equivalent to 'const char* name' in C

var width:f32&; // A reference to f32. Equivalent to 'float* width' in C

var data:ref; // A reference to anything. Equivalent to 'void* data' in C
```
