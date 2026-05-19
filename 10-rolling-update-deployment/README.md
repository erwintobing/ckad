# 10 - Rolling Update Deployment
Cluster: ckad0010<br>
Namespace: dev<br>
Doc links: Deployments, Services

## Task

The starting folder contains Kubernetes YAML files to create deployments and services.

1. Run `kubectl create` with `--save-config` to deploy the Deployment and Service, saving the config as an annotation for future `kubectl apply` and rollout tracking:

    <details>
    <summary>Show command</summary>

    ```bash
    $ kubectl create -f ./ --save-config
    ```
    </details>

2. Run kubectl get all and notice that 4 Pods, 1 Deployment, and 1 ReplicaSet have successfully been deployed.

3. Open a separate command window and run one of the following scripts based on your OS to call into the nginx Pods:

    **Windows (open a PowerShell window):**

    `./curl-loop.ps1`

    **Mac**

    ```sh
    chmod +x curl-loop.sh
    sh curl-loop.sh
    ```

4. Change the image version in `nginx.deployment.yml` to the one shown in the comment right next to it. Save the file.

5. Run `kubectl apply` with `--record` to apply the updated Deployment and record the command as the change-cause annotation in rollout history:
    <details>
    <summary>Show command</summary>

    ```bash
    kubectl apply -f nginx.deployment.yml --record
    ```

    </details>

6. Go back and check the curl commands being made by the script and you should see no interuption in the service. This demonstrates a Rolling Deployment in action.

7. Run `kubectl rollout status` to watch the rolling update progress of the Deployment:
    <details>
    <summary>Show command</summary>

    ```bash
    kubectl rollout status deployment my-nginx
    ```

    </details>