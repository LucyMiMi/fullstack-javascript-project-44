# Makefile
install:
	npm ci

brain-games: # brain games
	node bin/brain-games.js

publish: # publish
	npm publish --dry-run

lint:
	npx eslint .	

test:
	npm test

make lint:
	npx eslint
.PHONY: test	
