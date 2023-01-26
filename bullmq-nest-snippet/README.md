> bullmq nestjs snippet ref:https://docs.bullmq.io/guide/nestjs

```bash

#Step-1
npm i @nestjs/bull bull
npm i -D @types/bull

#Step-2 [redis cloud instance]
https://app.redislabs.com/

#Step-3
register bullmq queue with injection token i.e queue name
write producer & consumer

#Step-4
npm run start:dev
make POST request at http://localhost:3000/wbprocessing

& inspect terminal
```
