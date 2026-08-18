# System Design

## What is System Design ?

Planning how a software system should be built so it is reliable, scalable, fast, secure, and easy to maintain.

System Design is important because it helps us build applications that can scale, perform well, and remain reliable as the number of users and data grows. While coding solves a specific problem, System Design focuses on how different components like servers, databases, caches, and APIs work together to create a robust application. Good system design ensures the application is scalable, maintainable, fault-tolerant, and cost-effective

## What is Server?

A server is a computer or software program that listens for requests from clients, processes those requests, and returns an appropriate response. It provides services such as web pages, APIs, files, authentication, or database operations to other computers over a network.

## What happens when you type google.com into a browser and press Enter?

```

You type google.com
│
▼
Browser checks cache
│
▼
DNS finds Google's IP address
│
▼
Browser connects to Google's server
│
▼
HTTPS handshake
│
▼
Browser sends HTTP request
│
▼
Google processes the request
│
▼
Server sends HTML
│
▼
Browser downloads CSS/JS/Images
│
▼
Page is rendered

```

## What is Latency ?

Latency is the time taken for a single request to travel from the client to the server and back (or a single unit of work to complete). It is usually measured in milliseconds (ms).

## What is Throughput?

Throughput is the number of requests or units of work the system can handle per second. It is typically measured in requests per second (RPS) or transactions per second (TPS).

## What is scaling?

You often see that whenever someone launches their website on the internet and suddenly traffic increases, their website crashes. To prevent this, we need to scale our system.

Scaling means we need to increase the specs of our machine (like increasing RAM, CPU, storage etc) or add more machines to handle the load.

1. Vertical scaling
2. Horizantal scaling
3. Auto scaling

## Vertical Scaling (Scale Up/Down)

If we increase the specs (RAM, Storage, CPU) of the same machine to handle more load, then it is called vertical scaling.

This type of scaling is mostly used in SQL databases and also in stateful applications because it is difficult to maintain consistency of states in a horizontal scaling setup.

## Horizontal Scaling (Scale Out/In)

Vertical scaling is not possible beyond a point. We can’t infinitely increase the specs of the machine. We will hit a bottleneck, and beyond that, we can’t increase the specs.

The solution to this is to add more machines and distribute the incoming load. It is called horizontal scaling.

## Auto scaling

Auto Scaling is the process of automatically increasing or decreasing the number of application servers based on traffic, CPU usage, memory usage, or other performance metrics. It helps maintain application performance while optimizing infrastructure costs.

## CAP Theorem

This theorem states a very important tradeoff while designing any system.

CAP theorem states that in a distributed system, you can only guarantee two out of these three properties simultaneously. It’s impossible to achieve all three.

- Consistency

  Every read request returns the same result irrespective of whichever node we are reading from. This means all the nodes have the same data at the same time. In the above picture, you can see that our database cluster is consistent because every node has the same data.

- Availability
  The system is available and always able to respond to requests, even if some nodes fail. This means even if some node failures occur, the system should continue serving requests with other healthy nodes.

- Partition Tolerance

  The system continues to operate even if there is a communication breakdown or network partition between different nodes.

## database scaling

Database scaling is the process of increasing a database's ability to handle more traffic and data. Initially, we can scale vertically by upgrading the database server's CPU, memory, or storage. As the application grows, horizontal scaling becomes more effective. For read-heavy workloads, we use replication, where a primary database handles writes and replica databases handle reads. For very large datasets or write-heavy systems, we use sharding, where data is partitioned across multiple database servers. These techniques improve performance, scalability, and availability.

## SQL vs NoSQL

| Feature       | SQL                             | NoSQL                                                                  |
| ------------- | ------------------------------- | ---------------------------------------------------------------------- |
| Data Model    | Tables                          | Documents, Key-Value, Column, Graph                                    |
| Schema        | Fixed                           | Flexible                                                               |
| Relationships | Excellent (joins, foreign keys) | Usually handled differently (often embedded data or application logic) |
| Transactions  | Strong ACID support             | Varies by database; many support transactions to different degrees     |
| Scaling       | Traditionally vertical first    | Designed for horizontal scaling                                        |
| Best For      | Structured, relational data     | Large-scale, flexible or rapidly changing data                         |

## What is monolith archetecture ?

A Monolithic Architecture is an application where all the components—such as the user interface, business logic, authentication, and database access—are built, deployed, and run as a single application.

## What is Microservices Architecture

Microservices Architecture is a software architecture where an application is divided into multiple small, independent services. Each service is responsible for a specific business capability, can be developed, deployed, and scaled independently, and communicates with other services over the network using APIs or messaging.
