@echo off
echo Updating Roomian Realms documentation...

git add docs/*
git commit -m "Update documentation"
git push origin main

echo Documentation updated successfully!
echo Your changes will be visible at https://thothius.github.io/roomian-realms/ in a few minutes.
pause
