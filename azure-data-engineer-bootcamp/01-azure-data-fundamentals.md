# Azure Data Fundamentals Bootcamp

## What is CLOUD ?

Cloud computing is the on-demand delivery of computing resources such as servers, storage, databases, networking, and software over the internet, allowing organizations to scale quickly and pay only for the resources they use instead of owning and maintaining physical infrastructure.

## What is Clound Computing ?

Cloud computing is the on-demand delivery of computing resources such as servers, storage, databases, networking, and software over the internet. It enables businesses to use these resources without owning physical infrastructure, offering benefits like scalability, high availability, flexibility, and pay-as-you-go pricing.

## What is a Data Center ?

A data center is a secure physical facility that contains servers, storage systems, networking equipment, power backup, and cooling infrastructure. It is designed to store, process, and deliver applications and data reliably. Cloud providers like Microsoft Azure, AWS, and Google Cloud operate large data centers worldwide, allowing users to access computing resources over the internet.

## What is remote server ?

A remote server is a computer located in a different physical location that is accessed over a network, typically the internet. It runs applications, stores data, and processes requests for users or other systems. Cloud platforms provide remote servers that developers can use without owning or maintaining physical hardware.

## Types of Cloud computing services

1. Infrastructure as a Service (IaaS)
2. Platform as a Service (PaaS)
3. Software as a Service (SaaS)
4. On premices

## Infrastructure as a Service (IaaS)

IaaS provides the basic infrastructure—virtual machines, storage, networking, and other computing resources. You manage the operating system and everything above it.

### You manage:

- Operating System (Windows/Linux)
- Applications
- Databases
- Runtime
- Security updates for the OS

### Cloud provider manages:

- Physical servers
- Networking
- Storage
- Data Centers

### Example

Suppose you create a Virtual Machine on Azure.

You receive:

```
Virtual Machine
4 CPU
16 GB RAM
100 GB Disk
Ubuntu
```

Now you must:

```
Install Python
Install PostgreSQL
Install Nginx
Deploy your FastAPI app
```

## Platform as a Service (PaaS)

PaaS provides a platform where you simply deploy your code. The cloud provider manages the servers, operating system, runtime, scaling, and maintenance.

### You manage:

- Application code
- Data

### Cloud provider manages:

- Servers
- Operating System
- Runtime
- Scaling
- Security patches
- Networking

### Example

You build a FastAPI application. Instead of creating a VM, `git push` push your code

Azure automatically:

```
Creates servers
Installs runtime
Configures networking
Deploys your application
Scales when traffic increases
```

## Software as a Service (SaaS)

SaaS is ready-to-use software delivered over the internet. You don't manage the infrastructure or the application itself—you simply use it.

### You manage:

- Your account
- Data

### Provider manages:

- Infrastructure
- Servers
- Software
- Updates
- Security
- Maintenance

### Examples

- Gmail
- Microsoft 365
- Dropbox
- Zoom
- Salesforce

## On premices

On-premises (On-Prem) means that a company owns, hosts, and manages its own IT infrastructure (servers, storage, networking, databases, etc.) within its own office or private data center.

Instead of renting resources from a cloud provider, the company buys and maintains everything itself.

## What is Fault tolerance ?

Fault tolerance is the ability of a system to continue operating even when one or more components fail. It is achieved by eliminating single points of failure using techniques such as redundant servers, data replication, load balancing, and multiple availability zones. The goal is to ensure that users experience little or no disruption when failures occur.

### How cloud providers achieve fault tolerance

1. Multiple servers

   Applications run on more than one server.
   If one fails, another takes over.

2. Data replication

   Data is copied to multiple disks or even multiple data centers.

3. Load balancers

   A load balancer checks which servers are healthy and sends requests only to them.

4. Availability Zones

   A cloud region is often divided into multiple physically separate zones.

## Data Formats

A data format defines how data is organized, how it is encoded, and how applications read and write it.

data is broadly classified into three categories:

1. Structured Data

   Structured data is organized into rows and columns with a predefined schema (structure).

   A schema defines column names, data type, rules

   | EmployeeID | Name  | Age | City      |
   | ---------- | ----- | --- | --------- |
   | 101        | Pavan | 25  | Bangalore |
   | 102        | Rahul | 28  | Pune      |
   | 103        | Neha  | 24  | Delhi     |

   ### Where is structured data stored?
   - SQL Server
   - mySql
   - postgresql
   - Oracle database
   - Azure sql databse

2. Semi-Structured Data

   Semi-structured data doesn't fit into fixed rows and columns, but it still has some organization using tags, keys, or attributes.

   Think of it as data with flexible fields.

   ### Example (JSON)

   ```json
   {
     "name": "Joe",
     "age": 25,
     "city": "Bangalore",
     "skills": ["React", "Python"]
   }
   ```

   ### Where is it used?
   - REST API
   - Web applications
   - Cloud logs
   - Azure cosmos db

3. Unstructured Data

   Unstructured data has no predefined structure or schema.
   It cannot be neatly stored in rows and columns.

   ### Examples
   - Images
   - Videos
   - Audio files
   - PDF's
   - Emails

   ### Where is it stored?
   - Azure blob storage
   - Azure data lake
   - AWS s3

| Feature        | Structured           | Semi-Structured        | Unstructured            |
| -------------- | -------------------- | ---------------------- | ----------------------- |
| Fixed schema   | ✅ Yes               | ❌ No (flexible)       | ❌ No                   |
| Rows & columns | ✅ Yes               | ❌ No                  | ❌ No                   |
| Easy to query  | ✅ Yes               | Moderate               | Difficult               |
| Examples       | SQL tables           | JSON, XML              | Images, videos, PDFs    |
| Storage        | Relational databases | NoSQL databases, files | File storage/data lakes |

## Azure SQL DB

Azure SQL Database is a fully managed relational database service provided by Microsoft Azure.

In simple terms:

It is a SQL Server database in the cloud, where Microsoft manages the infrastructure, backups, updates, and high availability.
