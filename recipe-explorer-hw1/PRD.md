# Product Requirements Document (PRD) - Recipe Explorer

## 1. Overview
Recipe Explorer is a front-end React application built with Vite following the Master-Detail pattern. It allows users to browse food recipes and view detailed cooking instructions.

## 2. Target Audience & Goal
Home cooks seeking culinary inspiration through a clean, fast, and responsive user interface.

## 3. Core Acceptance Criteria (User Stories)
* When I open the application, I see a list of recipe cards with their thumbnail images and titles.
* When I click on a recipe card, I see the detailed preparation instructions and category in the details panel.
* When I click the close button in the details panel, the selection clears and returns to the placeholder message.

## 4. UI Architecture
* **Header**: App title and branding.
* **Master View**: List of available recipes.
* **Detail View**: Dedicated side panel for the selected recipe.