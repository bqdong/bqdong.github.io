_default:
    just -l

# Install git hook
install-git-hook:
    cp .git-hooks/* .git/hooks/
    chmod +x .git/hooks/*
