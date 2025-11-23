export function zincsPopulate(data) {
    const container = document.getElementById("html-container");
    container.innerHTML = "";

    const lang = localStorage.getItem("language") || "en";

    // Title
    const title = document.createElement("h1");
    title.className = "text-2xl font-semibold mb-4";
    title.textContent = data.title || (lang === "es" ? "Zincs" : "Zincs");
    container.appendChild(title);

    // Description
    if (data.description) {
        const desc = document.createElement("p");
        desc.className = "mb-4 text-gray-700";
        desc.textContent = data.description;
        container.appendChild(desc);
    }

    // Locations Loop
    data.locations.forEach((loc, index) => {
        const section = document.createElement("div");
        section.classList.add("dropdown-section", `zinc-object-${index + 1}`, "mb-6");

        const dropdown = document.createElement("details");
        const summary = document.createElement("summary");
        summary.classList.add("drop-down-image-zinc");
        summary.textContent = loc.name;
        dropdown.appendChild(summary);

        const contentWrapper = document.createElement("div");
        contentWrapper.classList.add("section-info", "mt-4", "space-y-4");

        // --- Location Notes (gray, italic)
        if (loc.notes && loc.notes.trim() !== "") {
            const notesP = document.createElement("p");
            notesP.className = "text-sm text-gray-500 italic mb-2";
            notesP.textContent = loc.notes;
            contentWrapper.appendChild(notesP);
        }

        // --- Zinc Loop (correct)
        loc.zincs.forEach((zinc) => {
            const zincBox = document.createElement("div");
            zincBox.className = "p-4 bg-white rounded-xl shadow space-y-4 mb-4";

            // Top Section — Type / Size / Material / Qty / Part Number
            const header = document.createElement("div");
            header.className = "space-y-2";

            const rows = [
                { label: lang === "es" ? "Tipo" : "Type", value: zinc.type },
                { label: lang === "es" ? "Tamaño" : "Size", value: zinc.size },
                { label: lang === "es" ? "Material" : "Material", value: zinc.material },
                { label: lang === "es" ? "Cantidad" : "Qty", value: zinc.quantity },
                { label: lang === "es" ? "Número de Parte" : "Part Number", value: zinc.partNumber || "—" }
            ];

            rows.forEach(row => {
                const rowDiv = document.createElement("div");
                rowDiv.classList.add("detail-b-row");

                rowDiv.innerHTML = `
                    <div class="detail-b-key">${row.label}</div>
                    <div class="detail-b-value">${row.value}</div>
                `;

                header.appendChild(rowDiv);
            });

            zincBox.appendChild(header);

            // Placement
            if (zinc.placement) {
                const placementDiv = document.createElement("div");
                placementDiv.classList.add("detail-b-row");

                placementDiv.innerHTML = `
                    <div class="detail-b-key">${lang === "es" ? "Ubicación" : "Placement"}</div>
                    <div class="detail-b-value">${zinc.placement}</div>
                `;
                zincBox.appendChild(placementDiv);
            }

            // Photos (before/after or any images)
            ['photoBefore','photoAfter'].forEach(key => {
                if (zinc[key]) {
                    const img = document.createElement("img");
                    img.src = zinc[key];
                    img.className = "task-image";
                    zincBox.appendChild(img);
                }
            });


            // Mechanic Notes — Green
            if (zinc.mechanicNotes && zinc.mechanicNotes.trim() !== "") {
                const mechDiv = document.createElement("div");
                mechDiv.classList.add("detail-b-row");

                mechDiv.innerHTML = `
                    <div class="detail-b-key">${lang === "es" ? "Notas" : "Notes"}</div>
                    <div class="detail-b-value bg-green-100 border border-green-300 text-green-800 p-2 rounded">
                        ${zinc.mechanicNotes}
                    </div>
                `;

                zincBox.appendChild(mechDiv);
            }

            contentWrapper.appendChild(zincBox);
        });

        dropdown.appendChild(contentWrapper);
        section.appendChild(dropdown);
        container.appendChild(section);
    });
}
