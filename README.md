# ts-enum-to-array

![test: passing](https://raw.githubusercontent.com/PavelDymkov/ts-enum-to-array/master/badges/test.svg)
![license: ISC](https://raw.githubusercontent.com/PavelDymkov/ts-enum-to-array/master/badges/license.svg)

Transform an enum to array of values.

## Usage

```ts
import { enumToArray } from "ts-enum-to-array";

enum X {
    A,
    B,
}

const xValues = enumToArray(X); // [X.A, X.B]
```
