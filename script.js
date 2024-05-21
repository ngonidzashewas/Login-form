const themes =[
    {
        background: "#231f20",
        color: "#fff",
        primaryColor: "#bb4430"
    },

    {
        background: "#192A51",
        color: "#FFFFFF",
        primaryColor: "#967AA1"
      },

      {
        background: "#1a1a2e",
        color: "#ffffff",
        primaryColor: "#0f3460"
      }
];

const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--glass-color", theme.glassColor);
  };
  
  const displayThemeButtons = () => {
    const btnContainer = document.querySelector(".theme-btn-container");
    themes.forEach((theme) => {
      const div = document.createElement("div");
      div.className = "theme-btn";
      div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
      btnContainer.appendChild(div);
      div.addEventListener("click", () => setTheme(theme));
    });
  };
  
  displayThemeButtons();


