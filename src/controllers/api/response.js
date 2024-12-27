export function Response(success, message, customData = null, status = success ? 200 : 400) {
    let responseBody = {
        "success": success,
        "message": message
    }

    if (customData) {
        responseBody['body'] = customData;
    }

    return new Response(
        JSON.stringify(responseBody),
        {status: status, headers: {"Content-Type": "application/json"}}
    );
}