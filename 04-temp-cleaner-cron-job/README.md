# 04 - Temp Cleaner CronJob

Cluster: ckadxx<br>
Namespace: default<br>
Doc links: CronJobs, Jobs

## Task

1. Create a **CronJob** using the **busybox:latest** image that runs **every minute** and prints a cleanup message with the current timestamp, simulating a temp file deletion.

2. Verify the CronJob is creating Jobs on schedule and check the Pod logs to confirm the output looks like:

    ```
    Cleaning temp file at Mon May 11 15:52:22 WIB 2026
    ```