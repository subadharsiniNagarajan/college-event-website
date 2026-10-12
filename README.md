# College Event Website

## Project Overview

The College Event Website is a frontend web application designed to provide students and visitors with information about upcoming college events, workshops, competitions and activities.

The website allows users to:
- View upcoming college events
- Search for events
- Filter events by category
- View detailed event information
- Add and remove events from favourites
- Register interest in an event
- Contact the college event team

## Technologies Used

- HTML5
- CSS3
- JavaScript
- LocalStorage

## Website Pages

### 1. Home
Provides an introduction to the college events website and highlights upcoming events.

### 2. Events
Displays six fictional college events with:
- Event title
- Category
- Date
- Venue
- Description
- Favourite option
- View Details option

### 3. Event Details
Displays detailed information about the selected event, including:
- Event ID
- Title
- Category
- Date
- Venue
- Description
- Register Interest option

### 4. Registration
Allows users to enter their details and register their interest in an event.

The form includes validation for:
- Name
- Email
- Phone number
- Event selection

A success preview is displayed after valid information is entered.

### 5. Contact
Provides basic contact information for the college event team.

## Main Features

### Search
Users can search for events using the event name.

The search is case-insensitive.

### Category Filter
Users can filter events by category.

Available categories include:
- Technology
- Cultural
- Sports
- Workshop
- Art
- Entertainment

### Reset
The Reset button clears the search and category filter and displays all events.

### Favourite Events
Users can add or remove events from favourites.

Favourite information is stored using browser LocalStorage, so the selected favourites remain after refreshing the page.

### Responsive Design
The website is designed to work on desktop and mobile screen sizes.

The website was tested at approximately:
- 360px
- 768px
- 1366px

### Keyboard Navigation
The website supports navigation using the keyboard Tab key.

## Sample Events

| Event ID | Event | Category | Date | Venue |
|---|---|---|---|---|
| EVT001 | Tech Symposium 2026 | Technology | 15 October 2026 | Main Auditorium |
| EVT002 | Cultural Fest 2026 | Cultural | 18 October 2026 | College Ground |
| EVT003 | Sports Meet 2026 | Sports | 22 October 2026 | Sports Ground |
| EVT004 | AI & Robotics Workshop | Workshop | 24 October 2026 | Innovation Lab |
| EVT005 | Photography Exhibition | Art | 27 October 2026 | Seminar Hall |
| EVT006 | Music Night 2026 | Entertainment | 30 October 2026 | Open Air Theatre |

## Project Structure

```text
Suba_Darsini_N_October2026/
│
├── Project/
│   ├── index.html
│   ├── events.html
│   ├── event-details.html
│   ├── registration.html
│   ├── contact.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
├── Evidence/
│
└── Documentation/
    └── README.md



    Limitations
This is a frontend-only project.
The registration form displays a success preview but does not send data to a real server or database.
All event information used in the project is fictional/sample data.
Testing
The website was tested for:
Navigation
Event search
Category filtering
Reset functionality
Favourite functionality
LocalStorage
Registration form validation
Event details
Register Interest navigation
Mobile responsiveness
Keyboard navigation
Conclusion
The College Event Website provides a simple and responsive interface for discovering college events, viewing event details, managing favourite events and previewing registration information.