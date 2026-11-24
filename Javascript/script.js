
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const status = document.getElementById("form-status");
        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        // Replace these with your actual EmailJS values
        const SERVICE_ID = "service_gv5guqn";
        const TEMPLATE_ID = "template_um9heao";
        const PUBLIC_KEY = "eiO-ow4TlAla6p0nQ";

        submitButton.disabled = true;
        status.textContent = "Sending your enquiry...";

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                contactForm,
                { publicKey: PUBLIC_KEY }
            );

            status.textContent =
                "Thank you! Your enquiry has been sent successfully.";

            contactForm.reset();
        } catch (error) {
            console.error("EmailJS error:", error.status, error.text, error);
            status.textContent =
                "Sorry, your enquiry could not be sent. Please try again.";
        } finally {
            submitButton.disabled = false;
        }
    });
}
