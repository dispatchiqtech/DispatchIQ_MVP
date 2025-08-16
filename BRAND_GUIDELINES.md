# DispatchIQ Brand Guidelines

## Brand Identity

### Mission Statement
DispatchIQ revolutionizes service dispatch through intelligent AI-driven technician matching, streamlining operations for property management companies and service-based industries.

### Vision
To become the leading API-first dispatch infrastructure provider, enabling seamless integration and scalable solutions across all service industries.

### Brand Positioning
- **Technology-Forward**: AI-driven intelligence at the core
- **Enterprise-Ready**: Built for scalability and integration
- **Efficiency-Focused**: Streamlining complex dispatch operations
- **Future-Proof**: API-first architecture for unlimited possibilities

---

## Visual Identity

### Logo & Brand Mark

#### Primary Logo
- **Symbol**: Lightning bolt (⚡) representing speed and energy
- **Gradient Background**: Hero gradient (Primary to Accent)
- **Typography**: Bold, modern sans-serif
- **Usage**: Main brand applications, headers, primary touchpoints

#### Logo Variations
- **Full Logo**: DispatchIQ + symbol
- **Symbol Only**: For favicons, small applications
- **Monochrome**: White/black versions for specific contexts

### Brand Colors

#### Primary Palette
```css
Primary Blue: hsl(221, 65%, 58%)     /* #4F8EF7 */
Primary Hover: hsl(221, 65%, 48%)   /* #2B7DEF */
Primary Glow: hsl(221, 85%, 68%)    /* #6BA3FF */
```

#### Secondary Palette
```css
Electric Accent: hsl(200, 100%, 60%) /* #00BFFF */
Accent Glow: hsl(200, 100%, 70%)    /* #33CCFF */
Tech Purple: hsl(258, 45%, 95%)     /* #F7F5FF */
```

#### Neutral Palette
```css
Background: hsl(220, 20%, 97%)      /* #F8F9FB */
Foreground: hsl(220, 15%, 12%)      /* #1C1F23 */
Muted: hsl(220, 15%, 96%)           /* #F4F5F7 */
Border: hsl(220, 15%, 90%)          /* #E5E7EB */
```

#### Status Colors
```css
Success: hsl(142, 71%, 45%)         /* #22C55E */
Warning: hsl(38, 92%, 50%)          /* #F59E0B */
Error: hsl(0, 84%, 60%)             /* #EF4444 */
```

### Typography

#### Primary Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui
```

#### Hierarchy
- **Headings**: Bold weights (600-800)
- **Body Text**: Regular weight (400)
- **Captions**: Medium weight (500)
- **Interactive Elements**: Medium weight (500)

#### Scale
- **H1**: 3.5rem (56px) - Hero headlines
- **H2**: 2.5rem (40px) - Section headers
- **H3**: 1.875rem (30px) - Subsection headers
- **H4**: 1.5rem (24px) - Card titles
- **Body**: 1rem (16px) - Regular text
- **Small**: 0.875rem (14px) - Captions, metadata

---

## Design System

### Gradients

#### Brand Gradients
```css
Primary: linear-gradient(135deg, hsl(221, 65%, 58%), hsl(221, 85%, 68%))
Hero: linear-gradient(135deg, hsl(221, 65%, 58%), hsl(200, 100%, 60%))
Card: linear-gradient(145deg, hsl(0, 0%, 100%, 0.8), hsl(220, 15%, 98%, 0.4))
Mesh: Complex radial gradients for background effects
```

### Shadows & Effects

#### Shadow System
```css
Small: 0 1px 2px hsl(220, 15%, 12%, 0.05)
Medium: 0 4px 6px -1px hsl(220, 15%, 12%, 0.1)
Large: 0 10px 15px -3px hsl(220, 15%, 12%, 0.1)
Glow: 0 0 40px hsl(var(--primary-glow), 0.4)
Card: 0 8px 32px hsl(220, 15%, 12%, 0.08)
```

#### Border Radius
- **Small**: 4px (buttons, inputs)
- **Medium**: 8px (cards, components)
- **Large**: 12px (containers, modals)
- **Round**: 50% (avatars, icons)

### Animation & Motion

#### Timing Functions
```css
Smooth: cubic-bezier(0.4, 0, 0.2, 1)
Bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

