
export class CharacterCounter {
    static CountVisibleCharacters(input: string) : number {
        return [...input].length;
        //const segmenter = new Intl.Segmenter("en");
        //const segments = segmenter.segment(input);
        //return segments.length;
    }

    static CountUTF_16Characters(input: string) : number {
        return input.length;
    }

    static CountUTF_8Characters(input: string) : number {
        const encoder = new TextEncoder();
        return encoder.encode(input).length;
    }
}