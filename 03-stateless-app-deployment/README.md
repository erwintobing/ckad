# 03 - Stateless App Deployment

Deploy a stateless web app using a Deployment controller with 3 replicas.

**Image:** `nginx:alpine`

## Objective

A stateless web app is deployed via a Kubernetes Deployment with 3 replicas. A Service is created to expose the containers outside of the cluster. Accessing the web app in the browser display nginx default page.