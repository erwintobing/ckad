# 02 - Logger App DaemonSet

Deploy a logger app that prints the time every 5 seconds on all nodes using a DaemonSet controller.

**Image:** `busybox:latest`

## Objective

A simple logger container is deployed via a Kubernetes DaemonSet, ensuring one pod runs on every node in the cluster. The app continuously prints the current time every 5 seconds to stdout.

**Output:** `Mon May 11 15:52:22 WIB 2026`

## Exploratory

- Exclude the logger app from the control-plane node

