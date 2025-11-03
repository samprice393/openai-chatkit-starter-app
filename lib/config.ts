import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What is ChatKit?",
    prompt: "What is ChatKit and what does it do?",
    icon: "circle-question",
  },
  {
    label: "Instagram fitness leads in Austin (10)",
    prompt:
      "Find 10 high-quality fitness influencers in Austin on Instagram with profile links and contact info.",
    icon: "circle-question",
  },
  {
    label: "LinkedIn SaaS founders in the Nordics (15)",
    prompt:
      "List 15 SaaS founders on LinkedIn located in the Nordics. Include company names and profile URLs.",
    icon: "circle-question",
  },
  {
    label: "TikTok fashion influencers in NYC (12)",
    prompt:
      "Identify 12 TikTok fashion influencers in New York City and provide their accurate profile links.",
    icon: "circle-question",
  },
  {
    label: "YouTube AI educators (8)",
    prompt:
      "Gather 8 YouTube creators who teach AI concepts. Include channel URLs and audience size.",
    icon: "circle-question",
  },
  {
    label: "B2B marketers on X (10)",
    prompt:
      "Find 10 B2B marketing leaders on X/Twitter in the US with links to their profiles.",
    icon: "circle-question",
  },
  {
    label: "Eco-startup founders on Facebook (6)",
    prompt:
      "Locate 6 Facebook pages or groups run by eco-friendly startup founders with contact details.",
    icon: "circle-question",
  },
  {
    label: "Podcast hosts in fintech (8)",
    prompt:
      "Provide 8 fintech podcast hosts with their show titles and LinkedIn or website links.",
    icon: "circle-question",
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
