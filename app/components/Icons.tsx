import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const UIIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

export const CodeIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="m8 6-6 6 6 6" />
    <path d="m16 6 6 6-6 6" />
    <path d="m14 4-4 16" />
  </svg>
);

export const CloudIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M17.5 19a4.5 4.5 0 0 0 1.4-8.78 7 7 0 0 0-13.6 1.55A4.5 4.5 0 0 0 6.5 19Z" />
  </svg>
);

export const AIIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <rect x="4" y="6" width="16" height="14" rx="2" />
    <path d="M12 2v4" />
    <circle cx="9" cy="13" r="1" />
    <circle cx="15" cy="13" r="1" />
    <path d="M9 17h6" />
  </svg>
);

export const DatabaseIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
  </svg>
);

export const MobileIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <path d="M11 18h2" />
  </svg>
);

export const GitIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="6" r="2" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M12 8v4" />
    <path d="M12 12c-2 0-6 1-6 4" />
    <path d="M12 12c2 0 6 1 6 4" />
  </svg>
);

export const RealtimeIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M2 12h4l3-8 6 16 3-8h4" />
  </svg>
);

export const ArrowRight = (props: IconProps) => (
  <svg {...baseProps} width={16} height={16} {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...baseProps} width={20} height={20} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const LinkedInIcon = (props: IconProps) => (
  <svg {...baseProps} width={20} height={20} {...props} fill="currentColor" stroke="none">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.06c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.14V21h-4v-5.39c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z" />
  </svg>
);

export const GithubIcon = (props: IconProps) => (
  <svg {...baseProps} width={20} height={20} {...props} fill="currentColor" stroke="none">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8a9.5 9.5 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const TwitterIcon = (props: IconProps) => (
  <svg {...baseProps} width={20} height={20} {...props} fill="currentColor" stroke="none">
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.78-6.27L4.8 22H2l7.02-8.02L2 2h6.91l4.34 5.75L18.244 2Zm-2.4 18h1.85L7.27 4H5.3l10.544 16Z" />
  </svg>
);

export const ExternalLinkIcon = (props: IconProps) => (
  <svg {...baseProps} width={14} height={14} {...props}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export const PlayIcon = (props: IconProps) => (
  <svg {...baseProps} width={14} height={14} {...props} fill="currentColor" stroke="none">
    <path d="M6 4.5v15l13-7.5L6 4.5Z" />
  </svg>
);

export const PauseIcon = (props: IconProps) => (
  <svg {...baseProps} width={14} height={14} {...props} fill="currentColor" stroke="none">
    <rect x="6" y="4.5" width="4" height="15" rx="1" />
    <rect x="14" y="4.5" width="4" height="15" rx="1" />
  </svg>
);

export const ChevronDown = (props: IconProps) => (
  <svg {...baseProps} width={16} height={16} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
