This is Micro-Frontends [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites

1. Add `.env.local` file to the `home-nextjs-module`:

```shell
NODE_ENV=development
```

To run everything in a host app:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

To create a build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

and then run built app:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the Home (host) app.

Open [http://localhost:8081](http://localhost:8081) with your browser to see the Remote (exposed) app.

## Production

Open [federated-pokemon-home-nextjs-module](https://federated-pokemon-home-nextjs-module.vercel.app/) with your browser to see the Home (host) app.

Open [federated-pokemon-remote-nextjs-module](https://federated-pokemon-remote-nextjs-module.vercel.app/) with your browser to see the Remote (exposed) app.
