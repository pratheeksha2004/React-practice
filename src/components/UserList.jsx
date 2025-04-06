import React, { useState, useEffect } from 'react';

function UserList() {
  // 1. State Management
  const [users, setUsers] = useState([]); // Initialize with an empty array for the list
  const [loading, setLoading] = useState(true); // Start in loading state
  const [error, setError] = useState(null);   // Initially no error

  // 2. Side Effect for Fetching Data
  useEffect(() => {
    // 6. Cleanup using AbortController
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true); // Ensure loading is true when fetch starts
      setError(null);   // Clear previous errors

      try {
        // 5. Perform the asynchronous fetch
        const response = await fetch('https://jsonplaceholder.typicode.com/users', { signal }); // Pass the signal

        // Check for HTTP errors (like 404, 500)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response
        setUsers(data); // Update state with the fetched users

      } catch (err) {
        // Handle fetch errors (network issues, JSON parsing errors, AbortError)
        if (err.name === 'AbortError') {
          console.log('Fetch aborted'); // Ignore abort errors silently
        } else {
          console.error("Error fetching data:", err);
          setError(err.message); // Update error state
        }
      } finally {
        // This runs whether the fetch succeeded or failed
        // Only set loading to false if the fetch wasn't aborted
        if (!signal.aborted) {
            setLoading(false); // Set loading to false when done
        }
      }
    };

    fetchData(); // Call the async function to start fetching

    // 3. & 6. Cleanup function: Abort fetch if component unmounts
    return () => {
      controller.abort();
    };

  }, []); // <-- Empty dependency array means this effect runs only ONCE on mount

  // 4. Conditional Rendering based on state
  if (loading) {
    return <p>Loading users...</p>; // Show loading indicator
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error loading users: {error}</p>; // Show error message
  }

  // If no error and not loading, display the data
  return (
    <div>
      <h2>Users</h2>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}> {/* Always use a unique key for lists */}
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p> // Handle empty data case
      )}
    </div>
  );
}

export default UserList;