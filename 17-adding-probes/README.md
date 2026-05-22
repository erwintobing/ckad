# 17 - Adding Probes
Cluster: ckad0017<br>
Namespace: dev<br>
Doc links: Probes

## Task

The slow-start.yaml pod manifest contains the configuration for a slow starting application that listens on port 9090. The connection starts before the service is fully ready.

1. Ensure the startup probe confirms the pod is ready by accessing the /tmp/live and wait 30 seconds before it is run. The startup probe should be able to fail up to 5 times.

2. The readiness probe should succeed twice for the pod to be considered ready. It should check the connection at 9090.

3. Delay the liveness probe for 10 seconds. Have it run every 30 seconds after that. It should similarly check the connection at 9090.

4. Create a pod using slow-start.yaml manifest, the pod will be ready around 1 minute.

5. Simulate a scenario where the startup probe fails 5 times and the pod is restarted.

6. Simulate a scenario where the readiness probe fails but does not trigger a pod restart. The status remains Not Ready, meaning the pod is excluded from the service.

7. Simulate a scenario where a pod is initially ready, then fails the liveness probe and triggers a restart.