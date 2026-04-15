# 🧪 QA Automation – Cypress Heroes (by Alyson Oliveira)

This section documents the end-to-end test automation implemented for the Heroes feature using Cypress.

---

## 🚀 Objective

Automate critical user flows and validate application behavior through UI testing, focusing on scalability, maintainability, and real-world QA practices.

---

## 🧪 Test Coverage (CRUD)

### ✅ Create Hero
- Create hero with valid data
- Validate hero appears in the list

### 📖 Read Heroes
- Validate heroes list rendering
- Validate created hero is displayed

### ✏️ Update Hero
- Edit existing hero data
- Validate updated information in UI
- Validate persistence after page reload

### 🗑️ Delete Hero
- Delete an existing hero
- Validate removal from the list

---

## 🧠 QA Practices Applied

### 🔹 Test Isolation
Each test generates its own data dynamically:

```ts
'Hero' + Date.now()
```
### 🔹 Custom Commands
Reusable actions encapsulated:

```ts
cy.createHero(hero)
```
### 🔹 Factory Pattern
Centralized test data creation:

```ts
const hero = heroFactory()
```
### 🔹 Stable Selectors
Use of data-cy attributes to avoid flaky tests.

### 🔹 Scoped Interactions
Use of .within() to ensure correct element targeting.

---

## 🧱 Project Structure

```text
cypress/
  e2e/heroes/
    createHero.cy.ts
    editHero.cy.ts
    deleteHero.cy.ts
    listHeroes.cy.ts

  support/
    commands.ts
    heroFactory.ts
```
---

## ⚠️ Challenges & Solutions

❌ Issue: TypeScript errors in custom commands

✔ Solution: Proper typing using index.d.ts

❌ Issue: Fragile selectors

✔ Solution: Replaced with data-cy

❌ Issue: Test data conflicts

✔ Solution: Dynamic data using Date.now()

❌ Issue: Incorrect command usage

✔ Solution: Refactored logic using custom commands

---

## 🚀 Next Steps

API validation with cy.intercept
CI integration (GitHub Actions)
Advanced test architecture improvements

---

## 👨‍💻 Author

Alyson Oliveira
QA Engineer transitioning to Quality Engineering 🚀

---


# Cypress Heroes Demo Application

This is a demo application that shows how to use Cypress to run end-to-end,
component, and API tests against an application.

## Getting Started

The app is a mono repo that uses npm workspaces. Once you clone the project,
install the dependencies at the root folder:

```sh
npm install
```

After that a few more things need to be set up (databases and such), to do so run:

```sh
npm run setup
```


To launch the app for development, run:

```sh
npm run dev
```

This will start both the client and server apps in dev mode. The site will be
available at http://localhost:3000.

## App Overview

The Cypress Heroes app consists of a frontend client app written in React that
uses Vite, as well as a backend app that uses NestJS.

### React Client App

The React client app is located in the **client** folder. It is a standard React [Vite](https://vitejs.dev/) app.

Todo: fill out

### NestJS Server App

The server app is in the **server** folder. It is built with the [NestJS](https://nestjs.com/) Node.js framework. It uses [Prisma](https://www.prisma.io/) for the database ORM.

#### Database seeding and resetting

The database is seeded from the **server/prisma/seed.ts** script when you set up the app. If at any time you want to reset the database back to its initial state, run:

```sh
npm run resetdb
```

## Environment Variables

The client app uses an environment variable to know what the URL is for the
backend api named `VITE_API_URL`. It defaults to "http://localhost:3001" for use
in dev mode, and should be overriden in other environments/modes.


---

# 🧪 QA Automation – Cypress Heroes (by Alyson Oliveira)

This section documents the end-to-end test automation implemented for the Heroes feature using Cypress.

---

## 🚀 Objective

Automate critical user flows and validate application behavior through UI testing, focusing on scalability, maintainability, and real-world QA practices.

---

## 🧪 Test Coverage (CRUD)

### ✅ Create Hero
- Create hero with valid data
- Validate hero appears in the list

### 📖 Read Heroes
- Validate heroes list rendering
- Validate created hero is displayed

### ✏️ Update Hero
- Edit existing hero data
- Validate updated information in UI
- Validate persistence after page reload

### 🗑️ Delete Hero
- Delete an existing hero
- Validate removal from the list

---

## 🧠 QA Practices Applied

### 🔹 Test Isolation
Each test generates its own data dynamically:

```ts
'Hero' + Date.now()
```
### 🔹 Custom Commands
Reusable actions encapsulated:

```ts
cy.createHero(hero)
```
### 🔹 Factory Pattern
Centralized test data creation:

```ts
const hero = heroFactory()
```
### 🔹 Stable Selectors
Use of data-cy attributes to avoid flaky tests.

### 🔹 Scoped Interactions
Use of .within() to ensure correct element targeting.

---

## 🧱 Project Structure

```text
cypress/
  e2e/heroes/
    createHero.cy.ts
    editHero.cy.ts
    deleteHero.cy.ts
    listHeroes.cy.ts

  support/
    commands.ts
    heroFactory.ts
```
---

## ⚠️ Challenges & Solutions

❌ Issue: TypeScript errors in custom commands

✔ Solution: Proper typing using index.d.ts

❌ Issue: Fragile selectors

✔ Solution: Replaced with data-cy

❌ Issue: Test data conflicts

✔ Solution: Dynamic data using Date.now()

❌ Issue: Incorrect command usage

✔ Solution: Refactored logic using custom commands

---

## 🚀 Next Steps

API validation with cy.intercept
CI integration (GitHub Actions)
Advanced test architecture improvements

---

## 👨‍💻 Author

Alyson Oliveira
QA Engineer transitioning to Quality Engineering 🚀
