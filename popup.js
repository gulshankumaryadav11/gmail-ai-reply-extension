document.addEventListener(
    "DOMContentLoaded",
    async () => {

        const settings =
            await chrome.storage.local.get([
                "tone",
                "instructions"
            ]);

        if(settings.tone){

            document.getElementById(
                "tone"
            ).value =
                settings.tone;
        }

        if(settings.instructions){

            document.getElementById(
                "instructions"
            ).value =
                settings.instructions;
        }

        document
            .getElementById(
                "saveBtn"
            )
            .addEventListener(
                "click",
                () => {

                    const tone =
                        document.getElementById(
                            "tone"
                        ).value;

                    const instructions =
                        document.getElementById(
                            "instructions"
                        ).value;

                    chrome.storage.local.set({

                        tone: tone,

                        instructions:
                            instructions

                    }, () => {

                        alert(
                            "Settings Saved"
                        );
                    });
                }
            );
    }
);
