export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received body:", body); // Debug log

    const { name, email, subject, message } = body;

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwjyNkLUWfjvSNf1SdgxJ5zCUDy8yHnrz4Il-Y_q4JkC7gbGwHaQo1bXojRkeqrsDVW/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      }
    );

    const data = await response.json();
    console.log("Google Apps Script response:", data); // Debug log

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    console.error("API error:", error); // Log the actual error
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
