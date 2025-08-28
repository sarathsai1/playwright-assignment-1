# Playwright Assignment 1 – Data-Driven Testing (C Sarath)

## Assignment 1: Data-Driven Testing
- Reads test data from Excel/JSON.
- Runs parameterized tests dynamically.
- Generates HTML/Allure reports.



## Overview
This assignment implements data-driven testing using Playwright.  
The tests dynamically read multiple datasets from Excel or JSON and run parameterized test cases for each dataset.

## Features
- Reads multiple test datasets from Excel/JSON files (e.g., login credentials, search keywords).
- Executes parameterized tests for each dataset.
- Generates a custom HTML/Allure report showing which dataset passed or failed.
- Supports clean and modular test design.


## How to Run
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/playwright-dataDriven.git
   cd playwright-dataDriven

2. Install dependencies:

npm install

3. Run tests:

npx run test


4. Open reports:

npx playwright show-report

5. Allure Generate And Results

allure generate allure-results --clean -o allure-report
allure open allure-report
