#!/bin/bash

set -o errexit -o nounset

# We could also check stuff like $TRAVIS_PULL_REQUEST == "false"
if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

rm -rf deploy || exit 0;
mkdir deploy;

cd deploy

git init
git config user.name "Albert Rodriguez"
git config user.email "albertrfranco@gmail.com"

cp -a ../src/* ../deploy

git add .
git commit -m "Rebuilding the emulator, revision: ${rev}"
git push --force --quiet "https://${GH_TOKEN}@github.com/UncleFirefox/GbTs.git" master:gh-pages