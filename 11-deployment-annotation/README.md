# 11 - Deployment Annotations
Cluster: ckad0011<br>
Namespace: dev<br>
Doc links: Deployments

## Task

1. Create a namespace named **dev**.

2. Create a Deployment named **web-app** that uses the **nginx:1.17.8-alpine** image and creates **6** Pods in the **dev** namespace. Add the `--save-config flag`.

    <details>
    <summary>Show command</summary>

    ```bash
    k create deploy web-app --image=nginx:1.17.8-alpine --replicas=6
    ```

    </details>

3. Verify all the Pods are running.

4. Edit the Deployment and change the image to **nginx:1.23.1-alpine**

    <details>
    <summary>Show command</summary>

    ```bash
    kubectl set image deploy web-app nginx=nginx:1.23.1-alpine
    ```

    </details>

5. Add an annotation named **kubernetes.io/change-cause** with a value of **Changed to nginx:1.23.1** to the Deployment.

    <details>
    <summary>Show command</summary>

    ```bash
    kubectl annotate deploy web-app kubernetes.io/change-cause="Changed to nginx:1.23.1" --overwrite=true
    ```

    </details>

6. List the value of the kubernetes.io/change-cause annotation (display this specific annotation).
    <details>
    <summary>Show command</summary>

    ```bash
    kubectl get deploy web-app -o json | jq '.metadata.annotations."kubernetes.io/change-cause"'
    kubectl get deploy web-app -o yaml | grep "kubernetes.io/change-cause"
    ```

    </details>

7. Verify all Pods are running and that the previous Pods are terminated using kubectl describe to view events.

8. List the Deployment's rollout status.

    <details>
    <summary>Show command</summary>

    ```bash
    kubectl rollout status deploy web-app
    ```

    </details>