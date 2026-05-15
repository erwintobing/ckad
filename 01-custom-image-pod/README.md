# 01 - Custom Image Pod

Cluster: ckadxx<br>
Namespace: default<br>
Doc links: Pods, Services

## Task

1. Create a `server.js` file for a simple Node.js HTTP server that responds with `Hello from custom image pod.` and verify it works by running `node server.js`.

2. Create a `Dockerfile` to containerize `server.js`.

3. Build the image and tag it as **\<dockerhub-username\>/nodeapp:1.0**.

4. Push the image to Docker Hub.

5. Create a **Pod** using the **\<dockerhub-username\>/nodeapp:1.0** image.

6. Create a **NodePort** Service to expose the Pod.

7. Verify the Pod is running and accessible by running the following command and checking that it returns the expected response.

    ```bash
    $ curl localhost:<node-port>
    ```