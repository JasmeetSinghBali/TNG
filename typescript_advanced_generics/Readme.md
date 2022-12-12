```bash
ref: https://www.typescriptlang.org/docs/handbook/2/generics.html
```

> ## Typescript Generics

> A run down on typescript first, what is even the need in contrast to javascript

- Typescript being the core backbone of generating type inferences for the consumers of the API that is build using typescript.

- Typescript provides type checking, as real time data is of unknown types generally.

- The idea of using typescript is always good when writing any sort of abstractions.

- in contrast to javascript where you would consume anything inside function & then return anything out of the function which basically exposes the structuring/shape of the data & its types to be decided by the end-user or consumer when they feed in data to these functions.

To sum up , typescript provides the way to build code(i.e provide type inferences) for writing code in contrast to javascript.

> Generics?

- consider a interface book

```bash

# interface book

authorID:
authorName:
title:
publishedOn:

```

- for example- now you want to have book with not a fixed interface rather an agile interface where you want to define your structure of the book at the time of processing it or at later stage.

- real-scenario or consider a case where you make an axios call to api and you are not aware about the data that is returned from api, then generics will come in that attaches type to the data accordingly

> Implementing generics

- the approach is to pass arguments to the generic interface so that it can be infered the time of using it a/c to the structure of the data that is passed to it. ref: remove.redundancy.ts

- technically , declaring generics as types is always good as types can represent anything while interfaces can only represent objects & functions.
