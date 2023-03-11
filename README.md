# The SvelteKit Enterprise Stack

Time is money and setting up a project can be a lot when you could be working on the business logic instead.

![SvelteKit Enterprise Stack](https://user-images.githubusercontent.com/38083522/223439340-ae4af96b-e848-47fc-be73-3a4b8cb834e1.png)

## The Stack

Every part of the SvelteKit stack for enterprise is optimized to go blazingly fast to please investors and shareholders alike using:

- [Prisma](https://www.prisma.io/) for the database
- [Lucia](https://lucia-auth.com/) for authentication
- [Tailwind](https://tailwindcss.com/) for styling (with automatic class sorting) and [Skeleton UI](https://www.skeleton.dev/) for the UI components
- [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) to make working with forms easy
- [svelte-stripe](https://www.sveltestripe.com/) to integrate [Stripe](https://stripe.com/) payments
- [Lucide](https://lucide.dev/) for icons
- [TypeScript](https://www.typescriptlang.org/), [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [Playwright](https://playwright.dev/) and [Vitest](https://vitest.dev/) for testing configured

You can change anything you want from your database to authentication **if you read their documentation** — for example by default Prisma uses [SQLite](https://www.sqlite.org/index.html) because it requires no setup but it's trivial to change it to use any other SQL database if you want.

## Using GitHub Templates

You can start a new project by pressing "Use this template" inside GitHub which copies the project with a clean Git history.

![Template](https://user-images.githubusercontent.com/38083522/223441491-4d3dda0b-ee0e-49cd-ab0d-ce9fd74dd124.png)

## Using Degit

You can use `degit` to download the project if you don't want to create a new repository, or if you're not using GitHub which also gives you a clean slate to start from.

```
npx degit joysofcode/enterprise-stack
```

## Setup

📦️ Install the project dependencies.

```bash
npm i
```

⚙️ Rename `.env.example` to `.env` and set your environment variables inside.

```shell
DATABASE_URL="file:./dev.db"
```

📜 Create the database and generate the Prisma client from your Prisma schema.

```bash
npx prisma db push
```

This is great for trying things out but you can use [Prisma migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate) for production.

You can change the database schema inside `prisma/schema.prisma` and run `npx prisma studio` to look at your database.

💿️ Run the development server.

```bash
npm run dev
```

## Deploying

You can pick a SvelteKit adapter you want and deploy this to anywhere. If you don't have a full-stack hosting solution you can use a serverless SQL database provider and host your frontend somewhere else.

```bash
npm run build
```

You can also preview the build.

```bash
npm run preview
```
