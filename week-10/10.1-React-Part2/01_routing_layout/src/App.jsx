// Single Page Applications and Routing
// Layouts

import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* dumb way to nevigate */}
      {/* <h1>
        
        <a href="/">Allen</a> :{" "}
        <a href="/neet/online-coaching-class-11">class 11</a> ||{" "}
        <a href="/neet/online-coaching-class-12">class 12</a>
      </h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="neet/online-coaching-class-11"
              element={<Class11Program />}
            />

            <Route
              path="neet/online-coaching-class-12"
              element={<Class12Program />}
            />

            <Route path="/" element={<Landing />} />

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// layout

function Layout() {
  return (
    <div style={{ height: "100vh", background: "yellow" }}>
      <Link to="/">Allen</Link> |{" "}
      <Link to="neet/online-coaching-class-11">Class 11</Link> |{" "}
      <Link to="neet/online-coaching-class-12">Class 12</Link>
      <div style={{ height: "90vh", background: "red" }}>
        <Outlet />
      </div>
        <footer style={{ background: "blue" }}>Footer | Contact Us</footer>
    </div>
  );
}

function Landing() {
  // Return the JSX for the component
  return (
    <div>
      {/* Display the main title of the landing page */}
      <h1>Welcome to Allen</h1>
    </div>
  );
}

function Class11Program() {
  // Return the JSX for the component
  return (
    <div>
      {/* Display the heading for the Class 11 program */}
      <h2>Neet Programs for Class 11th</h2>
    </div>
  );
}

function Class12Program() {
  // useNavigate hook allows programmatic navigation within the component
  const navigate = useNavigate();

  // Function to redirect the user to the landing page when the button is clicked
  function redirectUser() {
    navigate("/"); // Navigate to the landing page ("/" path)
  }

  // Return the JSX for the component
  return (
    <div>
      <h2>Neet Programs for Class 12th</h2>

      {/* Button that triggers the redirect function to navigate back to the landing page */}
      <button onClick={redirectUser}>Back to Landing Page</button>
    </div>
  );
}

function ErrorPage() {
  // Return the JSX for the component
  return (
    <div>
      {/* Display a message indicating the page was not found */}
      <h1>404 Page not found</h1>
    </div>
  );
}

export default App;
