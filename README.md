# The SvelteKit Enterprise Stack

Time is money and setting up a project can be time consuming when you could be working on the business logic instead.

![SvelteKit Enterprise Stack](https://user-images.githubusercontent.com/38083522/226189777-4ecda836-5d1f-4819-ba11-2d2fe09d1838.png)

## The Stack

Every part of the **SvelteKit Enterprise Stack** is optimized to go blazingly fast to please stakeholders and uses:

- [Prisma](https://www.prisma.io/) for the database
- [Lucia](https://lucia-auth.com/) for authentication
- [Tailwind](https://tailwindcss.com/) for styling with automatic class sorting and [Skeleton UI](https://www.skeleton.dev/) for the UI components
- [Stripe](https://stripe.com/) for payments
- [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) make working with forms easy
- [Lucide](https://lucide.dev/) for beautiful and consistent icons
- [TypeScript](https://www.typescriptlang.org/), [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [Playwright](https://playwright.dev/) and [Vitest](https://vitest.dev/) for testing configured

## Customization

Every part of the stack is modular and easy to replace.

You can **configure** anything you want from your database to authentication if you read their respective **documentation** — for example Prisma is configured with [SQLite](https://www.sqlite.org/index.html) because it requires no setup but it's trivial to [change the database connector](https://www.prisma.io/docs/concepts/database-connectors) to use **PostgreSQL**, **MySQL**, **MongoDB**, **CockroachDB** or **Microsoft SQL Server** without having to change the Prisma schema.

## Payments

Stripe payment is set up to give you a starting point how to do Stripe payments with SvelteKit but easy to remove if you don't need payments.

- You're going to need to create a Stripe account
- Get the API keys from the [Stripe dashboard](https://dashboard.stripe.com/login)
- Place the API keys inside your `.env` file for local development or the dashboard of your host
- Create the product inside the [Stripe dashboard](https://dashboard.stripe.com/test/dashboard/products) and get the `productId`
- You can [add a webhook endpoint](https://dashboard.stripe.com/test/webhooks) that points to `stripe/webhook` where you can add logic to respond to events like checkouts or if an invoice has been paid to continue or revoke access to your product

You can find a Stripe subscription example at `/pricing` but you're going to need to [understand how to work with the Stripe API](https://stripe.com/docs) to change it to what you want and update your Prisma schema to give users access based on what they purchased.

![Pricing](https://user-images.githubusercontent.com/38083522/226190147-44cdd3b5-17ab-4ad0-972a-1f8f57dc74c1.png)

There's so many things you can do with the Stripe API like using their client library to get a dynamic pricing table if you want but I wanted to keep things simple.

You might want something more custom like [Stripe elements](https://stripe.com/payments/elements) in which case you can look at the [svelte-stripe](https://www.sveltestripe.com/) package that has a simple integration with instructions and examples.

If you want something simpler let Stripe handle everything and [create a payment link](https://stripe.com/en-hr/payments/payment-links) for the product you create and just use that link.

## Get Started

### Using GitHub Templates

You can start a new project by pressing "Use this template" at the top which copies the project with a clean history.

![Template](https://user-images.githubusercontent.com/38083522/226207439-1195c8c4-e3e2-4db0-8f39-7277b08872be.png)

### Using Degit

You can use `degit` to download the project if you don't want to create a new repository, or if you're not using GitHub which also gives you a clean slate to start from.

```
pnpx degit joysofcode/enterprise-stack
```

## Setup

You can use any package manager of your choice but I recommend you use [pnpm](https://pnpm.io/) because it's fast and doesn't destroy your hard disk because it symlinks packages.

### 📦️ Install the project dependencies

```bash
pnpm i
```

### ⚙️ Rename `.env.example` to `.env` and set your environment variables

If you're using a host like Vercel you have to enter the environment variables in their dashboard.

```shell
# Prisma
DATABASE_URL="file:./dev.db"

# Stripe
PUBLIC_STRIPE_KEY="pk_test_1234"
SECRET_STRIPE_KEY="sk_test_1234"
STRIPE_WEBHOOK_SECRET="we_1234"
```

### 📜 Create the database and generate the Prisma client from your Prisma schema

```bash
pnpx prisma db push
```

Using `db push` is great for prototyping but you might want to use [Prisma migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate) for production.

You can change the database schema inside `prisma/schema.prisma` and run `pnpx prisma studio` to look at your database.

### 💿️ Run the development server

```bash
pnpm run dev
```

### ⛵️ Deploying

You can use any SvelteKit adapter that deploys to a target that supports a [Node.js](https://nodejs.org/) runtime.

If you don't have a full-stack hosting solution you can provision a serverless PostgreSQL database provider using [Railway](https://railway.app/) or [Supabase](https://supabase.com/) and host your frontend on [Vercel](https://vercel.com/) starting at no cost.

```bash
pnpm run build
```

You can also preview the build.

```bash
pnpm run preview
```
