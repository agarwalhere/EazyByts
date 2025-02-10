export async function POST(req) {
    try {
      const { name, email, subject, message } = await req.json();
  
      if (!email || !message) {
        return new Response(JSON.stringify({ success: false, message: "Invalid data" }), { status: 400 });
      }
  
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 
        },
        body: JSON.stringify({
          from: "mail id", // generated resend mail id
          to: "mail id", //your personal mail id
          subject: subject || "New Contact Form Submission",
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
      });
  
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
      return new Response(JSON.stringify({ success: true, message: "Email sent!" }), { status: 200 });
    } catch (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ success: false, message: "Failed to send email." }), { status: 500 });
    }
  }
  