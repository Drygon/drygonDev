# Drygon development environement

Since I got so many errors and issues with deployment to firebase, I decided to recreate everthing from scratch. and write the steps down.

` create-react-app drygonDev
` cd drygonDev
modify content
` yarn build
` yarn global add serve
` serve -s build
` firebase init
` yarn build
` firebase serve

!!!so far so good!

`git remote add origin https://github.com/Drygon/drygonDev.git
` git add .
`git commit -m "first commit"
`git push -u origin master