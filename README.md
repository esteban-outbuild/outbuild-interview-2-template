# Activities Management Application

This is a full-stack application for managing activities with a Node.js backend and React frontend.

## Project Structure

- `node_client/` - Backend Node.js application
- `react_client/` - Frontend React application

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd node_client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example` and update the database credentials:
   ```bash
   cp .env.example .env
   ```

4. Follow the Database Setup instructions below to create and populate the database

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd react_client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend application:
   ```bash
   npm start
   ```

## Database Setup (TO BE REMOVED)

To create and populate the database with sample activities, follow these steps:

1. Make sure PostgreSQL is running on your system

2. Run the seed file using one of these commands (try them in order until one works):
   ```bash
   # Option 1: Connect to postgres database and run seed file
   psql postgres -f node_client/seed.sql

   # Option 2: If you get a permission error, specify the postgres user
   psql -U postgres postgres -f node_client/seed.sql
   ```

   The seed file will:
   - Drop the activities_db if it exists
   - Create a fresh activities_db
   - Create the activities table
   - Insert 9 sample activities

3. Update your .env file in node_client directory with your PostgreSQL credentials:
   ```
   DB_HOST=localhost
   DB_USER=postgres        # or your PostgreSQL username
   DB_PASS=your_password
   DB_NAME=activities_db
   DB_PORT=5432
   PORT=3001
   ```

The sample data includes 9 activities spread across 5 different schedules, with dates ranging from March 15-19, 2024.

## Usage

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## API Endpoints

- GET `/api/activities` - Retrieve all activities
- POST `/api/activities` - Create a new activity

## Database Schema

The activities table contains:
- id (Primary Key)
- schedule_id (Integer)
- start_date (DateTime)
- end_date (DateTime)
- createdAt (DateTime)
- updatedAt (DateTime)
