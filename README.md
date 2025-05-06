# Activities Management Application

This is a full-stack application for managing activities with a Node.js backend and React frontend.

## Project Structure

- `node_client/` - Backend Node.js application
- `react_client/` - Frontend React application

## Prerequisites

- Node.js (=v22.15.0)
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

4. Start the backend server:

   ```bash
   npm run dev
   ```

   The server will automatically:

   - Create the database tables if they don't exist
   - Seed the database with sample activities if the table is empty

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
   npm run dev
   ```

## Database Configuration

Update your `.env`
