# BookMatch

Dein Buch. Dein Match.

# Setup

## **Prerequisites**

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v20 or later)
- [SQLite3](https://sqlite.org/download.html)
- A code editor like [VS Code](https://code.visualstudio.com/)

## **Setup Backend**

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>/backend
   ```

   => make sure you are in the backend folder in the terminal, for example: C:\git\bookmatch\backend>

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Database Setup**:
   The database file will be automatically generated (db/database.sqlite).

## **Start Backend**

=> make sure you are in the backend folder in the terminal, for example: C:\git\bookmatch\backend>

```bash
node server.js
```

The server should now be running at [http://localhost:3000](http://localhost:3000).

## **Setup Frontend**

1. **Navigate to the Frontend Folder**:

   ```bash
   cd <repository-folder>/frontend
   ```

2. **Serve the Frontend**:
   1. Install this VS Code extension: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
   2. Press the "GO Live" Button (as shown on the website of the extension)
   3. Open [http://127.0.0.1:5500/frontend/](http://127.0.0.1:5500/frontend/) in your browser.
