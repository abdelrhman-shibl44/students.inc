# Big Five Personality Assessment Web Application

This is a web application built using React.js that allows users to take the Big Five Personality Assessment. It includes key features such as a navigation bar, fetching user data from an API, and routing using React Router.

## Instructions

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd big-five-personality-assessment`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the application in your browser at `http://localhost:3000`

To run the tests, use the following command:

## Design Choices

1. **React.js**: I chose React.js as the framework for this project due to its component-based architecture, reusability, and ease of state management.
2. **React Router**: I used React Router to handle routing and navigation within the application, enabling multiple pages and a better user experience.
3. **API Integration**: I utilized the `fetch` API to retrieve user data from a remote server and display it in the navigation bar. Error handling was implemented to provide a suitable fallback UI in case of API failures.
4. **Responsive Design**: The application is designed to be responsive and render properly on different devices and window sizes. I utilized CSS media queries and responsive design techniques to achieve this.

## Challenges and Solutions

During the development process, I encountered a few challenges and overcame them:

1. **API Error Handling**: Implementing error handling for API calls was a challenge. To handle potential errors, I utilized try-catch blocks and conditional rendering to display appropriate error messages to the user when fetching user data failed.

## Managing Dynamic State with useState and useEffect

In scenarios where dynamic state management is required on a page, we can use the `useState` and `useEffect` hooks provided by React.

- `useState`: The `useState` hook allows us to declare and manage state variables in functional components. We can define an initial state value and a function to update the state. For example, we can use `useState` to manage the open and close state of a modal window.

- `useEffect`: The `useEffect` hook is used to perform side effects in functional components. It accepts a callback function that runs after every render. We can use `useEffect` to handle tasks such as fetching data from an API, subscribing to events, or performing cleanup operations. For example, we can use `useEffect` to fetch user data from an API when the component mounts.

In the context of this project, we used the `useState` hook to manage the user data fetched from the API. The initial state was set to `null`, and the `setUser` function was used to update the state with the retrieved data. The `useEffect` hook was used to fetch the user data when the component mounted, ensuring that the state is updated with the fetched data.

By leveraging these hooks, we can effectively manage and update dynamic state in React components.
