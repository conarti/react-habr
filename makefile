install:
	npm ci

serve:
	npm run serve

build-dev:
	npm run build:dev

build-prod:
	npm run build:prod

lint:
	npm run lint
	npm run lint:styles

lint-fix:
	npm run lint:fix
	npm run lint:styles:fix

test-unit:
	npm run test:unit

test-unit-watch:
	npm run unit -- --watch

test-ui:
	npm run test:ui

test-ui-ok:
	npm run test:ui:ok

storybook:
	npm run storybook

storybook-build:
	npm run storybook:build
