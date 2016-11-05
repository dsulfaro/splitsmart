# Schema Info

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null

## friends
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
sender_id       | integer   | not null, foreign key(references users)
receiver_id     | integer   | not null, foreign key(references users)

## expenses
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
lender_id       | integer   | not null, foreign key(references users)
ower_id         | integer   | not null, foreign key(references users)
amount          | float     | not null
total           | float     | not null
description     | text      | not null
settled         | boolean   | not null
timestamp       | timestamp | not null

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key(references users)
expense_id      | integer   | not null, foreign key(references expenses)
body            | string    | not null,
