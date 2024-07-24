//  Iterate with Async/await

async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        console.log(value);
    }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4]);

// Awaiting a call

async function fetchData() {
    // Simulating API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched data");
        }, 1000);
    });
}

async function awaitCall() {
    const data = await fetchData();
    console.log(data);
}

// Example usage:
awaitCall();

// Handling errors with async/await

async function fetchDataWithError() {
    // Simulating an API call that sometimes fails
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // 50% chance of success
            if (success) {
                resolve("Fetched data");
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
}

async function awaitCallWithErrorHandling() {
    try {
        const data = await fetchDataWithError();
        console.log(data);
    } catch (error) {
        console.log("Error: Unable to fetch data. Please try again later.");
    }
}

// Example usage:
awaitCallWithErrorHandling();


// Chaining async/await

async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("First function complete");
}

async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Second function complete");
}

async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Third function complete");
}

async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

// Example usage:
chainedAsyncFunctions();

// awaiting concurrent request

async function fetchAPI1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 1");
        }, 1000);
    });
}

async function fetchAPI2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 2");
        }, 1000);
    });
}

async function concurrentRequests() {
    const [result1, result2] = await Promise.all([fetchAPI1(), fetchAPI2()]);
    console.log(`Result 1: ${result1}, Result 2: ${result2}`);
}

// Example usage:
concurrentRequests();

// Awaiting parallel call

async function fetchFromURL(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 1000);
    });
}

async function parallelCalls(urls) {
    const promises = urls.map(url => fetchFromURL(url));
    const responses = await Promise.all(promises);
    responses.forEach(response => console.log(response));
}

// Example usage:
parallelCalls(["http://api1.com", "http://api2.com", "http://api3.com"]);
