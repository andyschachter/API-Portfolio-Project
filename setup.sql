CREATE DATABASE breweriesApi;

CREATE USER 'beerUser'@'localhost' IDENTIFIED BY 'password456!';

GRANT ALL ON breweriesApi.* TO 'brewUser'@'localhost';

USE breweriesApi;

CREATE TABLE breweries (
  id INT auto_increment,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  logo TEXT NOT NULL,
  website TEXT NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE beers (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  style TEXT NOT NULL,
  abv VARCHAR(10) NOT NULL,
  logo TEXT NOT NULL,
  breweryId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (breweryId) REFERENCES breweries(id)
);

INSERT INTO authors (nameFirst, nameLast) 
VALUES 
  ("Agatha", "Christie"),
  ("Alexandre", "Dumas"),
  ("Alice", "Walker"),
  ("Arthur", "Conan Doyle"),
  ("Arthur", "Miller"),
  ("Bram", "Stoker"),
  ("Charles", "Dickens"),
  ("Chinua", "Achebe"),
  ("Fyodor", "Dostoyevsky"),
  ("George", "Orwell"),
  ("H.G.", "Wells"),
  ("Leo", "Tolstoy"),
  ("Oscar", "Wilde"),
  ("Ray", "Bradbury"),
  ("Robert", "Louis Stevenson");

INSERT INTO novels (title, authorId) 
VALUES 
  ("Murder on the Orient Express", 1),
  ("The Three Musketeers", 2),
  ("The Color Purple", 3),
  ("The Hound of the Baskervilles", 4),
  ("The Crucible", 5),
  ("Dracula", 6),
  ("A Tale of Two Cities", 7),
  ("Things Fall Apart", 8),
  ("Crime and Punishment", 9),
  ("Animal Farm", 10),
  ("The Time Machine", 11),
  ("War and Peace", 12),
  ("The Picture of Dorian Gray", 13),
  ("Fahrenheit 451", 14),
  ("The Strange Case of Dr. Jekyll and Mr. Hyde", 15);

INSERT INTO genres (name) 
VALUES 
  ("Adventure"),
  ("African Literature"),
  ("Crime"),
  ("Drama"),
  ("Dystopia"),
  ("Fantasy"),
  ("Fiction"),
  ("French Literature"),
  ("Gothic"),
  ("Historical Fiction"),
  ("Horror"),
  ("Mystery"),
  ("Plays"),
  ("Russian Literature"),
  ("Science Fiction"),
  ("Time Travel"),
  ("Thriller"),  
  ("War");

INSERT INTO novelsGenres (genreId, novelId) 
VALUES 
  (7, 1),
  (12, 1),
  (7, 2),
  (10, 2),
  (1, 2),
  (8, 2),
  (7, 3),
  (10, 3),
  (7, 4),
  (12, 4),
  (3, 4),
  (17, 4),
  (7, 5),
  (10, 5),
  (4, 5),
  (13, 5),
  (7, 6),
  (11, 6),  
  (6, 6),
  (7, 7),
  (10, 7),
  (7, 8),
  (10, 8),
  (2, 8),
  (7, 9),
  (14, 9),
  (12, 9),
  (7, 10),
  (15, 10),
  (5, 10),
  (7, 11),
  (15, 11),
  (16, 11),
  (7, 12),
  (10, 12),
  (18, 12),
  (14, 12),
  (7, 13),
  (11, 13),
  (9, 13),
  (6, 13),
  (7, 14),
  (15, 14),
  (5, 14),
  (7, 15),
  (12, 15),
  (15, 15),
  (11, 15);

  