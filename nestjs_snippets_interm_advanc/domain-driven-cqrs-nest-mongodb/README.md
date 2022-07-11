> 🦘 command-query-responsibility segregation [CQRS]

- pattern of domain driven design where the models/definations of the entity into two seprate models

1. write operations [UPDATE]- like updating a user refers to as COMMAND
2. read/query operations [GET] - like fetch data refers to as QUERY

AIM- the idea is to represent the model in two different ways one or reading from it and other when we updating it.

Conclusion- helps in loosely coupled and scalable architecture in contrast to typical service-driven design.
