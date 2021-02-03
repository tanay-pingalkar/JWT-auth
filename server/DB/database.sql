CREATE DATABASE diary;

CREATE TABLE users(
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

INSERT INTO users(user_name,user_email,user_password)
VALUES ('henry','henrycalvin@gmail.com','1234');