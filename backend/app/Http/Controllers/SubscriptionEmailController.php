<?php

namespace App\Http\Controllers;
use App\Models\SubscriptionEmail;
use Illuminate\Http\Request;

class SubscriptionEmailController extends Controller
{
    public function index()
    {
        return SubscriptionEmail::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:subscription_emails,email',
        ]);

        $subscriptionEmail = new SubscriptionEmail();
        $subscriptionEmail->email = $request->email;
        $subscriptionEmail->save();

        return response()->json(['message' => 'Subscription email created successfully'], 201);
    }

    public function show($id)
    {
        return SubscriptionEmail::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'email' => 'required|email|unique:subscription_emails,email,' . $id,
        ]);

        $subscriptionEmail = SubscriptionEmail::findOrFail($id);
        $subscriptionEmail->email = $request->email;
        $subscriptionEmail->save();

        return response()->json(['message' => 'Subscription email updated successfully']);
    }

    public function destroy($id)
    {
        $subscriptionEmail = SubscriptionEmail::findOrFail($id);
        $subscriptionEmail->delete();

        return response()->json(['message' => 'Subscription email deleted successfully']);
    }
}
