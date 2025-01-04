# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js: insufficient error handling in an HTTP server. The `bug.js` file shows a server lacking proper error handling.  The `bugSolution.js` file provides a corrected version with improved error handling.

## Problem

The initial server implementation fails to gracefully handle potential errors, such as network interruptions or client connection issues. This can lead to unexpected server crashes or data inconsistencies.

## Solution

The improved implementation includes `error` event listeners and try...catch blocks to handle potential exceptions during the request-response cycle.  This ensures that the server remains operational and responds appropriately even in the face of errors.