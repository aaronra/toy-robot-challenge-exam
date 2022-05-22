## Get started

#### Make sure you have the latest git, Node.js and Yarn installed on your machine

```bash
$ git --version

$ yarn --version

$ node --version
```

#### Clone the repo from Bitbucket

```bash
$ git clone git@github.com:aaronra/toy-robot-challenge-exam.git
```

#### Install npm package

```bash
$ cd toy-robot-challenge-exam && yarn
```

#### Start local server

```bash
$ yarn start
```

And open `http://localhost:3000` to view it in the browser.

## Description:
The application is a simulation of a toy robot moving on a square tabletop. There are some pre-set obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table and moving the robot to the obstacles must be prevented, however further valid movement commands must still be allowed.

#### How to use

* Add a Robot by inputing the X and Y position on the Add Robot form located on the right side and click save and it will generate a robot card with some controls on the top right of the screen.
* We can move around the robot by using the controls provided on the robot card.
* By default we set the table dimension to 5x5 but we can update the dimension of the table using the Update Table Dimension form.

