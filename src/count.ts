
export class CharacterCounter {
    static CountVisibleCharacters(input: string) : number {
        return [...input].length;
    }

    static CountUTF_16Characters(input: string) : number {
        return input.length;
    }

    static CountUTF_8Characters(input: string) : number {
        const encoder = new TextEncoder();
        return encoder.encode(input).length;
    }
}