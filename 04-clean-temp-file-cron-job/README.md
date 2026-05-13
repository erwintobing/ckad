# 04 - Clean Temp File CronJob

Deploy a cron job app using a CronJob controller to run a cleanup script every minute.

**Image:** `busybox:latest`
**Output:** `Cleaning temp file at Mon May 11 15:52:22 WIB 2026`

## Objective

A CronJob is deployed that runs a `busybox` container every minute. The container executes a shell command that prints a cleanup message with the current timestamp, simulating a temp file deletion script.

## Exploratory

- Run the cron job every 1 hour