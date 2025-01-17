---
id: graphql-webservice
title: "ZIO Quickstart: Building GraphQL Web Service"
sidebar_label: "GraphQL Web Service"
---

This quickstart shows how to build a GraphQL web service using ZIO. It uses
- [ZIO HTTP](https://dream11.github.io/zio-http/) for the HTTP server
- [Caliban](https://ghostdogpr.github.io/caliban/) for the GraphQL

Creating GraphQL API using Caliban is an easy process. We can define our data models using case classes and ADTs. Then Caliban can derive the whole GraphQL schema from these data models.

## Running The Example

First, open the console and clone the project using `git` (or you can simply download the project) and then change the directory:

```scala
git clone git@github.com:zio/zio-quickstart-graphql-webservice.git 
cd zio-quickstart-graphql-webservice
```

Once you are inside the project directory, run the application:

```bash
sbt run
```

## Testing The Quickstart

In this project, we have defined models of our employees with their names and roles. Then using GraphQL annotations, we asked Caliban to derive the GraphQL schema from these models.

So we can query all the employees that are software developers using the GraphQL query:

```graphql
query{
  employees(role: SoftwareDeveloper){
    name
    role
  }
}
```

To run this query, we can use any of the GraphGL clients or use the following curl command:

```bash
curl 'http://localhost:8088/api/graphql' --data-binary '{"query":"query{\n employees(role: SoftwareDeveloper){\n name\n role\n}\n}"}'
```

The response will be as follows:

```json
{
  "data" : {
    "employees" : [
      {
        "name" : "Maria",
        "role" : "SoftwareDeveloper"
      },
      {
        "name" : "Peter",
        "role" : "SoftwareDeveloper"
      }
    ]
  }
}
```
