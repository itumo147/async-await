// Define the async function
async function awaitCall() {
    try {
        // Simulate fetching data from an API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON data from the response
        const data = await response.json();
        
        // Log the data
        console.log(data);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching data:', error);
    }
}

// Call the async function
awaitCall();


// Define the async function
async function parallelCalls(urls) {
    try {
        // Create an array of fetch promises
        const fetchPromises = urls.map(url => fetch(url));
        
        // Use Promise.all to wait for all the fetch promises to resolve
        const responses = await Promise.all(fetchPromises);
        
        // Check if all responses are OK
        const checkStatusPromises = responses.map(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} for URL: ${response.url}`);
            }
            return response.json(); // Parse the JSON data
        });

        // Wait for all the JSON parsing promises to resolve
        const data = await Promise.all(checkStatusPromises);
        
        // Log the data
        console.log(data);
    } catch (error) {
        // Handle any errors that occur during the fetch or JSON parsing
        console.error('Error fetching data:', error);
    }
}

// Example usage
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

// Call the function
parallelCalls(urls);


// Define the async function
async function awaitCall() {
    try {
        // Simulate fetching data from an API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        
        // Parse the JSON data from the response
        const data = await response.json();
        
        // Log the data
        console.log('Data fetched successfully:', data);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Failed to fetch data. Please try again later.', error);
    }
}

// Call the async function
awaitCall();

