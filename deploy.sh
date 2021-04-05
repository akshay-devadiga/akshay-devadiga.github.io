cd dist
echo "-----------------------------  Inside dist folder ----------------------------- "
git fetch --all
git checkout deploy-dist
echo "-----------------------------  Checked out remote branch ----------------------------- "
git pull origin deploy-dist
echo "-----------------------------  Pulling the latest code ----------------------------- "
git add . 
echo "-----------------------------  Adding local files ----------------------------- "
git commit -m "New deploy"
echo "----------------------------- Commiting  ----------------------------- "
git push -u origin deploy-dist
echo "----------------------------- Updated -----------------------------"
cd ..
git checkout main