<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session;

class CheckoutController extends Controller
{
    public function createCheckoutSession(Request $request)
    {
        try {
            Stripe::setApiKey(env('STRIPE_SECRET'));

            $price = $request->input('price');
            $services = $request->input('name');

            // Ensure that price is a number and services is a JSON array of strings
            if (is_numeric($price) && is_array(json_decode($services, true))) {
                $serviceNames = json_decode($services, true);

                // Join the product names into a single string separated by commas
                $productName = implode(', ', $serviceNames);

                $lineItem = [
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => 'Products',
                            'description' => $productName,
                        ],
                        'unit_amount' => $price * 100, // amount in cents
                    ],
                    'quantity' => 1,
                ];

                // Create a new Stripe Checkout Session
                $checkoutSession = Session::create([
                    'payment_method_types' => ['card'],
                    'line_items' => [$lineItem],
                    'mode' => 'payment',
                    'success_url' => 'http://localhost:3000/success',
                    'cancel_url' => 'http://localhost:3000/cancel',
                ]);

                return response()->json(['id' => $checkoutSession->id]);
            } else {
                // If the services is not an array of strings or price is not a number, return an error
                return response()->json(['error' => 'Invalid product name or price'], 400);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error creating checkout session', 'message' => $e->getMessage()], 500);
        }
    }
}
