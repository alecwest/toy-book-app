curl -XPOST users:8080/users --header 'Content-Type: application/json' \
--data '{
    "username": "awest",
    "name": "Alec West"
}'
curl -XPOST users:8080/users --header 'Content-Type: application/json' \
--data '{
    "username": "gwilson",
    "name": "Gary Wilson"
}'
curl -XPOST users:8080/users --header 'Content-Type: application/json' \
--data '{
    "username": "jsmith",
    "name": "Jack Smith"
}'

curl -XPOST 'http://catalog:8080/books' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Some Book Title",
    "author": "Adam Example",
    "isbn10": "1234567890",
    "genre": [
        "comedy"
    ]
}'
curl -XPOST 'http://catalog:8080/books' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Ender'\''s Game",
    "author": "Orson Scott Card",
    "isbn10": "0312932081",
    "genre": [
        "science fiction"
    ]
}'
curl -XPOST 'http://catalog:8080/books' \
--header 'Content-Type: application/json' \
--data '{
    "title": "ABCD",
    "author": "John Smith",
    "isbn10": "0312932082",
    "isbn13": "2328176412312",
    "genre": [
        "fiction"
    ]
}'


