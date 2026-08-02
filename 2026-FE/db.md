# Database Interview Question and Answer

## 1. What is the difference between SQL and NoSQL databases?

The main difference is how data is stored, structured, and queried.

> **SQL Databases (Relational)**

**Examples**

- MySql
- Postgreql
- SQLite
- SQL server
- oracle

**Key Characteristics**

- Structured data
- Uses tables (rows & columns)
- Fixed Schema
- Relationships using foreign keys
- Uses SQL (Structured Query Language)

**Features**

- Strong data consistency
- Supports ACID properties
- Excellent for complex queries and joins

> **NoSQL Databases (Relational)**

**Examples**

- MongoDB
- Firebase
- Redis
- Cassandra
- DynamoDB

**Key characteristics**

- Flexible schema
- No fixed table structure
- Data stored in different formats:
  - Document
  - key-value
  - column
  - Graph

**Features**

- Easily scalable horizontally
- Designed for big data & high traffic
- Faster reads/writes in many cases
- Schema can change anytime

## 2. How does indexing work in databases?

Indexing is a technique used to improve the speed of data retrieval in databases.
An index is a separate data structure, usually a B-tree, that stores column values in sorted order along with pointers to the actual rows.

When a query is executed, instead of scanning the entire table, the database searches the index to quickly locate the required rows. This significantly reduces query time from linear search to logarithmic time.

However, indexes require additional storage and can slow down insert, update, and delete operations because the index must also be updated.

## 3. What are ACID properties in a database?

`ACID` stands for **Atomicity**, **Consistency**, **Isolation**, and **Durability**.
These properties ensure that database transactions are processed reliably and maintain data integrity.

### Atomicity

- A transaction is treated as a single unit.
- Either all operations succeed or none do.

### Consistency

- Ensures the database moves from one valid state to another.
- All rules, constraints, and validations are maintained.

### Isolation

- Multiple transactions can run at the same time without affecting each other.
- Each transaction behaves as if it is executed alone.

### Durability

- Once a transaction is committed, it remains permanent.
- Data is not lost even in system crashes or power failures.

## 4. How would you scale an API to handle millions of requests per second?

To scale an API for millions of requests per second, I would use a combination of `horizontal scaling`, `load balancing`, `caching`, and `distributed system design`.

### Horizontal Scaling

- Run multiple instances of the API instead of one.
- Scale out using containers (Docker) and orchestration tools like Kubernetes.
- Allows traffic to be distributed across many servers.

### Load Balancing

- Use a load balancer (Nginx, HAProxy, AWS ALB).
- Distributes incoming traffic evenly.
- Prevents any single server from becoming a bottleneck.

### Caching

- Use in-memory caches like Redis or Memcached.
- Cache frequently requested data.
- Reduces database load dramatically.

### Database Scaling

- Use read replicas for read-heavy workloads.
- Apply database sharding for very large datasets.
- Optimize queries and add proper indexing.

### Stateless API Design

- Keep APIs stateless.
- Store session data in Redis or JWTs.
- Makes horizontal scaling easy.

### Asynchronous Processing

- Move heavy tasks to background workers.
- Use message queues (Kafka, RabbitMQ, SQS).
- Keeps API response times fast.

### Rate Limiting & Throttling

- Protect APIs from abuse.
- Prevent traffic spikes from crashing the system.

### CDN & Edge Caching

- Use CDN (Cloudflare, Akamai).
- Serve static or cacheable content from edge locations.
- Reduces latency and backend load.

### Monitoring & Auto-scaling

- Monitor latency, CPU, memory, error rates.
- Automatically scale services based on traffic.

## 5. What is caching, and how does it improve performance?

Caching is a technique where frequently accessed data is stored in a fast storage layer, such as memory, so future requests can be served quickly without recomputing or re-fetching the data.

It improves performance by reducing response time, lowering database load, and increasing system throughput.

#### How caching improves performance

- Faster access
  - Memory access is much faster than disk or database access.

- Reduced database queries
  - Repeated requests are served from cache instead of hitting the database.

- Lower latency
  - Users get responses in milliseconds.

- Better scalability
  - Backend systems can handle more traffic with the same resources.

#### Common caching tools

- Redis
- Memcached
- CDN (Cloudflare, Akamai)
