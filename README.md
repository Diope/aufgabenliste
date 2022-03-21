# Aufgabenliste

To do or not...to do. A simple To do app.

Live at https://aufgabenlist.netlify.app

### Tech Stack

* Typescript
* React
* Docker
* Github Actions for CI/CD

### To Run
First build the docker image, in the terminal in the current directory run `docker build -t aufgabenliste .`

After the image has been built simply start the container `docker run -dp aufgabenliste`, in your browser make your way to localhost:3000. Feel free to change the exposed port in the dockerfile.