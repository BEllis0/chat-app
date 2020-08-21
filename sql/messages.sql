CREATE TABLE chat_app.messages (
    id SERIAL PRIMARY KEY,
    _date TIMESTAMP default NOW(),
    sent_from INT,
    sent_to INT,
    message VARCHAR(140)
);