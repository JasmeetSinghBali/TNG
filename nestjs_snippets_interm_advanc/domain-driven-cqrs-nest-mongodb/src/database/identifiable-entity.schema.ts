import { Prop } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';

// 📝 when a new document is added it wil have this _id by default added to it
// 📝an abstract class is a class that has declared method not implemented code inside it further abstract class created to be base class for future classes
export abstract class IdentifiableEntitySchema {
  @Prop()
  readonly _id: ObjectID;
}
