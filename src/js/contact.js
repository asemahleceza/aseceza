/* global grecaptcha */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("status");

    if (!form || !status) return; // Safety check

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        status.textContent = "Submitting...";

        try {
            // Get the reCAPTCHA token
            const token = grecaptcha.getResponse();
            if (!token) {
                status.textContent = "Please complete the reCAPTCHA.";
                return;
            }

            // Collect form data
            const formData = new FormData(form);
            const data = {
                ...Object.fromEntries(formData.entries()),
                token: token,
            };

            // Send to your backend
            const res = await fetch(
                "https://4d2ilhlzy0.execute-api.us-east-1.amazonaws.com/contact",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                },
            );

            const result = await res.json();

            const contactFormFailureResponse =
                "Something went wrong while sending your message.\nPlease try again later or reach out via LinkedIn instead.";

            if (res.ok) {
                status.textContent =
                    result.message || "Message sent successfully!";
                form.reset();
                grecaptcha.reset(); // reset reCAPTCHA after successful submission
            } else {
                status.textContent = result.error || contactFormFailureResponse;
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            status.textContent = "Error sending message.";
        }
    });
});
