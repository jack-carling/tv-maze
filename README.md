# TV Maze

Frontend developer assignment using TV Maze's [API](https://www.tvmaze.com/api).

Presenting horizontal lists of categories. First picking the 10 most popular shows, and then sorting based on genre (
which are determined dynamically) and avoiding duplicates in different lists. Scrolling on desktop with arrows (buttons
appearing on hover) and on mobile with `scroll-snap`.

I choose the following libraries to assist me in development:

- animate.css
- lodash.debounce
- sanitize-html

I used `animate.css` for animations, which is nice because it respects the `prefers-reduced-motion` for
accessibility. Only use `debounce` from `lodash` (and not the entire huge library) as I think it's vital on input fields
that fetches data. The API returns summaries of shows as HTML, where (although I believe it's safe) still run it
through `sanitize-html`. As far as design goes, I choose to not use a framework in order to showcase
some of my own design
skills.

![](https://github.com/jack-carling/jack-carling/assets/72305598/a58c2d15-6ec2-4b9e-b54a-483272d73959)

## Setup

Install

```
npm install
```

Run (development mode) on port 3000, set preferred port in `vite.config.js`

```
npm run dev
```

Run tests

```
npm run test
```

## Development

Ran on Node `v21.6.1` with NPM `10.2.4`. Tested on Chrome `123.0.6312.87`, iPhone `17.3.1`, Firefox `123.0.6312.87` and
Safari `Sonoma 14.4.1` 
