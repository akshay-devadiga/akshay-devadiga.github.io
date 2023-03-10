# cd dist
# echo "-----------------------------  Inside dist folder ----------------------------- "
# git fetch --all
# git checkout dist-deploy
# echo "-----------------------------  Checked out remote branch ----------------------------- "

# echo "-----------------------------  Pulling the latest code ----------------------------- "
# git add . 
# echo "-----------------------------  Adding local files ----------------------------- "
# git commit -m "New deploy"
# echo "----------------------------- Commiting  ----------------------------- "
# git push -u origin dist-deploy
# echo "----------------------------- Updated -----------------------------"
# cd ..
# git checkout main
# echo "----------------------------- Completed -----------------------------"

#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git commit -m 'deploy'
git push -f https://github.com/akshay-devadiga/akshay-devadiga.github.io.git main:gh-pages
cd -