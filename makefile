install:
	npm ci

serve:
	npm run serve

build-dev:
	npm run build:dev

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

test-ui:
	npm run test:ui

test-ui-ok:
	npm run test:ui:ok

test-ui-report:
	npm run test:ui:report

storybook:
	npm run storybook

storybook-build:
	npm run storybook:build
