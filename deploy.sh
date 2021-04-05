cd dist
git checkout deploy-dist
git pull origin deploy-dist
git add .  
git commit -m "New deploy"
git push -u origin deploy-dist
cd ..