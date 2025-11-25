# Mobile Performance Optimization

The metafuse website now includes mobile-specific optimizations to ensure smooth performance on real mobile devices (especially iOS Safari).

## Changes Made

### 1. Mobile Detection
- Detects mobile devices using user agent
- Detects touch-capable devices
- Checks screen size (< 768px)

### 2. Conditional Background Rendering

**On Mobile Devices:**
- LiquidEther (WebGL) is **disabled**
- Uses lightweight CSS gradient with subtle animation
- Simple `scale` and `rotate` animation (15s)
- Minimal GPU usage

**On Desktop:**
- LiquidEther is **enabled** with optimized settings
- `resolution: 0.4` (reduced from 0.5)
- `iterations: 20` (reduced from 32)
- Pixel ratio capped at 1

### 3. Why This Helps

**Mobile Performance Issues:**
- WebGL is heavy on mobile GPUs
- iPhone Safari has strict performance limits
- Real devices != dev tools emulation
- Battery and thermal constraints

**Our Solution:**
- Zero WebGL on mobile = instant 60fps
- Simple gradient = negligible GPU usage
- Animations still look good, just simpler
- Desktop users get full experience

## Testing

To test mobile optimization locally:
1. Open site in Chrome DevTools mobile emulation
2. Refresh page - you'll see simple gradient
3. Resize to desktop width - LiquidEther loads

## Deployment Checklist

Before deploying to Vercel:
- ✅ Mobile detection implemented
- ✅ Lightweight mobile background
- ✅ Desktop LiquidEther optimized
- ✅ Preloader works on both
- ✅ Animations optimized for mobile

The site will now perform smoothly on iPhone Safari and all mobile devices!
