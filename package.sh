#!/bin/bash
START_TIME=$SECONDS

# gsed for macos, gotta be installed with brew
if command -v gsed &>/dev/null; then
    SED="gsed"
else
    SED="sed"
fi

echo "Buidling package..."
rm -r lib
tsc
rm -r package
mkdir package

echo "Copying files..."
cp -r lib package/lib
cp package.json Readme.md LICENSE package

echo "Adjusting package.json..."
$SED -i 's/"private": true/"private": false/' ./package/package.json
npm pkg delete scripts.prepare --prefix ./package

ELAPSED_TIME=$(($SECONDS - $START_TIME))
echo "Done in $ELAPSED_TIME seconds!"
