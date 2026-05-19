# CKAD Preparation

CKAD is about pattern recognition + speed execution, not deep theory.

> **Goal:** complete each question in **≤ 5 minutes**

### 1. Exam Tips and Tricks

#### a. Use Aliases and Exported Variables

| Alias | Command |
|-------|---------|
| `k`   | `kubectl` |
| `kg`  | `kubectl get` |
| `kc`  | `kubectl config get-contexts` |
| `kd`  | `kubectl describe` |
| `kl`  | `kubectl logs` |

| Variable | Value |
|----------|-------|
| `dr`     | `--dry-run=client -o yaml` |
| `now`    | `--grace-period=0 --force` |

#### b. Track Questions (Task List)

Generate a task list file at the start of the exam to track progress across all questions:

```sh
for i in {1..20}; do echo "$i = %"; done > tasklist
```

Update each entry as you go:
- `1 = %` — not started
- `2 = 8% o` — in progress
- `3 = 6% x` — done

#### c. Use Imperative Commands

Use these to generate YAML quickly, then edit only what's needed:

```sh
# Pod
kubectl run NAME --image=nginx --port=80 $dr > pod.yaml

# Daemonset
# Note: there is no `kubectl create daemonset` command.
# Generate a Deployment manifest, then edit it:
#   1. Change `kind: Deployment` → `kind: DaemonSet`
#   2. Remove `spec.replicas` (DaemonSets don't use it)
#   3. Remove `strategy` under spec (not valid for DaemonSet)
kubectl create deployment NAME --image=busybox:latest $dr > daemonset.yaml

# Deployment
kubectl create deployment NAME --image=nginx:latest --replicas=3 --port:80  $dr > deployment.yaml

# Cron Job
kubectl create cronjob NAME --image=busybox:latest --shedule="* * * * *" $dr > cronjob.yaml

# Get All
kubectl get all

# Create service by expose pod, deployment
kubectl expose po POD_NAME  --name=SVC_NAME --type=NodePort --port=3000 --target-port=80
kubectl expose po DEPLOY_NAME --name=SVC_NAME --type=NodePort --port=3000 --target-port=80

# Update Deployment Image
kubectl set image deployment/NAME IMAGE_NAME

# Update Service Selector
kubectl set selector service/NAME "role=blue"
```

#### d. Workflow Tips
- In K8s docs, don't read — **search quickly** for exact YAML examples
- Always check **namespace** and **context** before applying
- Prepare reusable YAML templates for pod, deployment, and service
- Use force delete (`$now`) when needed
- Be comfortable with `grep`, `curl`, pipes, and file editing (`vim`/`nano`)
- Use search linux command `man -k "last lines"`

#### e. Common Mistakes to Avoid

- Forgetting liveness/readiness probes
- Wrong image or tag
- Wrong port or label selector
- Missing resource limits

#### f. Know Some Basic Cron Syntax

| Schedule | Meaning |
|----------|---------|
| `* * * * *`   | Every minute |
| `*/5 * * * *` | Every 5 minutes |
| `*/n * * * *` | Every n minutes |

> Tip: A common exam question is running a CronJob every 5 minutes — use `*/5 * * * *`.

#### g. Debugging

```sh
kubectl describe <resource> <name>
kubectl logs <pod-name>
```

#### h. Vim Shortcuts

| Shortcut | Description |
|----------|-------------|
| `i`      | Insert mode before the cursor |
| `ZZ`     | Save and exit (equivalent to `:wq`) |
| `dd`     | Delete the current line |
| `D`      | Delete text from the cursor to the end of the line |

#### i. Reference
- https://medium.com/@san.agarwal10/my-journey-to-pass-ckad-exam-312d24382177
- https://medium.com/@shafath.001/mastering-ckad-a-journey-through-the-certified-kubernetes-application-developer-exam-500e8e0faa3c

---

### 2. Minikube Env Setup

```sh
# Start cluster
minikube start --cni=calico

# Add worker node
minikube node add --worker=true

# Stop cluster
minikube stop

# Check cluster status
minikube profile list

# Delete node
minikube node delete worker-1

# Expose service
minikube service <service-name> --url
minikube service --all

# Enable ingress addon
minikube addons enable ingress

# Or tunnel for ingress
minikube tunnel
```
