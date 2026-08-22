# What is Azure Data Factory (ADF)?

Azure Data Factory (ADF) is Microsoft's cloud-based data integration and ETL/ELT service. It is used to collect, move, transform, and automate data from different sources into a central location for analytics and reporting.

### What problems does ADF solve?

1. Data Integration

   Combines data from many systems.

2. Data Migration

   Move data from one place to another.

3. ETL / ELT

   ADF can clean and transform data.

4. Scheduling

```
                Azure Data Factory
                        │
        ┌───────────────┼───────────────┐
        │               │               │
   Copy Data      Transform Data    Schedule Jobs
        │               │               │
        ▼               ▼               ▼
Data Lake        Data Flow        Pipelines

```

### Main Components of Azure Data Factory

1. Pipeline

   A pipeline is a collection of activities.

   copy data -> transform data -> load data -> use (send mail)

2. Activity

   An activity is a single task.

   #### Examples
   - Copy File
   - Delete File
   - Execute SQL
   - Run Python Notebook
   - Execute Stored Procedure

3. Linked Service

   A Linked Service stores connection information. Just like saving login credentials.

4. Dataset

   A Dataset tells ADF what data to use.

5. Integration Runtime (IR)

   Integration Runtime is the engine that performs the work.

# What is Azure Data Lake?

Azure Data Lake is a highly scalable cloud storage service designed to store large amounts of structured, semi-structured, and unstructured data in its original (raw) format.

# What are Containers?

A container is a lightweight, portable package that contains:

- Your application
- code base
- libraries
- deps
- runtime
- config files

Everything needed to run the application is bundled together, so it behaves the same on any machine.

# What is Data Flow?

In Azure and data engineering, Data Flow is the journey that data takes from its source to its final destination, including any transformations applied along the way.

Think of it as the path data follows through a system.
