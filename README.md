# SpacePi(ETH) Frontend

To promote the decentralization process of SpacePi, the official website of SpacePi(ETH) is now open source.

## Installation Steps

1. Clone the repository to your local machine
    ```sh
    git clone https://github.com/SpacePiCom/SpacePi-ETH-Frontend.git
    ```
2. Navigate to the project directory
    ```sh
    cd SpacePi_ETH
    ```
3. Install dependencies
    ```sh
    yarn install
    ```

## Usage

1. Run the development server
    ```sh
    yarn dev
    ```
    After running, you can view the project in your browser at `http://localhost:82`.

2. Build the project
    ```sh
    yarn build
    ```
    The built files will be output to the `dist` directory.

## Worker.js Usage

The `worker.js` script is used to handle different types of requests to the server, such as API requests and page requests.

### How to use `worker.js`

1. Ensure `worker.js` is included in your project directory.

2. In `worker.js`, set up an event listener for fetch events to handle requests:

    ```javascript
    addEventListener('fetch', event => {
        event.respondWith(handleRequest(event.request));
    });
    ```

3. Implement `handleRequest` to route requests to appropriate handlers based on the request path:

    ```javascript
    async function handleRequest(request) {
        const { pathname } = new URL(request.url);

        if (pathname.startsWith('/api')) {
            return handleAPIRequest(request);
        } else {
            return handlePageRequest(request);
        }
    }
    ```

4. Define functions `handleAPIRequest` and `handlePageRequest` to process API and page requests respectively.

For more details, refer to the comments and documentation within `worker.js`.

## Scripts

- `yarn dev`: Start the development server with hot module replacement.
- `yarn build`: Build the project for production and generate optimized static files.

## License

[MIT](LICENSE)

## Contact

If you have any questions, you can contact me via:

- Email: pi@space-pi.com
- GitHub: [SpacePiCom](https://github.com/SpacePiCom/)
