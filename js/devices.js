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
        roms: [],
        status: "owned",
        aka: ["Xiaomi Mi A1"]
    },
    {
        name: "Laurel_Sprout",
        codenames: ["laurel_sprout"],
        image: "img/devices/laurel_sprout.png",
        roms: ["evolutionx"],
        status: "active",
        aka: ["Xiaomi Mi A3"]
    },
    {
        name: "Scorpio",
        codenames: ["scorpio"],
        image: "img/devices/scorpio.png",
        roms: ["lineageos"],
        status: "active",
        aka: ["Xiaomi Mi Note 2"]
    },
    {
        name: "Polaris",
        codenames: ["polaris"],
        image: "img/devices/polaris.png",
        roms: ["evolutionx"],
        status: "active",
        aka: ["Xiaomi Mi Mix 2S"]
    },
    {
        name: "Star2lte",
        codenames: ["star2lte"],
        image: "img/devices/star2lte.png",
        roms: [],
        status: "owned",
        aka: ["Samsung Galaxy S9+"]
    },
    {
        name: "Ginkgo",
        codenames: ["ginkgo"],
        image: "img/devices/ginkgo.png",
        roms: ["evolutionx"],
        status: "active",
        aka: ["Redmi Note 8 (Snapdragon)", "Redmi Note 8T"]
    },
    {
        name: "Miami",
        codenames: ["miami"],
        image: "img/devices/miami.png",
        roms: [],
        status: "owned",
        aka: ["Motorola Edge 30 Neo"]
    },
    {
        name: "Caprip",
        codenames: ["caprip"],
        image: "img/devices/caprip.png",
        roms: [],
        status: "owned",
        aka: ["Motorola moto G30", "Lenovo K13 Pro"]
    },
    {
        name: "Kane",
        codenames: ["kane"],
        image: "img/devices/kane.png",
        roms: [],
        status: "owned",
        aka: ["Motorola p50", "Motorola One Vision"]
    },
    {
        name: "Denver",
        codenames: ["denver"],
        image: "img/devices/denver.png",
        roms: [],
        status: "owned",
        aka: ["Motorola Moto G stylus 5G"]
    },
    {
        name: "Cheeseburger",
        codenames: ["cheeseburger"],
        image: "img/devices/cheeseburger.png",
        roms: ["evolutionx"],
        status: "active",
        aka: ["OnePlus 5"]
    },
    {
        name: "Fajitas",
        codenames: ["fajitas"],
        image: "img/devices/fajitas.png",
        roms: [],
        status: "owned",
        aka: ["OnePlus 6T", "OnePlus 6T (T-Mobile)"]
    },
    {
        name: "Billie",
        codenames: ["billie"],
        image: "img/devices/billie.png",
        roms: ["lineageos"],
        status: "active",
        aka: ["OnePlus Nord 10 CE 5G"]
    },
    {
        name: "Pdx225",
        codenames: ["pdx225"],
        image: "img/devices/pdx225.png",
        roms: [],
        status: "owned",
        aka: ["Sony 10 IV"]
    },
    {
        name: "Cepheus",
        codenames: ["cepheus"],
        image: "img/devices/cepheus.png",
        roms: [],
        status: "owned",
        aka: ["Xiaomi Mi 9"]
    },
    {
        name: "Odin2",
        codenames: ["odin2"],
        image: "img/devices/odin2.png",
        roms: ["lineageos"],
        status: "testing",
        aka: ["Ayn Odin2"]
    },
    {
        name: "Odin2Mini",
        codenames: ["odin2mini"],
        image: "img/devices/odin2mini.png",
        roms: ["lineageos"],
        status: "testing",
        aka: ["Ayn Odin2 Mini"]
    },
    {
        name: "odin2thor",
        codenames: ["odin2thor", "thor"],
        image: "img/devices/odin2thor.png",
        roms: ["lineageos"],
        status: "testing",
        aka: ["Ayn Thor"]
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

    const romsHtml = (device.roms ?? [])
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
