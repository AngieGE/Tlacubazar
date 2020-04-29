# TlacuBazar

## Project structure
```
.
├── README.md
└── angular-mysql-crud
    ├── client          # Frontend, Angular project
    │   └── ...
    ├── database        # Latest version of the DB SQL file
    │   └── database.vx.sql
    └── server          # Backend, Node project
        └── ...
```

## Prerequisites
* [Node.js](https://nodejs.org/)

## Getting Started

### On client
#### 1. Navigate to `angular-mysql-crud/client`.
#### 2. Run `npm install` to install project dependencies.

If dependencies are already installed, continue to step 3.

```shell
npm install
```

#### 3. Run `ng serve`.

```shell
ng serve
```

### On server

#### 1. Navigate to `angular-mysql-crud/server`.
#### 2. Run `npm install`.

If dependencies are already installed, continue to step 3.

```shell
npm install
```

#### 3. Open two shells.
#### 4. Run `npm run build` in the first shell.

```shell
npm run build
```

#### 5. Run `npm run dev` in the second shell.

```shell
npm run dev
```

## Contributions

Contributors to this repository should also be part of [TlacuBazar in Trello](https://trello.com/tlacubazar)

#### 1. Clone this repository.

```shell
git clone https://github.com/AngieGE/Tlacubazar.git
```

#### 2. Create a branch.

Change to the repository directory on your computer (if you are not already there):

```shell
cd TlacuBazar
```

Now crate a branch using `git checkout -b`. Branch names should be named `dev/<username>` if they are going have code and/or files to be merged with master.

For example:

```shell
git checkout -b dev/epicLevi
```

#### 3. Make changes and commit.

#### 4. Push changes to remote repository.

```shell
git push origin <branch-name>
```

#### 5. Submit changes for review.

5.1. If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

5.2. Now submit the pull request.

