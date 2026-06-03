1. Create CRD, role & role binding, and an operator.

    ```
    k apply -f messages.yaml
    ```

2. Check if the operator is running, it should has message-operator.

   ```
   k get po
   ```

3. Deploy a hell message to test if the operator is working.

   ```
   k apply -f test-message.yaml
   ```

4. Test if it is running.

   ```
   k get msg
   ```

5. Check if operator is working there should be config map message-hello.

   ```
   k get cm
   k logs <operator-pod>
   ```

6. Clean up.

   ```
   k delete -f messages.yaml -f test-message.yaml 
   ```