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

        if (!response.ok) {

            return "Backend error";
        }

        return await response.text();

    } catch (error) {

        console.error(error);

        return "AI Reply Error";
    }
}

function createAIButton(toolbar) {

    if (
        toolbar.querySelector(
            ".ai-container"
        )
    ) {
        return;
    }

    const container =
        document.createElement(
            "div"
        );

    container.className =
        "ai-container";

    container.style.display =
        "flex";

    container.style.alignItems =
        "center";

    container.style.marginLeft =
        "10px";

    container.style.position =
        "relative";

    const mainButton =
        document.createElement(
            "button"
        );

    mainButton.type =
        "button";

    mainButton.innerText =
        "AI Reply";

    mainButton.style.background =
        "#C9855D";

    mainButton.style.color =
        "white";

    mainButton.style.border =
        "none";

    mainButton.style.height =
        "40px";

    mainButton.style.padding =
        "0 22px";

    mainButton.style.fontSize =
        "14px";

    mainButton.style.fontWeight =
        "600";

    mainButton.style.borderRadius =
        "20px 0 0 20px";

    mainButton.style.cursor =
        "pointer";

    mainButton.style.display =
        "flex";

    mainButton.style.alignItems =
        "center";

    mainButton.style.justifyContent =
        "center";

    const dropdownButton =
        document.createElement(
            "button"
        );

    dropdownButton.type =
        "button";

    dropdownButton.innerText =
        "▼";

    dropdownButton.style.background =
        "#C9855D";

    dropdownButton.style.color =
        "white";

    dropdownButton.style.border =
        "none";

    dropdownButton.style.borderLeft =
        "1px solid rgba(255,255,255,0.3)";

    dropdownButton.style.height =
        "40px";

    dropdownButton.style.padding =
        "0 14px";

    dropdownButton.style.fontSize =
        "12px";

    dropdownButton.style.fontWeight =
        "bold";

    dropdownButton.style.borderRadius =
        "0 20px 20px 0";

    dropdownButton.style.cursor =
        "pointer";

    mainButton.onmouseenter =
    dropdownButton.onmouseenter =
    () => {

        mainButton.style.background =
            "#B9764F";

        dropdownButton.style.background =
            "#B9764F";
    };

    mainButton.onmouseleave =
    dropdownButton.onmouseleave =
    () => {

        mainButton.style.background =
            "#C9855D";

        dropdownButton.style.background =
            "#C9855D";
    };

    const menu =
        document.createElement(
            "div"
        );

    menu.style.position =
        "absolute";

    menu.style.right =
        "0";

    menu.style.top =
        "48px";

    menu.style.background =
        "white";

    menu.style.border =
        "1px solid #ddd";

    menu.style.borderRadius =
        "12px";

    menu.style.boxShadow =
        "0 4px 14px rgba(0,0,0,0.15)";

    menu.style.display =
        "none";

    menu.style.flexDirection =
        "column";

    menu.style.minWidth =
        "200px";

    menu.style.overflow =
        "hidden";

    menu.style.zIndex =
        "999999";

    const tones = [

        "professional",

        "friendly",

        "casual",

        "formal",

        "apologetic",

        "persuasive",

        "follow-up",

        "enthusiastic"
    ];

    tones.forEach((tone) => {

        const item =
            document.createElement(
                "div"
            );

        item.innerText =
            tone;

        item.style.padding =
            "12px 14px";

        item.style.cursor =
            "pointer";

        item.style.textTransform =
            "capitalize";

        item.style.fontSize =
            "14px";

        item.style.transition =
            "0.2s";

        item.onmouseenter = () => {

            item.style.background =
                "#F7F1ED";
        };

        item.onmouseleave = () => {

            item.style.background =
                "white";
        };

        item.onclick =
            async () => {

            await chrome.storage.local.set({
                tone: tone
            });

            alert(
                "Tone set to: "
                + tone
            );

            menu.style.display =
                "none";
        };

        menu.appendChild(item);
    });

    const instructionItem =
        document.createElement(
            "div"
        );

    instructionItem.innerText =
        "Custom Instructions";

    instructionItem.style.padding =
        "12px 14px";

    instructionItem.style.cursor =
        "pointer";

    instructionItem.style.fontWeight =
        "600";

    instructionItem.style.borderTop =
        "1px solid #eee";

    instructionItem.style.fontSize =
        "14px";

    instructionItem.onmouseenter =
        () => {

        instructionItem.style.background =
            "#F7F1ED";
    };

    instructionItem.onmouseleave =
        () => {

        instructionItem.style.background =
            "white";
    };

    instructionItem.onclick =
        async () => {

        const value =
            prompt(
                "Enter custom instructions"
            );

        if (
            value !== null
        ) {

            await chrome.storage.local.set({

                instructions:
                    value
            });

            alert(
                "Instructions Saved ✅"
            );
        }

        menu.style.display =
            "none";
    };

    menu.appendChild(
        instructionItem
    );

    dropdownButton.onclick =
        (e) => {

        e.stopPropagation();

        menu.style.display =
            menu.style.display === "flex"
            ? "none"
            : "flex";
    };

    document.addEventListener(
        "click",
        () => {

        menu.style.display =
            "none";
    });

    mainButton.onclick =
        async (e) => {

        e.preventDefault();

        e.stopPropagation();

        try {

            mainButton.innerText =
                "Generating...";

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
                    "Email content not found"
                );

                mainButton.innerText =
                    "AI Reply";

                return;
            }

            const aiReply =
                await generateAIReply(
                    emailContent
                );

            const replyBox =
                document.querySelector(
                    '[role="textbox"]'
                );

            if (replyBox) {

                replyBox.focus();

                replyBox.innerHTML =
                    aiReply.replace(
                        /\n/g,
                        "<br>"
                    );

            } else {

                alert(
                    "Reply box not found"
                );
            }

        } catch (error) {

            console.error(error);
        }

        mainButton.innerText =
            "AI Reply";
    };

    container.appendChild(
        mainButton
    );

    container.appendChild(
        dropdownButton
    );

    container.appendChild(
        menu
    );

    toolbar.appendChild(
        container
    );
}

function injectButtons() {

    const toolbars =
        document.querySelectorAll(
            ".btC"
        );

    toolbars.forEach((toolbar) => {

        createAIButton(
            toolbar
        );
    });
}

const observer =
    new MutationObserver(() => {

        injectButtons();
    });

observer.observe(
    document.body,
    {
        childList: true,
        subtree: true
    }
);

injectButtons();
