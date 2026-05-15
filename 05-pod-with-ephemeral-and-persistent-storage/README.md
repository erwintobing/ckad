# 05 - Pod with Ephemeral and Persistent Storage

Cluster: ckadxx<br>
Namespace: default<br>
Doc links: Volumes, PersistentVolumes, PersistentVolumeClaims

## Task

1. Create a **PersistentVolume** and a **PersistentVolumeClaim** for storing `/usr/share/nginx/html`.

2. Create an **nginx:alpine** Pod that mounts:
   - The PVC at `/usr/share/nginx/html` (persistent storage)
   - An `emptyDir` volume at `/var/log/nginx` (ephemeral storage)

3. Write a custom `index.html` to the persistent volume that displays:

    ```
    Hello from Kubernetes storage.
    ```

4. Expose the Pod locally using port-forward, then verify the page is served correctly.

    <details>
    <summary>Show command</summary>

    ```bash
    $ kubectl port-forward <pod-name> 8080:80
    $ curl localhost:8080
    ```

    </details>

5. Delete and recreate the Pod, then verify that `index.html` still displays the same content (persistent), and that `access.log` is gone (ephemeral).