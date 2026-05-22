async function generateAIReply(emailContent) {

    try {

        const settings =
            await chrome.storage.local.get([
                "tone",
                "instructions"
            ]);

        const response = await fetch(
            "https://email-writer-sb-u1wg.onrender.com/api/email/generate",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({

                    emailContent:
                        emailContent,

                    tone:
                        settings.tone
                        || "professional",

                    instructions:
                        settings.instructions
                        || ""

                })
            }
        );

        const text =
            await response.text();

        return text;

    } catch (error) {

        console.error(error);

        return "AI Reply Error";
    }
}

function injectAIButton() {

    // Gmail send button area
    const sendButtons =
        document.querySelectorAll(".dC");

    sendButtons.forEach((sendBtn) => {

        const parent =
            sendBtn.parentElement;

        // Prevent duplicate
        if (
            parent.querySelector(
                ".my-ai-btn"
            )
        ) {
            return;
        }

        // Create button
        const button =
            document.createElement(
                "div"
            );

        button.innerText =
            "AI Reply";

        button.className =
            "my-ai-btn";

        // Styling
        button.style.background =
            "#1a73e8";

        button.style.color =
            "white";

        button.style.padding =
            "10px 16px";

        button.style.marginLeft =
            "10px";

        button.style.borderRadius =
            "6px";

        button.style.cursor =
            "pointer";

        button.style.fontWeight =
            "bold";

        button.style.userSelect =
            "none";

        button.style.zIndex =
            "999999";

        button.style.display =
            "inline-block";

        // CLICK
        button.addEventListener(
            "click",
            async (e) => {

                e.preventDefault();

                e.stopPropagation();

                try {

                    button.innerText =
                        "Generating...";

                    // Read email
                    const emailBodies =
                        document.querySelectorAll(
                            ".a3s"
                        );

                    let emailContent =
                        "";

                    emailBodies.forEach(
                        (body) => {

                        emailContent +=
                            body.innerText +
                            "\n";
                    });

                    if (
                        !emailContent.trim()
                    ) {

                        alert(
                            "Email not found"
                        );

                        button.innerText =
                            "AI Reply";

                        return;
                    }

                    // Generate AI reply
                    const aiReply =
                        await generateAIReply(
                            emailContent
                        );

                    // Find reply box
                    const replyBox =
                        document.querySelector(
                            '[role="textbox"]'
                        );

                    if (replyBox) {

                        replyBox.focus();

                        // Insert text
                        replyBox.innerText =
                            aiReply;

                    } else {

                        alert(
                            "Reply box not found"
                        );
                    }

                } catch (error) {

                    console.error(
                        error
                    );
                }

                button.innerText =
                    "AI Reply";
            }
        );

        // Add button
        parent.appendChild(button);
    });
}

// Run repeatedly
setInterval(
    injectAIButton,
    2000
);