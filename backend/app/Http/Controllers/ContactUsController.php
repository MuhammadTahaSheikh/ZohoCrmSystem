<?php

namespace App\Http\Controllers;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use App\Models\ContactUs;
class ContactUsController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'phone' => 'nullable|string|max:20',
                'website' => 'nullable|string|max:255',
                'description' => 'nullable|string',
            ]);

            $contact = ContactUs::create($validatedData);

            return response()->json(['message' => 'Contact data stored successfully', 'contact' => $contact], 201);
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 409);
        }
    }
}
