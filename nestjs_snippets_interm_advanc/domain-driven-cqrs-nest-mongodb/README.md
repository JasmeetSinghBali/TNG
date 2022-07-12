> 🦘 command-query-responsibility segregation [CQRS]

- pattern of domain driven design where the models/definations of the entity into two seprate models

1. write operations [UPDATE]- like updating a user refers to as COMMAND
2. read/query operations [GET] - like fetch data refers to as QUERY

AIM- the idea is to represent the model in two different ways one or reading from it and other when we updating it.

Conclusion- helps in loosely coupled and scalable architecture in contrast to typical service-driven design.

> 🎯 IMP: starter campers-basic-api setup that will be converted into CQRS design
> hashRefCommit: f2ba3a44ca71d42e943d39143669c095528ab720

> Imp Notes [take care while applying cqrs architecture]

1. break down the controllers operations into specific tasks like say their is route to update user data is controller than breaking it down further into a specific task would be update user's password which is a specific updating task. ref: updateCamperAllergies in camper.controller.ts

2. CQRS comes with logic of each operations in the system with its own command-handlers & query-handlers


                yarn add @nestjs/cqrs

                # in campers entity
                *campers
                    *db_related_operations

3. In domain-driven design approach we have all the data design/schema in a class and also the methods that manipulate & use that data resides/live the same class that way data encapsulation can be achieved.

4. Note- javascript passes pass by reff(ACTUAL) for non-primitive data type and pass by value(COPY) for primitive data types by default, u can explicitely pass this by pass by value(COPY) for non-primitive data types by using spread operator ref: Camper.ts

5. Class that convert schema/documet-> model and model->schema ref: db_related_operations/camper-schema.factory.ts

6. 📝:IMP create camper repository ref: db_related_operations/camper-entity.repository.ts
   Note- the camper-entity.repository works with Camper.ts for command based operations i.e write related db changes

7. set up commands handler & controller for create-camper operation

8. finally wiring up create-camper.handler and then emit event for other part of the program to know about the camper create command

9. events are triggered after command has been executed
