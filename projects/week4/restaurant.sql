CREATE TABLE restaurant (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR,
  distance DECIMAL(10,1),
  stars DECIMAL(3,1),
  category VARCHAR,
  favoriteDish VARCHAR,
  doesTakeout BOOLEAN,
  lastTimeYouAteThere DATE
);
