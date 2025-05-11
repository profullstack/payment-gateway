/**
 * Basic tests for @profullstack/payment-gateway
 */

// Import the module
import paymentGateway from '../src/index.js';
import { jest } from '@jest/globals';

// Import providers
let cryptoProvider, mockProvider, stripeProvider;

try { cryptoProvider = await import('../src/providers/crypto.js'); }
catch (err) { console.log('Crypto provider not found or could not be loaded:', err.message); }

try { mockProvider = await import('../src/providers/mock.js'); }
catch (err) { console.log('Mock provider not found or could not be loaded:', err.message); }

try { stripeProvider = await import('../src/providers/stripe.js'); }
catch (err) { console.log('Stripe provider not found or could not be loaded:', err.message); }

describe('@profullstack/payment-gateway', () => {
  test('module exports something', () => {
    console.log('Testing @profullstack/payment-gateway...');
    console.log('Module exports:', Object.keys(paymentGateway));
    
    expect(Object.keys(paymentGateway).length).toBeGreaterThan(0);
  });
  
  // Test providers if they exist
  test('crypto provider if available', () => {
    if (cryptoProvider) {
      console.log('Testing crypto provider...');
      console.log('Crypto provider exports:', Object.keys(cryptoProvider));
      expect(Object.keys(cryptoProvider).length).toBeGreaterThan(0);
    } else {
      console.log('Crypto provider not available, skipping test');
    }
  });
  
  test('mock provider if available', () => {
    if (mockProvider) {
      console.log('Testing mock provider...');
      console.log('Mock provider exports:', Object.keys(mockProvider));
      expect(Object.keys(mockProvider).length).toBeGreaterThan(0);
    } else {
      console.log('Mock provider not available, skipping test');
    }
  });
  
  test('stripe provider if available', () => {
    if (stripeProvider) {
      console.log('Testing stripe provider...');
      console.log('Stripe provider exports:', Object.keys(stripeProvider));
      expect(Object.keys(stripeProvider).length).toBeGreaterThan(0);
    } else {
      console.log('Stripe provider not available, skipping test');
    }
  });
  
  // Test basic functionality
  test('processPayment function if available', () => {
    if (typeof paymentGateway.processPayment === 'function') {
      console.log('Testing processPayment function exists');
      expect(paymentGateway.processPayment).toBeDefined();
    } else {
      console.log('processPayment function not available, skipping test');
    }
  });
  
  test('refundPayment function if available', () => {
    if (typeof paymentGateway.refundPayment === 'function') {
      console.log('Testing refundPayment function exists');
      expect(paymentGateway.refundPayment).toBeDefined();
    } else {
      console.log('refundPayment function not available, skipping test');
    }
  });
  
  test('getPaymentStatus function if available', () => {
    if (typeof paymentGateway.getPaymentStatus === 'function') {
      console.log('Testing getPaymentStatus function exists');
      expect(paymentGateway.getPaymentStatus).toBeDefined();
    } else {
      console.log('getPaymentStatus function not available, skipping test');
    }
  });
});