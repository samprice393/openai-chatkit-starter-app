import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Car buyer on Instagram (1)",
    prompt:
      "Find 1 car buyer on Instagram. Include their profile URL and relevant information about their car buying interests.",
    icon: "search",
  },
  {
    label: "TikTok creators in travel (12) — Europe",
    prompt:
      "List 12 Europe-based travel creators on TikTok with accurate profile links and typical content focus.",
    icon: "search",
  },
  {
    label: "YouTube reviewers of productivity apps (8)",
    prompt:
      "Provide 8 YouTube creators who review productivity apps. Include channel URL and approximate subscriber count.",
    icon: "search",
  },
  {
    label: "Tech recruiters in London on X/Twitter (12)",
    prompt:
      "Identify 12 tech recruiters in London on X/Twitter and include their profile URLs and company/agency when available.",
    icon: "search",
  },
];

export const PLACEHOLDER_INPUT =
  "Describe the leads you need (platform, quantity, niche, location)...";

export const GREETING = "What leads are you looking for?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  density: "normal",
  radius: "soft",
  color: {
    grayscale: {
      hue: 210,
      tint: theme === "dark" ? 3 : 7,
      shade: theme === "dark" ? -3 : -1,
    },
    accent: {
      primary: theme === "dark" ? "#f4c542" : "#ad9300",
      level: 3,
    },
  },
  typography: {
    baseSize: 16,
    fontFamily: "Inter, sans-serif",
    fontSources: [
      {
        family: "Inter",
        src: "https://rsms.me/inter/font-files/Inter-Regular.woff2",
        weight: 400,
        style: "normal",
      },
      {
        family: "Inter",
        src: "https://rsms.me/inter/font-files/Inter-Medium.woff2",
        weight: 500,
        style: "normal",
      },
      {
        family: "Inter",
        src: "https://rsms.me/inter/font-files/Inter-SemiBold.woff2",
        weight: 600,
        style: "normal",
      },
      {
        family: "Inter",
        src: "https://rsms.me/inter/font-files/Inter-Bold.woff2",
        weight: 700,
        style: "normal",
      },
    ],
  },
});
