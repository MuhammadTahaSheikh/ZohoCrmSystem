<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Submission on 247CashOffer.com</title>
</head>

<body>
    <p>Hi,</p>
    <p>There's a new submission on Quick Cash For Land</p>

    <ul>
        <li><strong>Address:</strong> {{ $freeOffer['address'] }}</li>
        <li><strong>Phone:</strong> {{ $freeOffer['phone'] }}</li>
        <li><strong>Email:</strong> {{ $freeOffer['email'] }}</li>
        <li><strong>Aquire property:</strong> {{ $freeOffer['aquire_property'] }}</li>
        <li><strong>State:</strong> {{ $freeOffer['state'] }}</li>
        <li><strong>County:</strong> {{ $freeOffer['county'] }}</li>
        <li><strong>City:</strong> {{ $freeOffer['city'] }}</li>
        <li><strong>Zip Code:</strong> {{ $freeOffer['zip_code'] }}</li>
        <li><strong>APN:</strong> {{ $freeOffer['apn'] ?? 'N/A' }}</li>
        <li><strong>More than one property:</strong> {{ $freeOffer['more_than_one_property'] ? 'Yes' : 'No' }}</li>
        <li><strong>Vacant land in different state:</strong> {{ $freeOffer['vacant_land_in_different_state'] ? 'Yes' : 'No' }}</li>
        <li><strong>Currently live in different state:</strong> {{ $freeOffer['currently_live_in_different_state'] ? 'Yes' : 'No' }}</li>
        <li><strong>Priority:</strong> {{ $freeOffer['priority'] }}</li>
        <li><strong>Agree for promotion:</strong> {{ $freeOffer['agree'] ? 'Yes' : 'No' }}</li>
        <li><strong>Agree on privacy policy:</strong> {{ $freeOffer['agree1'] ? 'Yes' : 'No' }}</li>
    </ul>

    <p>Thank you!</p>
</body>

</html>