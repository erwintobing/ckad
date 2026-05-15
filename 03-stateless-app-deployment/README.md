# 03 - Stateless App Deployment

Cluster: ckadxx<br>
Namespace: default<br>
Doc links: Deployments, Services

## Task

1. Create a **Deployment** using the **nginx:alpine** image with **3 replicas**.

2. Create a **NodePort** Service to expose the Deployment.

3. Verify the Pods are running and the app is accessible by running the following command and checking that it returns HTML content.

    ```bash
    $ curl localhost:<node-port>
    ```