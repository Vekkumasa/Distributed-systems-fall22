FROM mysql

ADD ./create-db.sql docker-entrypoint-initdb.d/create-db.sql
RUN chmod -R 775 /docker-entrypoint-initdb.d
ENV MYSQL_ROOT_PASSWORD password
