cd dist
git remote add origin https://github.com/akshay-devadiga/akshay-devadiga.github.io.git
git branch -M deploy-dist
git add .  
git commit -m "New deploy"
git push -u origin deploy-dist