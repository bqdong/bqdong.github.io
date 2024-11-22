export NPM_CONFIG_REGISTRY := "https://registry.npmmirror.com"

_default:
    just -l

# Install git hook
install-git-hook:
    cp .git-hooks/* .git/hooks/
    chmod +x .git/hooks/*

# start dev env
dev:
	deno task dev

# bump dependencies
bump-deps:
    deno outdated --update
