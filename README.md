# The SvelteKit Enterprise Stack

Time is money and setting up a project can be time consuming when you could be working on the business logic instead.

![SvelteKit Enterprise Stack](https://user-images.githubusercontent.com/38083522/226189777-4ecda836-5d1f-4819-ba11-2d2fe09d1838.png)

## The Stack

Every part of the SvelteKit stack for enterprise is optimized to go blazingly fast to please stakeholders and uses:

- [Prisma](https://www.prisma.io/) for the database
- [Lucia](https://lucia-auth.com/) for authentication
- [Tailwind](https://tailwindcss.com/) for styling (with automatic class sorting) and [Skeleton UI](https://www.skeleton.dev/) for the UI components
- [Stripe](https://stripe.com/) for payments
- [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) to make working with forms easy
- [Lucide](https://lucide.dev/) for icons
- [TypeScript](https://www.typescriptlang.org/), [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [Playwright](https://playwright.dev/) and [Vitest](https://vitest.dev/) for testing configured

## Customization

Every part of the stack is modular and easy to replace.

You can change anything you want from your database to authentication **if you read their documentation** — for example by default Prisma uses [SQLite](https://www.sqlite.org/index.html) because it requires no setup but it's trivial to change it to use any other SQL database or MongoDB if you want.

## Payments

The Stripe payment method is set up to give you a starting point how to do Stripe payments with SvelteKit but easy to remove if you don't need payments.

You're going to need a Stripe account and then you can get the API keys from the [Stripe dashboard](https://dashboard.stripe.com/login) you can put inside your `.env` file for local development or the dashboard of your host.

You can find a basic Stripe subscription example at `/pricing` but you're going to need to [understand how to work with the Stripe API](https://stripe.com/docs) to change it to what you want and update your Prisma schema to give users access based on what they purchased.

![Pricing](https://user-images.githubusercontent.com/38083522/226190147-44cdd3b5-17ab-4ad0-972a-1f8f57dc74c1.png)

Inside the Stripe dashboard you can add products and get the `productId` but also [add a webhook endpoint](https://dashboard.stripe.com/test/webhooks) that points to `stripe/webhook` where you can add your logic to respond to events like checkouts or if an invoice has been paid to give the customer access to your product.

In the case you want something more custom like [Stripe elements](https://stripe.com/payments/elements) you can look at the [svelte-stripe](https://www.sveltestripe.com/) package that has a simple integration with instructions and examples.

If this sounds complicated let Stripe handle everything and create a payment link for any product you create and just point to the product.

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

If you're using a host like Vercel you have to enter the environment variables in their dashboard.

```shell
# Prisma
DATABASE_URL="file:./dev.db"

# Stripe
PUBLIC_STRIPE_KEY="pk_test_1234"
SECRET_STRIPE_KEY="sk_test_1234"
STRIPE_WEBHOOK_SECRET="we_1234"
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
