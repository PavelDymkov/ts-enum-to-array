import { enumToArray } from "../package/ts-enum-to-array";

test("check string values", () => {
    enum X {
        A = "a",
        B = "b",
    }

    expect(enumToArray(X)).toEqual([X.A, X.B]);
});

test("check number values", () => {
    enum X {
        A,
        B,
    }

    expect(enumToArray(X)).toEqual([X.A, X.B]);
});

test("check heterogeneous values", () => {
    enum X {
        A = "a",
        B = 1,
    }

    expect(enumToArray(X)).toEqual([X.A, X.B]);
});
