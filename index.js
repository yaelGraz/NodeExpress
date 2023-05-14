//  const  express =require('express')
//  const  cors =require('cors')  
import express from 'express'
import cors from 'cors'
 const app=express();
 const port=3002;
 app.use(cors())

app.get('/', (req, res) => {
    res.send([
        {
          "cursor": "pz6fqOK-zTgwZThyZGRsYTdxcmJqM20w",
          "service": {
            "id": "srv-chdv0e8rddla7qrbj3m0",
            "autoDeploy": "yes",
            "branch": "main",
            "buildFilter": null,
            "createdAt": "2023-05-10T19:27:54.090634Z",
            "name": "ToDoApi2",
            "notifyOnFail": "default",
            "ownerId": "usr-chdskiu7avj22bh3l4b0",
            "repo": "https://github.com/yaelGraz/ToDoAPI",
            "rootDir": "",
            "slug": "todoapi2-ky3b",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "web_service",
            "updatedAt": "2023-05-10T19:43:26.241286Z",
            "serviceDetails": {
              "disk": null,
              "env": "docker",
              "envSpecificDetails": {
                "dockerCommand": "",
                "dockerContext": ".",
                "dockerfilePath": "ToDoApi/Dockerfile"
              },
              "healthCheckPath": "",
              "numInstances": 1,
              "openPorts": null,
              "parentServer": null,
              "plan": "free",
              "pullRequestPreviewsEnabled": "no",
              "region": "oregon",
              "url": "https://todoapi2-ky3b.onrender.com"
            }
          }
        },
        {
          "cursor": "wmr27aQGrrl2NGZkdms0cjYwN2YzMTIw",
          "service": {
            "id": "srv-chduv4fdvk4r607f3120",
            "autoDeploy": "yes",
            "branch": "main",
            "buildFilter": null,
            "createdAt": "2023-05-10T19:25:06.152276Z",
            "name": "ToDoAPi1",
            "notifyOnFail": "default",
            "ownerId": "usr-chdskiu7avj22bh3l4b0",
            "repo": "https://github.com/yaelGraz/ToDoAPI",
            "rootDir": "",
            "slug": "todoapi1-gghk",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "web_service",
            "updatedAt": "2023-05-10T19:43:26.216711Z",
            "serviceDetails": {
              "disk": null,
              "env": "docker",
              "envSpecificDetails": {
                "dockerCommand": "",
                "dockerContext": ".",
                "dockerfilePath": " ToDoApi/Dockerfile"
              },
              "healthCheckPath": "",
              "numInstances": 1,
              "openPorts": null,
              "parentServer": null,
              "plan": "free",
              "pullRequestPreviewsEnabled": "no",
              "region": "oregon",
              "url": "https://todoapi1-gghk.onrender.com"
            }
          }
        },
        {
          "cursor": "wmr27aQGrrlwdm9yZGRsYTdxcjhzMHBn",
          "service": {
            "id": "srv-chdupvorddla7qr8s0pg",
            "autoDeploy": "yes",
            "branch": "main",
            "buildFilter": null,
            "createdAt": "2023-05-10T19:14:07.712647Z",
            "name": "ToDoApi",
            "notifyOnFail": "default",
            "ownerId": "usr-chdskiu7avj22bh3l4b0",
            "repo": "https://github.com/yaelGraz/ToDoAPI",
            "rootDir": "",
            "slug": "todoapi-dmlm",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "web_service",
            "updatedAt": "2023-05-14T15:53:52.430913Z",
            "serviceDetails": {
              "disk": null,
              "env": "docker",
              "envSpecificDetails": {
                "dockerCommand": "",
                "dockerContext": ".",
                "dockerfilePath": "./Dockerfile"
              },
              "healthCheckPath": "",
              "numInstances": 1,
              "openPorts": null,
              "parentServer": null,
              "plan": "free",
              "pullRequestPreviewsEnabled": "no",
              "region": "oregon",
              "url": "https://todoapi-dmlm.onrender.com"
            }
          }
        },
        {
          "cursor": "wmr27aQGrrlvNm5kdms0cjYwN2NxZm4w",
          "service": {
            "id": "srv-chduo6ndvk4r607cqfn0",
            "autoDeploy": "yes",
            "branch": "main",
            "buildFilter": null,
            "createdAt": "2023-05-10T19:10:19.164753Z",
            "name": "ToDoAPI",
            "notifyOnFail": "default",
            "ownerId": "usr-chdskiu7avj22bh3l4b0",
            "repo": "https://github.com/yaelGraz/ToDoAPI",
            "rootDir": "",
            "slug": "todoapi-x4ld",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "web_service",
            "updatedAt": "2023-05-10T19:43:26.232062Z",
            "serviceDetails": {
              "disk": null,
              "env": "docker",
              "envSpecificDetails": {
                "dockerCommand": "",
                "dockerContext": ".",
                "dockerfilePath": " ToDoAPI/Dockerfile"
              },
              "healthCheckPath": "",
              "numInstances": 1,
              "openPorts": null,
              "parentServer": null,
              "plan": "free",
              "pullRequestPreviewsEnabled": "no",
              "region": "oregon",
              "url": "https://todoapi-x4ld.onrender.com"
            }
          }
        },
        {
          "cursor": "Y1LNaor7B9A1N3U3YXZqMjJiaDl0M2ww",
          "service": {
            "id": "srv-chdt57u7avj22bh9t3l0",
            "autoDeploy": "yes",
            "branch": "main",
            "buildFilter": null,
            "createdAt": "2023-05-10T17:21:35.242803Z",
            "name": "ToDoListReact",
            "notifyOnFail": "default",
            "ownerId": "usr-chdskiu7avj22bh3l4b0",
            "repo": "https://github.com/yaelGraz/ToDoListReact",
            "rootDir": "",
            "slug": "todolistreact-in6j",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "static_site",
            "updatedAt": "2023-05-14T16:48:41.809212Z",
            "serviceDetails": {
              "buildCommand": "npm run build",
              "parentServer": null,
              "publishPath": "build",
              "pullRequestPreviewsEnabled": "no",
              "url": "https://todolistreact-in6j.onrender.com"
            }
          }
        }
      ])
})
app.listen(port,() => {
  console.log(`Example app listening on http://localhost:${port}`)
});