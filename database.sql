
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "role_id" INT REFERENCES "roles" NOT NULL
);

CREATE TABLE "roles" (
    "id" SERIAL PRIMARY KEY,
    "label" varchar(20) not null,
    "access_level" int not null
);

CREATE TABLE "reviews" (
    "id" SERIAL PRIMARY KEY,
    "comments" varchar(100),
    "rating" int not null,
    "user_id" int references "user"
);