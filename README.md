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

4. Create a PostgreSQL database named 'activities_db'

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
