# 07 - Updating Deployment

Cluster: ckadxx<br>
Namespace: default<br>
Doc links: Services, Deployments

## Task

1. Create a Deployment named **nginx-deploy**. The Deployment should use the **nginx:stable-alpine** image and create 4 replicas.

2. Create a **NodePort** service named **nginx-svc** and associate it with the Pods created by the **nginx-deploy** Deployment. The service should expose port **9000**.

3. Edit the **nginx-deploy** Deployment and change the number of replicas to **6**.

4. Ensure the service is associated with the **nginx-deploy** Pods by running the following command and checking that it returns HTML content. Replace <node-port> with the **nginx-svc** node port value.

    <details>
    <summary>Show command</summary>

    ```bash
    $ curl localhost:<node-port-value>
    ```

    </details>