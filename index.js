const accentMap = {
    "Default"      : "var(--ef-green)",
    "Red"          : "var(--ef-red)",
    "Yellow"       : "var(--ef-yellow)",
    "Green"        : "var(--ef-green)",
    "Aqua"         : "var(--ef-aqua)",
    "Blue"         : "var(--ef-blue)",
    "Purple"       : "var(--ef-purple)"
};

const secondaryAccentMap = {
    "Default"      : "var(--ef-fg-bright)",
    "Red"          : "var(--ef-yellow)",
    "Yellow"       : "var(--ef-fg-bright)",
    "Green"        : "var(--ef-fg-bright)",
    "Aqua"         : "var(--ef-fg-bright)",
    "Blue"         : "var(--ef-aqua)",
    "Purple"       : "var(--ef-aqua)"
};

const backgroundAccentMap = {
    "Default"      : "var(--ef-bg-green)",
    "Red"          : "var(--ef-bg-red)",
    "Yellow"       : "var(--ef-bg-yellow)",
    "Green"        : "var(--ef-bg-green)",
    "Aqua"         : "var(--ef-bg4)",
    "Blue"         : "var(--ef-bg-blue)",
    "Purple"       : "var(--ef-bg4)"
};

const sidebarAccentMap = {
    "Default"      : "var(--ef-fg-bright)",
    "Red"          : "var(--ef-red)",
    "Yellow"       : "var(--ef-yellow)",
    "Green"        : "var(--ef-green)",
    "Aqua"         : "var(--ef-aqua)",
    "Blue"         : "var(--ef-blue)",
    "Purple"       : "var(--ef-purple)"
};
const accentClasses = Object.values(accentMap);
const accentNames = Object.keys(accentMap);

const settings = [
    {
        key: "EfAccent",
        title: "Select Everforest theme accent color",
        description: "Select Everforest theme accent color",
        type: "enum",
        enumPicker: "select",
        enumChoices: accentNames,
        default: "Full palette"
    }
];

function setAccent(accentName) {
    logseq.provideStyle({
        key: 'ef-accent',
        style: `
          :root {
            --ef-accent: ${accentMap[accentName]};
            --ef-secondary-accent: ${secondaryAccentMap[accentName]};
            --ef-bg-accent: ${backgroundAccentMap[accentName]};
            --ef-sidebar-accent: ${sidebarAccentMap[accentName]};
          }
        `,
    });
}

async function main() {
    logseq.useSettingsSchema(settings);
    logseq.onSettingsChanged(updatedSettings => {
        if (setAccent(updatedSettings.EfAccent)) {
            console.log(`Applied ${updatedSettings.EfAccent} accent✨`);
        }
    });
}

// bootstrap
logseq.ready(main).catch(console.error)
