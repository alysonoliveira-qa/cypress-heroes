# 🧪 Cypress Heroes – QA Automation (Client)

## 📌 Overview

This project contains the **End-to-End (E2E) test automation suite** for the *Cypress Heroes* application.

The goal of this layer is to validate the main user flows from a **real user perspective**, ensuring reliability across critical features such as:

* Hero creation
* Hero listing
* Hero update
* Hero deletion

All tests are written using **Cypress**, following best practices for scalability, readability, and maintainability.

---

## ⚙️ Tech Stack

* Cypress
* TypeScript
* Custom Commands
* Factory Pattern
* Data-driven selectors (`data-cy`)
* Monorepo structure (client/server)

---

## 🚀 How to Run the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Start the application

From the root of the project:

```bash
npm run dev
```

---

### 3. Open Cypress (interactive mode)

Inside `/client`:

```bash
npx cypress open
```

---

### 4. Run tests in headless mode

```bash
npx cypress run
```

---

## 📁 Project Structure

```
client/
├── cypress/
│   ├── e2e/
│   │   └── heroes/
│   │       ├── createHero.cy.ts
│   │       ├── updateHero.cy.ts
│   │       ├── deleteHero.cy.ts
│   │       └── listHeroes.cy.ts
│   │
│   ├── support/
│   │   ├── commands.ts
│   │   └── e2e.ts
│   │
│   ├── fixtures/
│   │
│   └── factories/
│       └── heroFactory.ts
│
└── docs/
    └── test-cases/
```

---

## 🧠 Testing Strategy

### ✅ End-to-End Coverage

Tests simulate real user behavior interacting with the UI, validating:

* Form inputs
* API integration via UI
* Rendering consistency

---

### 🔁 Test Isolation

Each test generates unique data using:

```ts
Date.now()
```

This prevents:

* Data collision
* Flaky tests
* Environment dependency

---

### 🧩 Custom Commands

Reusable actions are abstracted into Cypress commands.

Example:

```ts
cy.createHero(heroData)
```

Benefits:

* Cleaner tests
* Reusability
* Reduced duplication

---

### 🏭 Factory Pattern

Test data is generated dynamically using a factory:

```ts
heroFactory()
```

Benefits:

* Centralized data management
* Flexible test scenarios
* Easier maintenance

---

### 🎯 Selectors Strategy

All elements use:

```html
data-cy="..."
```

Why:

* Decouples tests from UI changes
* Avoids fragile selectors (CSS / classes / IDs)

---

## 📸 Test Documentation

The `/docs` folder contains:

* Test case screenshots
* Validation flows
* QA documentation artifacts

This helps simulate a **real QA workflow**, including documentation alongside automation.

---

## 🧪 Example Test Flow

```ts
it('should create a new hero', () => {
  const hero = heroFactory()

  cy.visit('/')
  cy.createHero(hero)

  cy.contains(hero.name).should('exist')
})
```

---

## 📊 Quality Practices Applied

* Separation of concerns (tests vs commands vs data)
* Deterministic test data
* Readable test cases
* Scalable folder structure
* Real-world QA documentation approach

---

## 🚧 Future Improvements

* [ ] CI integration (GitHub Actions)
* [ ] Test reporting (Allure / Mochawesome)
* [ ] API test layer (integration tests)
* [ ] Visual regression testing
* [ ] Parallel test execution

---

## 🤝 Contribution

This project is part of a QA portfolio focused on evolving from **QA Analyst → Quality Engineer**, emphasizing automation, architecture, and real-world practices.

---

## 📬 Contact

Feel free to connect or discuss QA, automation, or testing strategies.
