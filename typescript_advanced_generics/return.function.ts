/**
 * @Aim as function says return what is fed, and hovering on zero and jazz gives unknown even when we pass 0 & jazz as number & string respectively
 * 
 */

const returnWhatIFeed = (t: unknown) => {
    return t;
}

const zero = returnWhatIFeed(0);
const jazz = returnWhatIFeed("jazz");


/**
 * @solution declare a generic function instead of generic type, i.e similar to type declaration of function and the generic type declaration for the argument it takes 
 * @note here <TSomething> is type declaration & (t:TSomething) is type assignation of a generic function
*/
const returnWhatIFeedLiterally = <TSomething>(t:TSomething) => {
    return t;
}

const one = returnWhatIFeedLiterally(1);
const hiphop = returnWhatIFeedLiterally("hiphop")
