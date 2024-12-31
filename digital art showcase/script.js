// Image Viewing Functionality
document.querySelectorAll(".art-item img").forEach((img) => {
    img.addEventListener("click", () => {
        // Create a modal for viewing the image
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "1000";

        // Create an image element in the modal
        const modalImage = document.createElement("img");
        modalImage.src = img.src;
        modalImage.style.maxWidth = "90%";
        modalImage.style.maxHeight = "90%";
        modalImage.style.borderRadius = "10px";

        // Add the image to the modal
        modal.appendChild(modalImage);

        // Add a close button to the modal
        const closeButton = document.createElement("button");
        closeButton.innerText = "Close";
        closeButton.style.position = "absolute";
        closeButton.style.top = "20px";
        closeButton.style.right = "20px";
        closeButton.style.padding = "10px 20px";
        closeButton.style.backgroundColor = "#22c55e";
        closeButton.style.color = "#0b2015";
        closeButton.style.border = "none";
        closeButton.style.borderRadius = "5px";
        closeButton.style.cursor = "pointer";
        closeButton.addEventListener("click", () => {
            document.body.removeChild(modal);
        });

        modal.appendChild(closeButton);
        document.body.appendChild(modal);
    });
});

// Upload Image Functionality
document.querySelector(".upload-btn").addEventListener("click", () => {
    // Create a file input element
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";

    // Trigger the file input click
    fileInput.click();

    // Handle file selection
    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Create a new image element
                const newImage = document.createElement("img");
                newImage.src = e.target.result;
                newImage.alt = "Uploaded Artwork";
                newImage.style.width = "100%";
                newImage.style.borderRadius = "10px";

                // Add the new image to the gallery
                const artItem = document.createElement("div");
                artItem.classList.add("art-item");
                artItem.appendChild(newImage);

                document.querySelector(".art-gallery").appendChild(artItem);

                // Reattach the click event for the new image
                newImage.addEventListener("click", () => {
                    const modal = document.createElement("div");
                    modal.style.position = "fixed";
                    modal.style.top = "0";
                    modal.style.left = "0";
                    modal.style.width = "100%";
                    modal.style.height = "100%";
                    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                    modal.style.display = "flex";
                    modal.style.justifyContent = "center";
                    modal.style.alignItems = "center";
                    modal.style.zIndex = "1000";

                    const modalImage = document.createElement("img");
                    modalImage.src = newImage.src;
                    modalImage.style.maxWidth = "90%";
                    modalImage.style.maxHeight = "90%";
                    modalImage.style.borderRadius = "10px";

                    modal.appendChild(modalImage);

                    const closeButton = document.createElement("button");
                    closeButton.innerText = "Close";
                    closeButton.style.position = "absolute";
                    closeButton.style.top = "20px";
                    closeButton.style.right = "20px";
                    closeButton.style.padding = "10px 20px";
                    closeButton.style.backgroundColor = "#22c55e";
                    closeButton.style.color = "#0b2015";
                    closeButton.style.border = "none";
                    closeButton.style.borderRadius = "5px";
                    closeButton.style.cursor = "pointer";
                    closeButton.addEventListener("click", () => {
                        document.body.removeChild(modal);
                    });

                    modal.appendChild(closeButton);
                    document.body.appendChild(modal);
                });
            };
            reader.readAsDataURL(file);
        }
    });
});
