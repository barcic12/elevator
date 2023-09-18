## React Elevator Control System Documentation

Introduction
This documentation provides an overview of a React application for simulating an elevator control system within a building. The application visually represents the building, including multiple elevators and floors. Users can control the elevators using a simple interface.

Table of Contents
Elevator Component

Description of the Elevator component and its features.
Building Component

Explanation of the Building component responsible for rendering elevators within a building.
Controls Component

Details about the Controls component that allows users to interact with elevators.
CSS Styles

Description of the CSS styles used for styling components.
App Component

Overview of the main App component that ties everything together.
Usage Instructions

Instructions for running and using the React Elevator Control System.

## Elevator Component

The Elevator component represents an individual elevator within the building. Key features include:

Visual representation of the elevator's current position.
Display of an elevator image when the elevator is on a specific floor.
An empty placeholder when the elevator is not on the floor.

## Building Component

The Building component is responsible for rendering multiple elevators within a building. It includes:

Acceptance of props such as numberOfFloors, numberOfElevators, and actualElevators for configuration.
Rendering a specified number of elevator components.
Passing the floors and actualElevators props to individual elevator components.

## Controls Component

The Controls component allows users to interact with the elevators. Features include:

Input fields for specifying the number of floors and elevators.
Real-time updates to elevator configuration based on user input.

## CSS Styles

CSS styles are used to visually style the elevator components, building layout, and input fields. Key styles include:

Borders, margins, padding, and dimensions for layout and spacing.
Input field styling for improved user experience.

## App Component

The App component is the main component of the application. It includes:

State management for numberOfFloors, numberOfElevators, and actualElevators.
Use of the useEffect hook to update the elevator configuration based on user input.
Rendering of the building and controls components based on user-defined parameters.

## Usage Instructions

To run and use the React Elevator Control System:

Ensure you have Node.js and npm (Node Package Manager) installed on your system.
Create a new React application by running npx create-react-app elevator-control-system.
Replace the default src folder in your React application with the provided code.
Install any required dependencies by running npm install.
Start the development server with npm start.
Open a web browser and navigate to http://localhost:3000 to view the application.
Use the input fields to specify the number of floors and elevators.
The application will display the building layout with elevators based on your input.
