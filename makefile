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

unit:
	npm run unit

watch-unit:
	npm run unit -- --watch

storybook:
	npm run storybook

build-storybook:
	npm run build-storybook