#### Animation Principles
- **Subtle & Purposeful**: Enhance UX without distraction
- **Performance-First**: 60fps, GPU-accelerated transforms
- **Consistent Timing**: 200-400ms for most interactions
- **Meaningful Motion**: Animations guide user attention

---

## Component Guidelines

### Buttons

#### Variants
- **Primary**: Main actions, CTAs
- **Secondary**: Supporting actions
- **Outline**: Alternative actions
- **Ghost**: Minimal actions
- **Premium**: Special emphasis with gradient
- **Hero**: Landing page CTAs with effects

#### States
- **Default**: Base appearance
- **Hover**: Subtle lift and color shift
- **Active**: Pressed appearance
- **Disabled**: Reduced opacity, no interaction
- **Loading**: Spinner or skeleton state

### Cards & Containers

#### Principles
- **Subtle Elevation**: Use shadows for depth
- **Clean Borders**: Minimal, consistent styling
- **Proper Spacing**: Generous internal padding
- **Background Effects**: Gradient overlays for premium feel

---

## Voice & Tone

### Brand Voice
- **Professional yet Approachable**: Expert knowledge, human communication
- **Confident & Reliable**: Trustworthy technology solutions
- **Clear & Direct**: No jargon, straightforward benefits
- **Innovation-Focused**: Cutting-edge without being overwhelming

### Messaging Framework

#### Value Propositions
1. **Intelligent Matching**: AI-driven technician optimization
2. **Seamless Integration**: API-first, works with existing systems
3. **Real-time Operations**: Live tracking and updates
4. **Scalable Growth**: Built for expansion and licensing

#### Key Messages
- "Intelligent dispatch, optimized profits"
- "API-first architecture for unlimited possibilities"
- "Real-time visibility, automated efficiency"
- "Built for scale, designed for growth"

---

## Digital Applications

### Website & Landing Pages
- **Hero Sections**: Bold headlines with gradient backgrounds
- **Feature Cards**: Clean, elevated with subtle shadows
- **Interactive Elements**: Smooth hover states and transitions
- **Responsive Design**: Mobile-first, desktop-enhanced

### Application UI
- **Dashboard**: Clean data visualization with branded accents
- **Navigation**: Intuitive with consistent iconography
- **Forms**: Clear labels, helpful validation states
- **Notifications**: Contextual alerts using status colors

### Marketing Materials
- **Presentations**: Professional templates with brand colors
- **One-Pagers**: Key benefits with visual hierarchy
- **Case Studies**: Data-driven with branded charts
- **Social Media**: Consistent visual identity across platforms

---

## Brand Applications

### Do's
✅ Use semantic color tokens from design system
✅ Maintain consistent spacing and typography
✅ Apply subtle animations for better UX
✅ Keep messaging clear and benefit-focused
✅ Use gradients sparingly for emphasis
✅ Ensure accessibility standards compliance

### Don'ts
❌ Use hard-coded color values (e.g., #FFFFFF)
❌ Mix different animation timing functions
❌ Overwhelm with excessive visual effects
❌ Use technical jargon without explanation
❌ Compromise on mobile responsiveness
❌ Ignore brand voice guidelines

---

## Brand Assets Checklist

### Required Assets
- [ ] Logo variations (SVG, PNG)
- [ ] Brand icon set (Lucide React)
- [ ] Color palette swatches
- [ ] Typography specimens
- [ ] Component library documentation
- [ ] Photography style guide
- [ ] Social media templates

### File Organization
```
/brand-assets/
  /logos/
    logo-primary.svg
    logo-symbol.svg
    logo-white.svg
  /colors/
    palette.ase
    tokens.json
  /templates/
    presentation.pptx
    one-pager.pdf
```

---

## Implementation Notes

This brand system is implemented through:
- **Design Tokens**: `src/index.css` contains all color variables
- **Tailwind Config**: `tailwind.config.ts` extends the design system
- **Component Library**: Shadcn/ui components customized for brand
- **Typography**: Inter font family for all text applications

For technical implementation, always reference the CSS custom properties and Tailwind configuration to ensure brand consistency across all applications.