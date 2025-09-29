@echo off
echo Let's start pushing our app to github!
set /p Comment=Enter the commit message please: 
cd C:\Matan\Company\Hitchhiker101
git add .
git commit -m %Comment%
git push
echo Done!
timeout /t 2 /nobreak>nul
exit