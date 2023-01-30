import words from "lodash/words";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import type { Document } from "@contentful/rich-text-types";

const avgWPM = 240;

const calculateTTR = (content: Document) => {
    const text = documentToPlainTextString(content);
    const wordCount = words(text).length;
    let ttr = Math.round(wordCount / avgWPM);
    
    return ttr > 0
        ? ttr 
        : 1;
}

export { calculateTTR };