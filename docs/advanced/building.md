---
sidebar_position: 5
---

# Building Cp1 from source
When building Cp1 using the cp1 source files, make sure you have `ninja` and `re2c` installed. Type:
```
ninja -f build-gcc.ninja # To build using gcc
ninja -f build-clang.ninja # To build using clang
ninja -f build-tcc.ninja # To build using tcc
```
The resulting `cp1-*` binaries are located at `out` directory.
