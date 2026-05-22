document
  .getElementById("saveBtn")
  .addEventListener("click", () => {

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
        "Settings Saved ✅"
      );
    });
});