# Cryptic Project

## Overview

Decryption Process:

Each character of the ciphertext was decrypted using the corresponding character of the key.
The decrypted text HELLO matches the expected output.

Mock API:

The /encrypt endpoint returned the mock data (key: 'KEY', encrypted_text: 'RIJVS').
The /verify endpoint successfully logged the payload and returned a mock success message.

Next Steps
Replace Mock API with Real API:

If you have access to the real API, replace the mock api.get and api.post methods with actual HTTP requests using a library like axios.

Test with Real Data:
Fetch the encrypted text and key from the real /encrypt endpoint.
Verify the decrypted text with the /verify endpoint.

Enhance Error Handling:
Add error handling for invalid API responses or decryption failures.

Optional Enhancements:
Write unit tests for the decryptText function and API interactions.
Add logging or a user interface for better usability.

## Project Structure
```
cryptic
├── src
│   ├── index.js          # Main entry point of the application
│   ├── utils
│   │   └── helpers.js    # Utility functions for data manipulation
│   └── services
│       └── apiService.js  # Handles API requests
├── tests
│   └── index.test.js     # Unit tests for the application
├── package.json          # Configuration file for npm
├── package-lock.json     # Locks the versions of dependencies
└── .gitignore            # Specifies files to ignore by Git
```

## Installation
To get started with the Cryptic project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd cryptic
npm install
```

## Usage
To run the application, use the following command:

```bash
npm start
```

## Testing
To run the tests, use the following command:

```bash
npm test
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the ISC License.
