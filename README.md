# Next.js Image vs native img

A tiny Next.js app to compare native `<img>` with Next.js `<Image />`.

## Scripts
```bash
npm install
npm run dev
```

Then visit:
- http://localhost:3000/native-img
- http://localhost:3000/next-image

## What to test

1. **Lighthouse**: Open Chrome DevTools → Lighthouse → Run Performance on each page.
2. **Network Throttling**: DevTools → Network → Throttle to "Slow 3G" and refresh.
3. **Layout Stability**: Watch for layout shift on the native `<img>` example without dimensions.
4. **Image Formats**: Inspect network requests; Next.js serves optimized images and sizes.

## Notes
- The `native-img` page intentionally omits width/height on the first example to demonstrate CLS.
- The `next-image` page uses `priority`, `fill`, `sizes`, and a blur placeholder to illustrate best practices.
