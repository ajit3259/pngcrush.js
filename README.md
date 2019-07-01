# pngcrush.js

Port of pngcrush to javaScript using Emscripten

PNGCRUSH is a free and open-source command-line utility for optimizing PNG image files. It reduces the size of the file losslessly – that is, the resulting "crushed" image will have the same quality as the source image.

More Info : https://pmt.sourceforge.io/pngcrush/

## Getting Started

Emscripten is a toolchain for compiling to asm.js and WebAssembly, built using LLVM, that lets you run C and C++ on the web at near-native speed without plugins.

More Info : https://emscripten.org/

Installation guide: https://emscripten.org/docs/getting_started/downloads.html


### Installing

For Creating pngcrush.js
After installing emscripten, add emcc to environment variable

```
cd emsdk
source ./emsdk_env.sh
```

Clone this repo

To generate pngcrush.bc (bit code file)

Source files for pngcrush available at https://sourceforge.net/projects/pmt/files/
pngcrush version used : 1.8.11
```
cd pngcrush.js
cd pngcrush-1.8.11/
make
cp pngcrush ../pngcrush.bc
cd ..
```

Generate pngcrush.js

```
emcc pngcrush.bc -o pngcrush.js
```

## Contributing

<a href="https://github.com/ajit3259/"><b>Ajit Kumar</b></a><br>
<a href="https://github.com/YasasviPeruvemba/"><b>Yasasvi Peruvemba</b></a>

## pngcrush Authors

The author of pngcrush is Glenn Randers-Pehrson, glennrp@users.sf.net

 | pngcrush-1.8.11
 |    Copyright (C) 1998-2002, 2006-2016 Glenn Randers-Pehrson
 |    Portions Copyright (C) 2005 Greg Roelofs
 | This is a free, open-source program.  Permission is irrevocably
 | granted to everyone to use this version of pngcrush without
 | payment of any fee.
 | Executable name is pngcrush
 | It was built with   bundled libpng-1.6.28
 | and is running with bundled libpng-1.6.28
 |    Copyright (C) 1998-2004, 2006-2016 Glenn Randers-Pehrson,
 |    Copyright (C) 1996, 1997 Andreas Dilger,
 |    Copyright (C) 1995, Guy Eric Schalnat, Group 42 Inc.,
 | and bundled zlib-1.2.11, Copyright (C) 1995-2017,
 |    Jean-loup Gailly and Mark Adler,
 | and using "clock()".
 | It was compiled with gcc version 7.4.0.


If you have modified this source, you may insert additional notices
immediately after this sentence.
Copyright (C) 1998-2002, 2006-2016 Glenn Randers-Pehrson
Portions Copyright (C) 2005 Greg Roelofs

DISCLAIMER: The pngcrush computer program is supplied "AS IS".
The Author disclaims all warranties, expressed or implied, including,
without limitation, the warranties of merchantability and of fitness
for  any purpose.  The Author assumes no liability for direct, indirect,
incidental, special, exemplary, or consequential damages, which may
result from the use of the computer program, even if advised of the
possibility of such damage.  There is no warranty against interference
with your enjoyment of the computer program or against infringement.
There is no warranty that my efforts or the computer program will
fulfill any of your particular purposes or needs.  This computer
program is provided with all faults, and the entire risk of satisfactory
quality, performance, accuracy, and effort is with the user.

LICENSE: Permission is hereby irrevocably granted to everyone to use,
copy, modify, and distribute this computer program, or portions hereof,
purpose, without payment of any fee, subject to the following
restrictions:

1. The origin of this binary or source code must not be misrepresented.

2. Altered versions must be plainly marked as such and must not be
misrepresented as being the original binary or source.

3. The Copyright notice, disclaimer, and license may not be removed
or altered from any source, binary, or altered source distribution.

