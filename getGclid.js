/* Function to get the value of a query parameter by name */
function getQueryParam(param) {
    /* Capture just the query parameters from current page */
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/* Capture the 'gclid' value from the URL */
const gclid = getQueryParam("gclid");

/* If 'gclid' is present in the URL, send it to the backend API endpoint */
if (gclid) {
    const api_url = "https://brandon-gclid-ingest.fly.dev/capture_gclid";

    /* Send gclid to backend API via POST request */
    fetch(api_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gclid: gclid }),
    })
    .then(response => {
        if(response.ok) {
            console.log('gclid successfully sent to the backend.');
        }
        else {
            console.error('Failed to send gclid to the backend.');
        }
    })
    .catch((error) => {
        console.error("Error sending gclid:", error);
    });
}

