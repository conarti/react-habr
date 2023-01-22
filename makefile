install:
	npm ci

serve:
	npm run serve

serve-analyzer:
	npm run serve:bundle-analyzer

build-dev:
	npm run build:dev

build-dev-analyzer:
	npm run build:dev:bundle-analyzer

build-prod:
	npm run build:prod

lint-ts:
	npm run lint

lint-styles:
	npm run lint:styles

lint-ts-fix:
	npm run lint:fix

lint-styles-fix:
	npm run lint:styles:fix

lint: lint-ts lint-styles

lint-fix: lint-ts-fix lint-styles-fix

test-unit:
	npm run test:unit

test-unit-watch:
	npm run test:unit -- --watch

test-unit-coverage:
	npm run test:unit -- --coverage

test-ui:
	npm run test:ui

test-ui-ok:
	npm run test:ui:ok

test-ui-update:
	npm run test:ui:report

test-ui-report:
	npm run test:ui:report

stories:
	npm run storybook

stories-build:
	npm run storybook:build

fake-api:
	npm run json-server

# Code generation

slice-new:
	npx hygen slice new

slice-ui:
	npx hygen slice ui

shared-ui:
	npx hygen shared ui
