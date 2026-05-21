# 06 - Multi-Container Pod with Init and Sidecar

Cluster: ckadxx<br>
Namespace: default<br>
Doc links: Init Containers, Sidecar Containers, Volumes

## Task

1. Create a Pod with a shared `emptyDir` volume and three containers:
   - **init** (`busybox:latest`) — runs before the main container, writes `App starting up...` to `/shared/startup.log`, then exits.
   - **web** (`nginx:alpine`) — serves on port 80 with its `/var/log/nginx` mounted to the shared volume.
   - **logger** (`busybox:latest`) — runs alongside the main container and continuously tails `/var/log/nginx/access.log` to stdout.

2. Verify the init container completed and the main and sidecar containers are running. Then exec into **web** and confirm `startup.log` contains the expected message.

    <details>
    <summary>Show command</summary>

    ```bash
    $ kubectl get pod <pod-name>
    $ kubectl exec <pod-name> -c web -- cat /var/log/nginx/startup.log
    ```

    </details>

3. Expose the Pod locally using port-forward and send a request to generate an access log entry.

    <details>
    <summary>Show command</summary>

    ```bash
    $ kubectl port-forward <pod-name> 8080:80
    $ curl localhost:8080
    ```

    </details>

4. Check the sidecar container logs and confirm the access log entry appears.

    <details>
    <summary>Show command</summary>

    ```bash
    $ kubectl logs <pod-name> -c sidecar-app
    ```

    </details>