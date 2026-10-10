# Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS,
and official shadcn/ui Card, Button, and Dialog components.

Includes a photo album for Biebie and Tommy, an accessible enlarged photo
viewer, and a playful love button. Hearts are local to the current visit;
there is no backend or shared counter. Motion respects reduced-motion settings.

## Development

Use Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run lint
npm run preview
```

The production build is written to `dist/`.

## Project links

Edit `src/projects.ts` to update the DataScraper URLs. The website URL is a
planned deployment address; this portfolio does not confirm that it is live.

## Deployment TODOs

- Host the portfolio at `https://jasonschelfhout.dev` and configure DNS and HTTPS.
- Deploy DataScraper at its planned URL, or update `src/projects.ts`.

Deployment configuration is outside the scope of this repository change.
