# 12 - Deployment Rollback
Cluster: ckad0012<br>
Namespace: dev<br>
Doc links: Deployments

## Task

1. Create a Deployment file named **biz-app.deploy.yml**. The Deployment should be named **biz-app**, use an image of **nginx:1.17.8-alpine**, and create **4** Pods.

    <details>
    <summary>Show command</summary>

    ```bash
    kubectl create deploy biz-app --image=nginx:1.17.8-alpine --replicas=4 --dry-run=client -o yaml > biz-app.deploy.yml
    ```

    </details>

2. Create the Deployment and add the `--save-config` flag when running the command.

    <details>
    <summary>Show command</summary>

    ```bash
    kubectl create –f biz-app.deploy.yml --save-config
    ```

    </details>

3. Verify all the Pods are running.

    <details>
    <summary>Show command</summary>

    ```bash
    kubectl get pods
    ```

    </details>

4. Edit **biz-app.deploy.yml** and change the image to **nginx:7.85.1-alpine**. Apply the changes and use the `--record` flag.

    <details>
    <summary>Show command</summary>

    ```bash
    nano biz-app.deploy.yml
    kubectl apply –f biz-app.deploy.yml --record
    ```

    </details>

5. List the Pods but notice there's a problem. View the **biz-app** Deployment's rollout status and rollout history.

    <details>
    <summary>Show command</summary>

    ```bash
    kubectl rollout status deploy biz-app
    kubectl rollout history deploy biz-app
    ```

    </details>

6. Rollback to the previous Deployment version. List the Deployment history again.
    <details>
    <summary>Show command</summary>

    ```bash
    kubectl rollout undo deploy biz-app
    ```

    </details>

7. Verify that the previous deployment is running by checking the Deployment's image value (it should be **nginx:1.17.8** now).

    <details>
    <summary>Show command</summary>

    ```bash
    kubectl get deploy -o yaml | grep nginx:1.17.8-alpine
    kubectl get pods -o yaml | grep nginx:1.17.8-alpine
    kubectl get pods -o yaml | grep nginx:1.17.8-alpine | wc –l
    ```

    </details>