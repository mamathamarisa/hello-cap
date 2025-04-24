# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.

1. Initialization of project
projects $ mkdir hello-cap
user: projects $ cd hello-cap
user: hello-cap $ cds init
2. define a service
 we define a service using cds module into our srv
 in this cds file we are going to create service definition using keyword service followed by service type
 inside that we have function(which we want to use as explicit call) to return something
 *helloservice is service definition
3.implemetation of Service
------above is sample for my modulexport