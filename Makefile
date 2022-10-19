# Makefile
install:
	npm ci

brain-games: # brain games
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js	

publish: # publish
	npm publish --dry-run

lint:
	npx eslint .	

test:
	npm test

make lint:
	npx eslint
.PHONY: test	
