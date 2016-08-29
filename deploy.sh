#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd src

git init
git config user.name "Albert Rodriguez"
git config user.email "albertrfranco@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/UncleFirefox/GbTs.git"
git fetch upstream
git reset upstream/gh-pages

touch .

git add -A .
git commit -m "Rebuilding the emulator, revision: ${rev}"
git push -q upstream HEAD:gh-pages