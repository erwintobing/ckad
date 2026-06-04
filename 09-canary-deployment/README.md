# 09 - Canary Deployment

Cluster: ckad0009<br>
Namespace: dev<br>
Doc links: Services, Deployments

## Task

Your system has **ckad:stable** and **ckad:canary** images available and the `starting` folder contains YAML files to be used to complete the task.

1. Create resources in Kubernetes using the YAML files available in the starting folder. List all the running Pods.

2. Scale the **stable** Deployment to **6** replicas and the **canary** Deployment replicas to **2**.

3. Modify the **canary** Deployment so that the Service will direct traffic to the Pods.

4. Create a temporary Pod named **temp-pod** as an interactive TTY. Use the **alpine** image for the Pod and set **restart** to **Never**.

    <details>
    <summary>Show command</summary>

    ```bash
    $ kubectl run -it --rm --image=alpine --restart=Never temp-pod
    ```

    </details>

5. Install **curl** into the **temp-pod** container using `apk add curl`, and run the following command until the output from a canary Pod is displayed:

    ```bash
    $ curl <service-cluster-ip>
    ```
