---
title: Background for responsive design
---

# How to responsive design ?

## Screen size

### Common screen resolutions:

- 4K (3840 × 2160)
- 2K/QHD (2560 × 1440)
- Full HD/1080p (1920 × 1080)
- HD (1280 × 720)
- Mobile devices:
  - iPhone 15 Pro Max (2796 × 1290)
  - iPhone 15 (2556 × 1179)
  - Common Android (1080 × 2400)

### Understanding Pixels

#### Device Pixels vs CSS Pixels

- Physical pixels (device pixels): The actual pixels on your screen hardware
- CSS pixels (logical pixels): The units we use in web development
- Device Pixel Ratio (DPR) = Physical Pixels / CSS Pixels

For example:

- iPhone 15 Pro Max:

  - Screen resolution: 2796 × 1290 (physical pixels)
  - DPR: 3
  - CSS viewport: 932 × 430 (CSS pixels)

- 4K Display:
  - Screen resolution: 3840 × 2160 (physical pixels)
  - Common DPR: 2
  - CSS viewport: 1920 × 1080 (CSS pixels)

#### Why This Matters

- We write CSS using logical pixels (px)
- Devices automatically handle the conversion to physical pixels
- This is why `@media (max-width: 768px)` works across different devices

#### How to get DPR ?

You can get the Device Pixel Ratio (DPR) in several ways:

1. JavaScript:

   ```javascript
   // Method 1: Using window.devicePixelRatio (Most common)
   const dpr = window.devicePixelRatio;
   console.log(dpr); // e.g., 2 for Retina displays

   // Method 2: Using matchMedia
   const isDpr2 = window.matchMedia(
     "(-webkit-min-device-pixel-ratio: 2)",
   ).matches;
   console.log(isDpr2); // true for displays with DPR >= 2

   // Method 3: Listen for DPR changes
   window.matchMedia("(resolution: 2dppx)").addListener((e) => {
     if (e.matches) {
       console.log("DPR changed to 2");
     }
   });
   ```

2. CSS Media Queries:

   ```css
   /* For 2x DPR */
   @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
     /* High DPR styles */
   }

   /* For 3x DPR */
   @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
     /* Ultra-high DPR styles */
   }
   ```

3. Practical Use Case - Canvas:

   ```javascript
   // Get a sharp canvas on high DPR displays
   const canvas = document.querySelector("canvas");
   const ctx = canvas.getContext("2d");
   const dpr = window.devicePixelRatio;

   // Set display size (css pixels)
   canvas.style.width = `${width}px`;
   canvas.style.height = `${height}px`;

   // Set actual size in memory (scaled to DPR)
   canvas.width = width * dpr;
   canvas.height = height * dpr;

   // Scale all drawing operations by DPR
   ctx.scale(dpr, dpr);
   ```

Common DPR values:

- 1: Standard displays
- 2: Retina displays (MacBooks, high-end monitors)
- 3: High-end mobile devices (iPhones)

#### How window.devicePixelRatio works

The Device Pixel Ratio (DPR) is calculated using this formula:

```javascript
DPR = Physical Pixels / CSS Pixels
```

For example:

- iPhone 15 Pro Max:

  ```javascript
  DPR = 2796 / 932 = 3
  // width: 2796 physical pixels ÷ 932 CSS pixels = 3
  ```

- 4K Monitor at 200% scaling:
  ```javascript
  DPR = 3840 / 1920 = 2
  // width: 3840 physical pixels ÷ 1920 CSS pixels = 2
  ```

Factors affecting DPR:

1. Hardware resolution (physical pixels)
2. OS display scaling settings
3. Browser zoom level

Note: DPR can change dynamically when:

- User changes display scaling
- Window moves to a different monitor
- Browser zoom changes
- Device orientation changes (on some devices)

#### 2K (QHD) Monitor Examples

A 2K/QHD monitor has a physical resolution of 2560 × 1440 pixels. Here's how
different OS scaling settings affect the CSS pixels and DPR:

