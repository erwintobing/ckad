# 06 - Multi-Container Pod with Init and Sidecar

Deploy an nginx pod with an init container and a sidecar container, all sharing an ephemeral volume.

**Init container image:** `busybox`<br>
**Main container image:** `nginx:alpine`<br>
**Sidecar container image:** `busybox:latest`<br>
**Shared volume:** `emptyDir` mounted at `/shared` (init & sidecar) and `/var/log/nginx` (main)

## Objective

A pod is deployed with 3 containers sharing an `emptyDir` volume:

1. **init-app** — runs before the main container starts. It mounts the shared volume at `/shared` and writes an initial log entry:
   ```
   App starting up...
   ```
   to `/shared/startup.log`, then exits.

2. **main-app** — serves on port 80. The shared volume is mounted at `/var/log/nginx`, so nginx writes `access.log` into the shared volume. Accessing localhost:3000 in the browser displays nginx default page.

3. **sidecar-app** — runs alongside nginx. It mounts the same shared volume at `/var/log/nginx` and continuously tails `access.log`, printing all entries to stdout.