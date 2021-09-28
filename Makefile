NODE_RUNNER=npm

ENVIRONMENT_NAME=artickl-extension

.PHONY: install run lint build deploy

install:
	$(NODE_RUNNER) install

run:
	$(NODE_RUNNER) start

lint:
	$(NODE_RUNNER) run lint

build: 
	$(NODE_RUNNER) run build 

version:
	git rev-parse HEAD > .version
