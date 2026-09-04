---
name: Technical Logistics Interface
colors:
  surface: '#f6faff'
  surface-dim: '#d2dbe4'
  surface-bright: '#f6faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ecf5fe'
  surface-container: '#e6eff8'
  surface-container-high: '#e0e9f2'
  surface-container-highest: '#dbe4ed'
  on-surface: '#141d23'
  on-surface-variant: '#414754'
  inverse-surface: '#293138'
  inverse-on-surface: '#e9f2fb'
  outline: '#717786'
  outline-variant: '#c1c6d7'
  surface-tint: '#005bc0'
  primary: '#0059bb'
  on-primary: '#ffffff'
  primary-container: '#0070ea'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc7ff'
  secondary: '#5d5e61'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e5'
  on-secondary-container: '#636467'
  tertiary: '#5a5c5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#737576'
  on-tertiary-container: '#fcfdfe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e2e2e5'
  secondary-fixed-dim: '#c6c6c9'
  on-secondary-fixed: '#1a1c1e'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f6faff'
  on-background: '#141d23'
  surface-variant: '#dbe4ed'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is engineered for a "logistics-as-a-service" digital ecosystem. It prioritizes a high-contrast, tech-forward aesthetic that signals speed, reliability, and modern efficiency. 

The visual style is **Experimental Brutalism**, characterized by:
- **Sharp Precision:** No rounded corners, emphasizing an architectural and industrial rigidity.
- **Monospaced Utility:** Use of technical fonts to evoke data terminals and automated shipping manifestos.
- **Vibrant Contrast:** High-impact electric blue set against clinical whites and deep grays to drive immediate visual hierarchy.
- **Data-Driven Transparency:** A layout that feels like a dashboard, where every element has a functional purpose and a clear structural alignment.

## Colors

The palette is derived directly from the logistics heritage of the "JIM DISTRIBUTION" mark, refined for high-visibility digital interfaces.

- **Primary Blue (#007BFF):** An energetic, signal-strong blue used for primary actions, critical status indicators, and branding anchors.
- **Industrial Black (#1A1C1E):** A deep, near-black used for primary typography and structural borders.
- **Technical White (#F8F9FA):** A slightly cooled off-white that serves as the primary canvas, reducing eye strain while maintaining high contrast.
- **Data Gray (#6C757D):** A neutral mid-tone used for secondary metadata, disabled states, and grid lines.

## Typography

The typography strategy pairs geometric futurism with developer-grade legibility.

- **Headlines (Space Grotesk):** Its quirky, geometric terminals provide a technical edge. Use `display-lg` sparingly for impact statements and `headline-xl` for primary page headers.
- **Body & Technical Data (Geist):** Geist provides exceptional clarity for logistics data, tracking numbers, and manifest details. Its monospaced-influenced proportions ensure that numerical data aligns perfectly.
- **Labels:** Always use the `label-mono` style for metadata tags, status chips, and button labels to reinforce the "system-generated" feel.

## Layout & Spacing

This design system utilizes a **Structured Grid System** based on an 8px technical rhythm. 

- **Grid:** A 12-column grid for desktop (1440px max-width) and a 4-column grid for mobile.
- **Rhythm:** Elements are separated by "Standard Units" (16px or 24px) to maintain a sense of organized density appropriate for information-heavy distribution platforms.
- **Negative Space:** Use `xl` spacing (80px+) between major sections to prevent the data-dense UI from feeling overwhelming.
- **Borders as Spacers:** Instead of relying solely on white space, use 1px solid borders (`#1A1C1E` at 10% opacity) to define functional zones.

## Elevation & Depth

To maintain the "Experimental" and "Logistics" theme, traditional soft shadows are discarded in favor of **Structural Tiers** and **Hard Offsets**.

- **Flat Layering:** Most components sit flat on the surface (`#F8F9FA`). Depth is indicated through color fills (e.g., a gray background for a nested list).
- **High-Contrast Outlines:** Instead of depth, use 1px or 2px solid strokes to define container boundaries.
- **Active State Offsets:** When an element is pressed or active, it does not "glow." Instead, it may shift 2px down and right, or change to the `Primary Blue` background with white text.
- **Glassmorphism (Functional):** Use backdrop blurs (20px) only for floating navigation bars to ensure content remains visible as it scrolls beneath, maintaining the "transparency" brand value.

## Shapes

The shape language is strictly **Rectilinear**.

- **Zero Radius:** All buttons, input fields, cards, and modal windows must have a 0px border radius. This communicates precision, industrial strength, and a "no-frills" efficiency.
- **Strict Aspect Ratios:** Where possible, use 1:1 or 16:9 ratios for image containers and data visualizations to maintain grid harmony.

## Components

### Buttons
- **Primary:** Solid `#007BFF` background, `#FFFFFF` text, sharp corners, `label-mono` typography.
- **Secondary:** Solid `#1A1C1E` background, `#FFFFFF` text.
- **Ghost:** 1px `#1A1C1E` border, no fill, `#1A1C1E` text.

### Inputs & Form Fields
- 1px `#1A1C1E` border, white background. 
- Labels sit above the field in `label-mono` gray. 
- Focus state: Border color changes to `#007BFF` with a 1px solid offset.

### Data Cards
- No shadows. Use 1px `#6C757D` (at 20% opacity) borders.
- Header of the card should have a light gray fill (`#F8F9FA`) to separate metadata from body content.

### Status Chips
- Rectangular tags with `label-mono` text.
- **Success:** `#007BFF` text on a 10% opacity blue background.
- **Warning/Alert:** High-contrast black background with white text for maximum urgency.

### Inventory Lists
- Zebra-striping using `#F8F9FA` for alternating rows.
- Use Geist Mono for all numerical values (quantities, SKU numbers, tracking IDs) to ensure vertical alignment.