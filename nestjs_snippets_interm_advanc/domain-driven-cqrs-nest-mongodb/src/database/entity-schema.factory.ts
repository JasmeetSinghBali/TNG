import { AggregateRoot } from '@nestjs/cqrs';

import { IdentifiableEntitySchema } from './identifiable-entity.schema';

export interface EntitySchemaFactory<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot
> {
  // 📝creates schema from entity(object)
  create(entity: TEntity): TSchema;
  // 📝create entity(object) from Schema
  createFromSchema(entitySchema: TSchema): TEntity;
}
