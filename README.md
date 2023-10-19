# Library Kiosk Project

Welcome to the Library Kiosk Project. This project is a mobile application developed using TypeScript and React Native, aiming to streamline the borrowing and returning of books through a self-service kiosk in a library.

[Click and view the application video review](https://clipchamp.com/watch/gWxH5UGRVou/embed)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Objective](#objective)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [Configuration](#configuration)
	- [Running the Development Server](#running-the-development-server)
- [Mocking the Backend](#mocking-the-backend)
	- [Google Books API](#google-books-api)
	- [DummyJSON](#dummyjson)
- [Contributing](#contributing)

## Technologies Used

- React Native with TypeScript
- React Query
- React Navigation
- React Native Alert Notification
- React Native Dotenv
- React Native Vector Icons
- Axios

## Objective

The primary objective of this project is to build a user-friendly front-end web application for a library self-service. It consists of three major components:

### 1. Main Services Page

- An attractive page showcasing two primary services:
    - Borrow a Book
    - Return a Book

### 2. Borrow a Book

On selecting "Borrow a Book," the user is guided through the following steps:

- Select a Book Category.
- Select a Book.
- User Authentication.
- Borrow Confirmation.

### 3. Return a Book

On selecting "Return a Book," the user is guided through the following steps:

- Book ID Entry. 
- User Authentication. 
- Return Confirmation.

## Project Structure

The project's structure is organized as follows:

-  `src`: Contains the source code for the application. 
-  `components`: Reusable UI components. 
-  `screens`: Application screens and components. 
-  `api`: Services for data fetching.
-  `assets`: Stores static resources like images and fonts.
-  `constants`: Stores constant values and configuration data.
-  `interfaces`: Defines TypeScript or data structure interfaces.
-  `contexts`: Manages state and provides data to components.
-  `navigation`: Handles routing and navigation for the application.
-  `styles`: Holds application theme and styling-related files.
-  `utils`: Stores utility functions and helper code.
-  `declarations`: Stores TypeScript declaration files.

## Getting Started

Follow these steps to get your project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:
-  **Node.js**: You need Node.js to run your React Native application. If you don't have it, you can download and install it from [nodejs.org](https://nodejs.org/).
- **npm** (Node Package Manager): npm usually comes with Node.js, so you don't need to install it separately. To check if you have it installed, run the following command in your terminal: ```npm -v```
- **Git**: You need Git for cloning the project repository. If you don't have it, you can download and install it from [git-scm.com](https://git-scm.com/).

### Installation

1.  **Clone the Repository**: To get started, you need to clone this repository to your local machine. Open your terminal and run the following command:
```git clone git@github.com:gigaamiridze/library-kiosk-mobile-app.git```

2.  **Change Directory**: Navigate to the project's root directory by running: ```cd library-kiosk-mobile-app```

3. **Install Dependencies**: Use npm to install the project dependencies: ```npm install```, also you can use yarn: ```yarn install```. 

### Configuration

In the project root you need to create ```.env``` file for environment variables with this content:
```BOOKS_API_KEY=AIzaSyCnanUBHliLM8PNNu-KvYcjN59BMBkmzW4```

### Running the Development Server

To start a development server and see your React app in action, run the following command: ```npm start``` or ```yarn start```.

## Mocking the Backend

In this project, I use the Google Books API for fetching book data and DummyJSON for simulating user login.

### Google Books API

The Google Books API is utilized to fetch book information for the project. You can access the API documentation and obtain an API key from [Google Books API Documentation](https://developers.google.com/books/docs/v1/using).

Here are the steps to fetch book data using the Google Books API:

1. Obtain an API key from the Google Developers Console. 
2. Configure your project to use the Google Books API and provide your API key. 
3. Make HTTP requests to the API endpoints to retrieve book information.

### DummyJSON

To mock user login for testing purposes, I use the DummyJSON service. This service provides dummy data, including user credentials. You can find more details and generate dummy data at [DummyJSON Documentation](https://dummyjson.com/docs/auth).

#### User Credentials:

-   Username: kminchelle
-   Password: 0lelplR

You can use these credentials for testing and development, ensuring that your application's login system is functional without accessing real user data.

## Contributing

1. Fork the repository on GitHub. 
2. Create a new branch with a descriptive name. 
3. Make your changes and commit them. 
4. Push your changes to your fork. 
5. Create a pull request to this repository.
