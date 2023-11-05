## Deployment setup

Build Images:

```shell
# Reviews
gw clean bootBuildImage

# Users
gw clean bootBuildImage

# Catalog
./mvnw clean spring-boot:build-image -DskipTests

# Catalog Finder
gw clean bootBuildImage

# Graphql server
npm run build:docker
```

Start minikube:

```shell
minikube start --driver=docker --mount-string="/home/awest/dev/alecwest/toy-book-app/data:/mnt/postgresql" --mount --disk-size=40000
```

Apply PV and PVC

```shell
kc apply -f postgresql-pv0.yaml
kc apply -f postgresql-pvc0.yaml
```

Follow steps at https://arctype.com/blog/deploy-postgres-kubernetes/ to deploy a helm chart for postgresql with a persistence volume configured.

```shell
> helm install postgresql bitnami/postgresql --set primary.persistence.existingClaim=postgres-claim0 --set volumePermissions.enabled=true


NAME: postgresql
LAST DEPLOYED: Sat Sep 16 06:58:45 2023
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
CHART NAME: postgresql
CHART VERSION: 12.11.2
APP VERSION: 15.4.0

** Please be patient while the chart is being deployed **

PostgreSQL can be accessed via port 5432 on the following DNS names from within your cluster:

    postgresql.default.svc.cluster.local - Read/Write connection

To get the password for "postgres" run:

    export POSTGRES_PASSWORD=$(kubectl get secret --namespace default postgresql -o jsonpath="{.data.postgres-password}" | base64 -d)

To connect to your database run the following command:

    kubectl run postgresql-client --rm --tty -i --restart='Never' --namespace default --image docker.io/bitnami/postgresql:15.4.0-debian-11-r10 --env="PGPASSWORD=$POSTGRES_PASSWORD" \
      --command -- psql --host postgresql -U postgres -d postgres -p 5432

    > NOTE: If you access the container using bash, make sure that you execute "/opt/bitnami/scripts/postgresql/entrypoint.sh /bin/bash" in order to avoid the error "psql: local user with ID 1001} does not exist"

To connect to your database from outside the cluster execute the following commands:

    kubectl port-forward --namespace default svc/postgresql 5432:5432 &
    PGPASSWORD="$POSTGRES_PASSWORD" psql --host 127.0.0.1 -U postgres -d postgres -p 5432

WARNING: The configured password will be ignored on new installation in case when previous PostgreSQL release was deleted through the helm command. In that case, old PVC will have an old password, and setting it through helm won't take effect. Deleting persistent volumes (PVs) will
```

Ensure the database has all the initial database setup for each of users_database, catalog_database, reviews_database

```shell
CREATE DATABASE EXAMPLE_DB;
CREATE USER EXAMPLE_USER WITH ENCRYPTED PASSWORD 'Sup3rS3cret';
GRANT ALL PRIVILEGES ON DATABASE EXAMPLE_DB TO EXAMPLE_USER;
\c EXAMPLE_DB postgres
# You are now connected to database "EXAMPLE_DB" as user "postgres".
# *** NEW as of postgres 15 ***
GRANT ALL ON SCHEMA public TO EXAMPLE_USER;
```

Apply the other deployments

```shell
kc apply -f deployment-catalog.yaml
kc apply -f deployment-catalog-finder.yaml
kc apply -f deployment-reviews.yaml
kc apply -f deployment-users.yaml
kc apply -f deployment-graphql.yaml
kc apply -f deployment-frontend.yaml
```

## Notes

- run `minikube service graphql` to open graphql in the browser
- run `minikube service frontend` to open the frontend in the browser
- run `minikube service graphql --url` to just get a url of the service accessible from the host machine
- run `helm delete postgresql` to remove
