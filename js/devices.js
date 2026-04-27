// ============================================
// DEVICES DATA
// ============================================

const devices = [
    {
        name: "Veux",
        codenames: ["veux", "peux"],
        image: "img/devices/veux.png",
        roms: ["evolutionx"],
        status: "active",
        aka: ["POCO X4 Pro 5G", "Redmi Note 11 Pro 5G", "Redmi Note 11 Pro+ 5G", "Redmi Note 11E Pro"]
    },
    {
        name: "Miatoll",
        codenames: ["miatoll", "curtana", "excalibur", "gram", "joyeuse"],
        image: "img/devices/miatoll.png",
        roms: ["lineageos", "evolutionx"],
        status: "testing",
        aka: ["POCO M2 Pro", "Redmi 9 Pro Max", "Redmi Note 9S", "Redmi Note 9 Pro (India)", "Redmi Note 9 Pro (Global)", "Redmi Note 10 Lite"]
    },
    {
        name: "Sargo",
        codenames: ["sargo"],
        image: "img/devices/sargo.png",
        roms: ["evolutionx"],
        status: "eol",
        aka: ["Google Pixel 3a"]
    },
    {
        name: "Ibiza",
        codenames: ["ibiza"],
        image: "img/devices/ibiza.png",
        roms: ["lineageos"],
        status: "testing",
        aka: ["Motorola Moto G50 (2021)"]
    },
    {
        name: "Hotdogb",
        codenames: ["hotdogb"],
        image: "img/devices/hotdogb.png",
        roms: ["lineageos", "evolutionx"],
        status: "active",
        aka: ["OnePlus 7T"]
    },
    {
        name: "Vince",
        codenames: ["vince"],
        image: "img/devices/vince.png",
        roms: ["evolutionx"],
        status: "eol",
        aka: ["Redmi 5 Plus"]
    },
    {
        name: "Tissot",
        codenames: ["tissot"],
        image: "img/devices/tissot.png",
        roms: ["evolutionx"],
        status: "owned",
        aka: ["Xiaomi Mi A1"]
    }
];

// ============================================
// STATUS CONFIG
// ============================================

const statusConfig = {
    active:    { label: "Maintained",  color: "active"  },
    testing:   { label: "Testing",     color: "testing" },
    eol:       { label: "EOL",         color: "eol"     },
    owned:     { label: "Owned",       color: "owned"   }
};

// ============================================
// ROM CONFIG
// ============================================

const romConfig = {
    lineageos:  { label: "LineageOS",  class: "los"  },
    evolutionx: { label: "EvolutionX", class: "evox" }
};

// ============================================
// BUILD CARD
// ============================================

function buildCard(device) {
    const status = statusConfig[device.status] ?? statusConfig.owned;

    const codenamesHtml = device.codenames
        .map((c, i) => `<span class="codename-badge${i > 0 ? ' alias' : ''}">${c}</span>`)
        .join("");

    const romsHtml = device.roms
        .map(r => {
            const rom = romConfig[r];
            return rom ? `<span class="rom-badge ${r}">${rom.label}</span>` : "";
        })
        .join("");

    const imgHtml = device.image
        ? `<img src="${device.image}" alt="${device.name}" loading="lazy">`
        : `<div class="device-placeholder">
               <div class="device-placeholder-icon"></div>
               <span class="device-placeholder-codename">${device.codenames[0]}</span>
           </div>`;

    const akaHtml = device.aka?.length ? `
        <div class="device-aka">
            <button class="aka-toggle" onclick="toggleAka(this)">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                also known as (${device.aka.length})
            </button>
            <div class="aka-list">
                ${device.aka.map(a => `<span class="aka-item">${a}</span>`).join("")}
            </div>
        </div>` : "";

    return `
        <div class="device-card" data-status="${device.status}" data-roms="${device.roms.join(" ")}">
            <div class="device-image">${imgHtml}</div>
            <div class="device-body">
                <div class="device-top">
                    <div class="device-name-block">
                        <span class="device-model">${device.name}</span>
                    </div>
                    <span class="device-status ${statusConfig[device.status].color}" title="${statusConfig[device.status].label}"></span>
                </div>
                <div class="device-codenames">${codenamesHtml}</div>
                <div class="device-roms">${romsHtml}</div>
                ${akaHtml}
            </div>
        </div>`;
}

// And you really think I, Onelots, did this by hand by myself ? c'mon... :rolling_eyes:

// ============================================
// RENDER
// ============================================

function renderGrid(filter = "all") {
    const grid = document.getElementById("devices-grid");
    const filtered = filter === "all"
        ? devices
        : devices.filter(d => d.roms.includes(filter));

    grid.innerHTML = filtered.length
        ? filtered.map(buildCard).join("")
        : `<div class="devices-empty">// no devices found</div>`;
}

function updateStats() {
    document.getElementById("stat-total").textContent = devices.length;
    document.getElementById("stat-los").textContent  = devices.filter(d => d.roms.includes("lineageos")).length;
    document.getElementById("stat-evox").textContent = devices.filter(d => d.roms.includes("evolutionx")).length;
}

// ============================================
// AKA TOGGLE
// ============================================

function toggleAka(btn) {
    btn.classList.toggle("open");
    btn.nextElementSibling.classList.toggle("open");
}

// ============================================
// FILTERS
// ============================================

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderGrid(btn.dataset.filter);
    });
});

// ============================================
// HEADER SCROLL
// ============================================

window.addEventListener('scroll', () => {
    document.getElementById('site-header').classList.toggle('scrolled', window.scrollY > 50);
});

// ============================================
// INIT
// ============================================

renderGrid();
updateStats();