1. 100% scaling (no scaling):

   ```javascript
   Physical Resolution: 2560 × 1440
   CSS Viewport: 2560 × 1440
   DPR = 2560 / 2560 = 1
   ```

2. 125% scaling:

   ```javascript
   Physical Resolution: 2560 × 1440
   CSS Viewport: 2048 × 1152
   DPR = 2560 / 2048 = 1.25
   ```

3. 150% scaling:

   ```javascript
   Physical Resolution: 2560 × 1440
   CSS Viewport: 1707 × 960
   DPR = 2560 / 1707 = 1.5
   ```

4. 200% scaling:
   ```javascript
   Physical Resolution: 2560 × 1440
   CSS Viewport: 1280 × 720
   DPR = 2560 / 1280 = 2
   ```

Note: The actual CSS viewport size will depend on:

- OS scaling settings
- Browser zoom level
- Monitor physical size (affects recommended scaling)

#### 4K Monitor Examples

A 4K monitor has a physical resolution of 3840 × 2160 pixels. Here's how
different OS scaling settings affect the CSS pixels and DPR:

1. 100% scaling (no scaling):

   ```javascript
   Physical Resolution: 3840 × 2160
   CSS Viewport: 3840 × 2160
   DPR = 3840 / 3840 = 1
   // UI elements will be very small
   ```

2. 150% scaling:

   ```javascript
   Physical Resolution: 3840 × 2160
   CSS Viewport: 2560 × 1440
   DPR = 3840 / 2560 = 1.5
   // Common for large 4K monitors (32"+)
   ```

3. 200% scaling (recommended):

   ```javascript
   Physical Resolution: 3840 × 2160
   CSS Viewport: 1920 × 1080
   DPR = 3840 / 1920 = 2
   // Most common for 27-28" 4K monitors
   ```

4. 250% scaling:
   ```javascript
   Physical Resolution: 3840 × 2160
   CSS Viewport: 1536 × 864
   DPR = 3840 / 1536 = 2.5
   // Common for smaller 4K displays (24")
   ```

Note:

- Windows typically recommends 200% or 250% scaling for 4K monitors
- MacOS often defaults to 200% scaling for 4K displays
- The optimal scaling depends on:
  - Physical monitor size
  - Viewing distance
  - User preference

## Design Method Comparison

| Method                | Pros                                                                                                    | Cons                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Fixed-width Design    | • Simple to implement<br>• Precise control over layout<br>• Consistent appearance                       | • Not flexible for different screen sizes<br>• Requires horizontal scrolling on small screens<br>• Wastes space on large screens |
| Liquid Layouts        | • Adapts to window width<br>• Uses available space efficiently<br>• Works across different screen sizes | • Can look stretched on very wide screens<br>• Hard to control line lengths<br>• Elements might become too wide/narrow           |
| Separate Sites        | • Optimized for each platform<br>• Best performance<br>• Perfect device-specific features               | • Higher maintenance cost<br>• Multiple codebases to maintain<br>• URL management complexity                                     |
| Adaptive Layouts      | • Optimized for specific breakpoints<br>• Good performance<br>• Works well for complex layouts          | • Fixed breakpoints might not suit all devices<br>• Requires more planning<br>• Less flexible than responsive                    |
| Responsive Web Design | • Single codebase<br>• Works on all devices<br>• Future-friendly<br>• SEO benefits                      | • More complex to implement<br>• Might affect performance<br>• Requires careful testing                                          |

> Adaptive Design = Media queries + fixed-widths layout
>
> Responsive Design = Media queries + liquid layouts

Today, Responsive Web Design is generally considered the best practice,

## meta element for viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

## Viewport Meta Element

The viewport meta tag is crucial for responsive design:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Attributes Explained:

- `width=device-width`: Sets the viewport width to match the device's screen
  width
- `initial-scale=1`: Sets the initial zoom level when the page loads

### Additional Options:

