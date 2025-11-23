export function sealsPopulate(data) {
    const container = document.getElementById("html-container");
    container.innerHTML = "";

    const lang = localStorage.getItem("language") || "en";

    // Title
    const title = document.createElement("h1");
    title.className = "text-2xl font-semibold mb-4";
    title.textContent = data.title || (lang === "es" ? "Sellos" : "Seals");
    container.appendChild(title);

    // Description
    if (data.description) {
        const desc = document.createElement("p");
        desc.className = "mb-4 text-gray-700";
        desc.textContent = data.description;
        container.appendChild(desc);
    }

    // Seal Details Loop
    data.sealDetails.forEach((seal, index) => {
        const section = document.createElement("div");
        section.classList.add("dropdown-section", `seal-object-${index + 1}`, "mb-6");

        const dropdown = document.createElement("details");
        const summary = document.createElement("summary");
        summary.classList.add("drop-down-image-seal");
        summary.textContent = seal.location || (lang === "es" ? "Ubicación" : "Location");
        dropdown.appendChild(summary);

        const contentWrapper = document.createElement("div");
        contentWrapper.classList.add("section-info", "mt-4", "space-y-4");

        // Seal Info Box
        const sealBox = document.createElement("div");
        sealBox.className = "p-4 bg-white rounded-xl shadow space-y-4 mb-4";

        const rows = [
            { label: lang === "es" ? "Tipo" : "Type", value: seal.type },
            { label: lang === "es" ? "Fabricante" : "Manufacturer", value: seal.manufacturer },
            { label: lang === "es" ? "Modelo" : "Model", value: seal.model },
            { label: lang === "es" ? "Número de Serie" : "Serial Number", value: seal.serialNumber },
            { label: lang === "es" ? "Tamaño del Sello" : "Seal Size", value: seal.sealSize },
            { label: lang === "es" ? "Intervalo Recomendado" : "Recommended Replacement Interval", value: seal.recommended_replacement_interval },
            { label: lang === "es" ? "Especificaciones de Servicio" : "Service Specs", value: seal.service_specs },
            { label: lang === "es" ? "Tamaño del Empaque" : "Packing Size", value: seal.packing_size },
            { label: lang === "es" ? "Cantidad de Empaques" : "Packing Count", value: seal.packing_count },
            { label: lang === "es" ? "Compresión" : "Compression", value: seal.compression },
            { label: lang === "es" ? "Tornillos de Fijación" : "Set Screws", value: seal.set_screws },
            { label: lang === "es" ? "Tamaño del Perno" : "Bolt Size", value: seal.bolt_size },
            { label: lang === "es" ? "Valor de Torque" : "Torque Value", value: seal.torque_value }
        ];

        rows.forEach(row => {
            if (row.value && row.value.trim() !== "") {
                const rowDiv = document.createElement("div");
                rowDiv.classList.add("detail-b-row");

                rowDiv.innerHTML = `
                    <div class="detail-b-key">${row.label}</div>
                    <div class="detail-b-value">${row.value}</div>
                `;

                sealBox.appendChild(rowDiv);
            }
        });

        // Mechanic Notes — Green
        if (seal.mechanicNotes && seal.mechanicNotes.trim() !== "") {
            const mechDiv = document.createElement("div");
            mechDiv.classList.add("detail-b-row");

            mechDiv.innerHTML = `
                <div class="detail-b-key">${lang === "es" ? "Notas" : "Notes"}</div>
                <div class="detail-b-value bg-green-100 border border-green-300 text-green-800 p-2 rounded">
                    ${seal.mechanicNotes}
                </div>
            `;
            sealBox.appendChild(mechDiv);
        }

        // Photos
        if (seal.photos && seal.photos.length) {
            seal.photos.forEach(photo => {
                if (photo && photo.trim() !== "") {
                    const img = document.createElement("img");
                    img.src = photo;
                    img.className = "task-image";
                    sealBox.appendChild(img);
                }
            });
        }

        contentWrapper.appendChild(sealBox);
        dropdown.appendChild(contentWrapper);
        section.appendChild(dropdown);
        container.appendChild(section);
    });
}
