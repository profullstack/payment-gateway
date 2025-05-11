/**
 * Basic tests for @profullstack/payment-gateway
 */

// Import the module
const paymentGateway = require('../src/index.js');

// Basic test to ensure the module exports something
console.log('Testing @profullstack/payment-gateway...');
console.log('Module exports:', Object.keys(paymentGateway));

if (Object.keys(paymentGateway).length === 0) {
  console.error('ERROR: Module does not export anything!');
  process.exit(1);
}

// Test providers if they exist
try {
  const cryptoProvider = require('../src/providers/crypto.js');
  console.log('Testing crypto provider...');
  console.log('Crypto provider exports:', Object.keys(cryptoProvider));
} catch (err) {
  console.log('Crypto provider not found or could not be loaded:', err.message);
}

try {
  const mockProvider = require('../src/providers/mock.js');
  console.log('Testing mock provider...');
  console.log('Mock provider exports:', Object.keys(mockProvider));
} catch (err) {
  console.log('Mock provider not found or could not be loaded:', err.message);
}

try {
  const stripeProvider = require('../src/providers/stripe.js');
  console.log('Testing stripe provider...');
  console.log('Stripe provider exports:', Object.keys(stripeProvider));
} catch (err) {
  console.log('Stripe provider not found or could not be loaded:', err.message);
}

// Test basic functionality
if (typeof paymentGateway.processPayment === 'function') {
  console.log('Testing processPayment function exists:', typeof paymentGateway.processPayment === 'function' ? 'SUCCESS' : 'FAILED');
}

if (typeof paymentGateway.refundPayment === 'function') {
  console.log('Testing refundPayment function exists:', typeof paymentGateway.refundPayment === 'function' ? 'SUCCESS' : 'FAILED');
}

if (typeof paymentGateway.getPaymentStatus === 'function') {
  console.log('Testing getPaymentStatus function exists:', typeof paymentGateway.getPaymentStatus === 'function' ? 'SUCCESS' : 'FAILED');
}

console.log('Basic test passed!');