```html
<!-- Prevent users from zooming -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, user-scalable=no"
/>

<!-- Set minimum and maximum zoom levels -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2"
/>
```

### Why It's Important:

1. Without this tag:

   - Mobile browsers often default to rendering pages at a desktop width (e.g.,
     980px)
   - Then shrinking the result to fit the mobile screen
   - This breaks responsive designs

2. With this tag:
   - The viewport matches the device's actual width
   - CSS media queries work as expected
   - Content renders at the intended size

### Best Practices:

- Always include this meta tag in responsive designs
- Generally avoid disabling user scaling (accessibility concern)
- Place in the `<head>` section of your HTML
- Test how your site behaves with different scale settings

## Adaptive vs Responsive Design

> Adaptive Design = Media queries + fixed-widths layout
>
> Responsive Design = Media queries + liquid layouts

### Adaptive Design Example:

```css
/* Adaptive Layout - Fixed widths at different breakpoints */
.container {
  margin: 0 auto;
}

/* Mobile */
@media (max-width: 767px) {
  .container {
    width: 320px;
  }

  .sidebar {
    width: 100px;
  }

  .main-content {
    width: 220px;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 750px;
  }

  .sidebar {
    width: 200px;
  }

  .main-content {
    width: 550px;
  }
}

/* Desktop */
@media (min-width: 1025px) {
  .container {
    width: 1000px;
  }

  .sidebar {
    width: 300px;
  }

  .main-content {
    width: 700px;
  }
}
```

### Responsive Design Example:

```css
/* Responsive Layout - Fluid widths with breakpoints */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.sidebar {
  width: 30%;
  float: left;
}

.main-content {
  width: 70%;
  float: left;
}

/* Mobile */
@media (max-width: 767px) {
  .sidebar,
  .main-content {
    width: 100%;
    float: none;
  }
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    width: 85%;
  }
}

/* Desktop */
@media (min-width: 1025px) {
  .container {
    width: 80%;
  }
}
```

### HTML Structure (same for both):

```html
<div class="container">
  <div class="sidebar">
    <!-- Sidebar content -->
  </div>
  <div class="main-content">
    <!-- Main content -->
  </div>
</div>
```

### Key Differences:

1. Adaptive:

   - Uses fixed pixel widths
   - "Jumps" between layouts
   - Better for specific device targets
   - More predictable layouts

2. Responsive:
   - Uses percentage-based widths
   - Smoothly adjusts to any screen size
   - More flexible and future-proof
   - Requires more testing

## Internationalization

- Use logical properties
- Identity page language
- Identity a linked document language
- Use css to introduce hyphhens
- line-height should accommodate characters

## Common used media query breakpoints

Common breakpoints used in responsive design:

- Mobile: 320px - 480px
- Tablets: 481px - 768px
- Small screens/laptops: 769px - 1024px
- Desktops: 1025px - 1200px
- Extra large screens: 1201px and above

Example media queries:

```css
/* Mobile devices */
@media (max-width: 480px) {
  .container {
    width: 100%;
    padding: 0 15px;
  }

  .hide-mobile {
    display: none;
  }
}

/* Tablets */
@media (min-width: 481px) and (max-width: 768px) {
  .container {
    width: 90%;
    max-width: 750px;
  }

  .col {
    width: 50%;
  }
}

/* Small screens/laptops */
@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    width: 85%;
    max-width: 960px;
  }

  .col {
    width: 33.33%;
  }
}

/* Desktops */
@media (min-width: 1025px) and (max-width: 1200px) {
  .container {
    width: 80%;
    max-width: 1140px;
  }
}

/* Extra large screens */
@media (min-width: 1201px) {
  .container {
    width: 75%;
    max-width: 1400px;
  }
}

/* Print styles */
@media print {
  .no-print {
    display: none;
  }

  a[href]:after {
    content: " (" attr(href) ")";
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background: #121212;
    color: #ffffff;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* High contrast */
@media (prefers-contrast: high) {
  :root {
    --contrast: 100%;
  }
}
```

</rewritten_file>
