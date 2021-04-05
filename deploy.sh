cd dist
echo "-----------------------------  Inside dist folder ----------------------------- "
git fetch --all
git checkout dist-deploy
echo "-----------------------------  Checked out remote branch ----------------------------- "

echo "-----------------------------  Pulling the latest code ----------------------------- "
git add . 
echo "-----------------------------  Adding local files ----------------------------- "
git commit -m "New deploy"
echo "----------------------------- Commiting  ----------------------------- "
git push -u origin dist-deploy
echo "----------------------------- Updated -----------------------------"
cd ..
git checkout main
echo "----------------------------- Completed -----------------------------"