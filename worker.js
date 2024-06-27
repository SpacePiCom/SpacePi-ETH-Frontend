addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  console.log(pathname, "?");
  // Distribute to different handling logic based on the request path
  if (pathname.startsWith('/api')) {
      // If the request path starts with '/api', forward to API handling logic
      return handleAPIRequest(request);
  } else {
      // If the request path does not start with '/api', forward to page handling logic
      return handlePageRequest(request);
  }
}

// API handling logic
async function handleAPIRequest(request) {
  const apiUrl = 'https://api.ethplorer.io/getTokenInfo/0x69b14e8d3cebfdd8196bfe530954a0c226e5008e?apiKey=freekey'; // Replace with the actual API URL

  const response = await fetch(apiUrl, request);

  const modifiedHeaders = new Headers(response.headers);
  modifiedHeaders.set('Access-Control-Allow-Origin', '*');
  modifiedHeaders.set('Access-Control-Allow-Credentials', 'true');

  return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: modifiedHeaders,
  });
}

// Page handling logic
async function handlePageRequest(request) {
  const pageUrl = 'https://ethpage.space-pi.com/'; // Replace with the actual page URL
  const response = await fetch(pageUrl, request);
  const modifiedHeaders = new Headers(response.headers);
  return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: modifiedHeaders,
  });
}
