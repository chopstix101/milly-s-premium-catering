import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(resendApiKey);
    const { name, email, phone, eventType, date, guests, location, budget, requests, message, formType } = await req.json();

    const isQuote = formType === "quote";
    const subject = isQuote
      ? `New Quote Request - ${name}`
      : `New Contact Message - ${name}`;

    const htmlContent = isQuote
      ? `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #1a0f05; color: #f5f0eb; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #D4AF77; font-size: 28px; margin: 0;">Milly's Outside Catering</h1>
            <p style="color: #999; font-style: italic; margin-top: 5px;">A Bite Above The Rest</p>
          </div>
          <h2 style="color: #D4AF77; border-bottom: 1px solid #D4AF77; padding-bottom: 10px;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #999;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #999;">Email:</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #999;">Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #999;">Event Type:</td><td style="padding: 8px 0;">${eventType || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #999;">Date:</td><td style="padding: 8px 0;">${date || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #999;">Guests:</td><td style="padding: 8px 0;">${guests || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #999;">Location:</td><td style="padding: 8px 0;">${location || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #999;">Budget:</td><td style="padding: 8px 0;">${budget || "N/A"}</td></tr>
          </table>
          ${requests ? `<div style="margin-top: 15px;"><p style="color: #999; margin-bottom: 5px;">Special Requests:</p><p style="background: rgba(212,175,119,0.1); padding: 12px; border-radius: 8px;">${requests.replace(/\n/g, "<br>")}</p></div>` : ""}
          <hr style="border: none; border-top: 1px solid #333; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px; text-align: center;">Sent via Milly's Outside Catering website</p>
        </div>
      `
      : `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #1a0f05; color: #f5f0eb; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #D4AF77; font-size: 28px; margin: 0;">Milly's Outside Catering</h1>
            <p style="color: #999; font-style: italic; margin-top: 5px;">A Bite Above The Rest</p>
          </div>
          <h2 style="color: #D4AF77; border-bottom: 1px solid #D4AF77; padding-bottom: 10px;">New Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #999;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #999;">Email:</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #999;">Phone:</td><td style="padding: 8px 0;">${phone || "N/A"}</td></tr>
          </table>
          <div style="margin-top: 15px;"><p style="color: #999; margin-bottom: 5px;">Message:</p><p style="background: rgba(212,175,119,0.1); padding: 12px; border-radius: 8px;">${message ? message.replace(/\n/g, "<br>") : ""}</p></div>
          <hr style="border: none; border-top: 1px solid #333; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px; text-align: center;">Sent via Milly's Outside Catering website</p>
        </div>
      `;

    const result = await resend.emails.send({
      from: "Milly's Outside Catering <quotes@millysoutsidecatering.co.ke>",
      to: [
        "millyoutsidecatering@gmail.com",
        "kovact476@gmail.com",
        "director@millysoutsidecatering.co.ke",
        "ken.kaibe@millysoutsidecatering.co.ke",
        "milly.okina@millysoutsidecatering.co.ke",
      ],
      replyTo: email,
      subject,
      html: htmlContent,
    });

    console.log("✅ Resend success:", result);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Resend ERROR:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
