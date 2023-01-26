> Set up basic kafka core nestjs

```bash
nest new nest-kafka
cd nest-kafka
yarn add kafkajs

# generate kafka module
nest generate module kafka
```

**Their will be 2 services producer & consumer service**

- In kafka the events and messages are organized and maintained in a logical order of virtual grouping called topics

- Install & setup kafka locally ref: https://kafka.apache.org/quickstart

```bash
# follow the reff above and start kafka instance locally on machine
yarn start:dev

# success message that consumer joined the group with group-id with nestjs application and group protocol round robin

# make a get request at localhost:3000 which produces a message and consumer logs out the topics from the producers
```

> Kafka snippet upgrade

1. error-handling
2. retry mech to push failed messages/topics
3. SOLID design approach
4. if retry mech fails then persist these failing messaging in mongoDB via dead letter queue so no messages are lost
