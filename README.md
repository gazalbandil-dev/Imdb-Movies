# Getting Started with Create React App

# CineVerse – Movie Rating Web Application

CineVerse is a movie discovery and rating web application that allows users to search for movies, view detailed information, and maintain a personal wishlist. The application delivers a clean and responsive interface built with modern frontend technologies.

# Live Demo

Deployed Application:
https://cineversemovies-sigma.vercel.app/

# Tech Stack

-> Create React App

-> Tailwind CSS

-> React Query (for data fetching and caching)

-> Redux Toolkit (for wishlist state management)

# Features
-> Home Section

Displays a curated list of movies with an intuitive layout and smooth navigation.

-> Search Bar

Users can search for movies by name. Search results update efficiently using React Query.

-> Wishlist

Users can add or remove movies from their wishlist by clicking the heart icon.
Wishlist state is managed using Redux Toolkit and persisted through localStorage.

-> Detailed Movie Page

Each movie has a dedicated detail page displaying information such as description, ratings, release date, cast, and posters.

# Installation and Setup

Follow the steps below to run this project locally:
```
npm install
npm start
```


# The development server will start on:
http://localhost:3000/

Project Structure Overview

```
src/
│── components/
│── pages/
│── redux/
│── hooks/
│── styles/
│── App.js
│── index.js
```

# Project Images

<img width="1892" height="910" alt="image" src="https://github.com/user-attachments/assets/5076c9d0-1643-4542-b587-8ec86102cce9" />
<img width="1897" height="902" alt="image" src="https://github.com/user-attachments/assets/b1af4e56-31e7-451d-885f-03e5c3ffb413" />
<img width="1901" height="912" alt="image" src="https://github.com/user-attachments/assets/82d5eec5-e876-4bd4-8898-c272ba73013c" />
<img width="596" height="692" alt="image" src="https://github.com/user-attachments/assets/f2f1d101-a8ac-453b-8a62-f85314b4262d" />

# Conclusion

CineVerse was developed as an IMDb-style movie rating and wishlist application focusing on clean UI design, smooth interactions, and efficient state management. Redux Toolkit ensures predictable global state handling for the wishlist, while React Query provides optimized data fetching and caching for movie data.
