# Schema Info

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## friends
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user1_id        | integer   | not null, foreign key(references users)
user2_id        | integer   | not null, foreign key(references users)

## expenses
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
lender_id       | integer   | not null, foreign key(references users)
ower_id         | integer   | not null, foreign key(references users)
amount          | float     | not null
total           | float     | not null
description     | text      | not null
timestamp       | timestamp | not null

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key(references users)
expense_id      | integer   | not null, foregin key(references expenses)
body            | string    | not null,
