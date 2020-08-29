CREATE TABLE chat_app.messages (
    id SERIAL PRIMARY KEY,
    _date TIMESTAMP default NOW(),
    username VARCHAR(30),
    room VARCHAR(30),
    sent_from INT,
    sent_to INT,
    message VARCHAR(140)
);