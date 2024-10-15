<?php

namespace App\Http\Controllers;

use App\Models\Integration;
use Illuminate\Http\Request;

class IntegrationController extends Controller
{
    public function index()
    {
        $integrations = Integration::all();

        return response()->json($integrations);
    }

    public function show($id)
    {
        $integration = Integration::find($id);

        if (is_null($integration)) {
            return response()->json(['message' => 'Integration not found'], 404);
        }

        return response()->json($integration);
    }
}
