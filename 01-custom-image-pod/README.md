# 01 - Custom Image Pod

Build a custom image, push it to Docker Hub, then use it in a pod.

**Image:** `erwinjelly/nodeapp:1.0`

## Objective

A simple Node.js HTTP server is containerized, published to Docker Hub, and deployed as a Kubernetes Pod exposed via a NodePort Service.

Access the app at `http://<node-ip>:<node-port>`.