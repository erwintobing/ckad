# 19 - Working with Kubernetes Metrics
Cluster: ckad0019<br>
Namespace: dev<br>
Doc links: metrics-server

## Task

1. Create a web application deployment using **nginx** image; name the deployment **nginx**, create **five** replicas, and expose port **80**.

2. Check the resource usage for the deployment pods and the related worker nodes.

3. Generate some traffic using **curl loop** against the nginx deployment.

4. Review the resource usage once more.

5. View the raw metrics data for one of the affected nodes. Save it to the file **workernode.txt**.

    <details>
    <summary>Show</summary>

    ```
    /api/v1/nodes/minikube-m02/proxy/metrics/resource
    ```

    </details>

