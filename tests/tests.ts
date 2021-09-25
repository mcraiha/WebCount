import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { CharacterCounter } from "./count.ts";

Deno.test("test 123", () => {
    const testCase: string = "123";
    assertEquals(3, CharacterCounter.CountVisibleCharacters(testCase), "Count visible characters");
    assertEquals(3, CharacterCounter.CountUTF_16Characters(testCase), "Count UTF-16 characters");
    assertEquals(3, CharacterCounter.CountUTF_8Characters(testCase), "Count UTF-8 characters");
});

Deno.test("test äiti", () => {
    const testCase: string = "äiti";
    assertEquals(4, CharacterCounter.CountVisibleCharacters(testCase), "Count visible characters");
    assertEquals(4, CharacterCounter.CountUTF_16Characters(testCase), "Count UTF-16 characters");
    assertEquals(5, CharacterCounter.CountUTF_8Characters(testCase), "Count UTF-8 characters");
});

Deno.test("test ⛳", () => {
    const testCase: string = "⛳";
    assertEquals(1, CharacterCounter.CountVisibleCharacters(testCase), "Count visible characters");
    assertEquals(1, CharacterCounter.CountUTF_16Characters(testCase), "Count UTF-16 characters");
    assertEquals(3, CharacterCounter.CountUTF_8Characters(testCase), "Count UTF-8 characters");
});

Deno.test("test 👩‍🦰", () => {
    const testCase: string = "👩‍🦰";
    assertEquals(1, CharacterCounter.CountVisibleCharacters(testCase), "Count visible characters");
    assertEquals(10, CharacterCounter.CountUTF_16Characters(testCase), "Count UTF-16 characters");
    assertEquals(22, CharacterCounter.CountUTF_8Characters(testCase), "Count UTF-8 characters");
});🦰