/**
 * @Aim the string,number & unknown should be inferred by the createSet function
 */

 const createSet = () => {
    return new Set();
 };

 const stringSet = createSet<string>();
 const numberSet = createSet<number>();
 const unknownSet = createSet<unknown>();

 /**
  * @Solution - declare TSet as generic function with no assignment but the return type of generic function to be a set of generic TSet type
  */
 const createTypedSet = <TSet>(): Set<TSet> => {
    return new Set();
 }

 const stringTypedSet = createSet<string>();
 const numberTypedSet = createSet<number>();
 const unknownTypedSet = createSet();


