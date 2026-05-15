# 02 - Date Printer Daemonset

Cluster: ckadxx<br>
Namespace: default<br>
Doc links: DaemonSets, Pods

## Task

1. Create a **DaemonSet** using the **busybox:latest** image that runs a command to print the current date every 5 seconds.

2. Verify that a Pod is running on every node in the cluster.

3. Check the logs on each Pod and confirm the date is being printed every 5 seconds.