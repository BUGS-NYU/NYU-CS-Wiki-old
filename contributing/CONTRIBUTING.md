# How to Contribute to This Site

The club website is in constant need of changes, issue fixes and new contributions.

- If you **find a problem** on the website, submit an issue.
- If you have **ideas for changing/improving the website**, create an issue and describe your ideas.
- If you want to fix some of the existing issues, fork the repository and make a pull request

## What to Contribute

All contributions, documentation improvements, and ideas are welcome; if you're new to open source, we recommend looking at the [Github "Issues" tab][issues].

### Claim an Issue

Let us know that you are working on the issue by posting a comment below the issue that you are trying to fix. Simply state that you are trying to resolve it - this way other people are not jumping in and duplicating your work.

(If you do not have any activity for a while after claiming the issue, we will assume that you abandoned it so other people can work on it.)

## How to Contribute

Once you've decided on an issue to fix or an improvement to add, you'll need to learn how to work with Github, Jekyll, and the website's general file setup.

### Git and Github

You'll first need to [create a Github account][sign-up-gh] and [download Git][git-desktop]. If you're new to either of these two systems, here's a few good resources to get you started:

- [CS61 Git][cs61-git] - Git introduction by CS61 professor at Harvard
- [How to Contribute][open-source-guide] - This guide by Alaina Kafkes describes how to contribute to projects on Github; if you're completely lost, or just need a refresher on the basics, this is a good place to start
- [Git Basics][git-basics] - A more technical look at the basics of Git itself
- [Git Cheatsheet][git-cheats] - Github's Git cheat sheet
- [How to Create a Pull Request on GitHub][create-pull-req] - A guide specifically for creating pull requests on Github. We recommend learning a little more about Git before reading this, because it can't help with troubleshooting Git problems
- [Matthew Brett's Git Guide][curious-git] - A beginner's guide to Git, how it works, and how to use it. It's written like a story, so skimming might be appropriate depending on your comfort level
- [The Git Parable][git-parable] - A beginner's guide to Git on a more technical level. It's also written like a story, so skimming might be appropriate

[git-cheats]: https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf
[open-source-guide]: https://medium.com/clarifai-champions/99-pr-oblems-a-beginners-guide-to-open-source-abc1b867385a
[git-basics]: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
[create-pull-req]: https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github
[git-desktop-guide]: https://help.github.com/desktop/guides/getting-started-with-github-desktop/
[curious-git]: https://matthew-brett.github.io/curious-git/curious_intro.html
[git-parable]: http://practical-neuroimaging.github.io/git_parable.html
[issues]: https://github.com/BUGS-NYU/bugs-nyu.github.io/issues
[git-desktop]: https://git-scm.com/downloads
[sign-up-gh]: https://github.com/join
[cs61-git]: https://cs61.seas.harvard.edu/site/ref/git/

In general, you'll need to first fork the repository to your own account, then clone it to your own computer with

```shell
# You want Terminal/Powershell to be viewing whatever folder you want to hold the project folder
# i.e. if you want the bugs-nyu.io project folder to be on you desktop, you should
# change your working directory to Desktop in Terminal
# For more information, visit http://www.linfo.org/cd.html
git clone https://github.com/YOUR-USER-NAME/bugs-nyu.github.io.git
```

Next you'll want to set up your local `master` branch to track your forked repository. You can do this with:

```shell
git branch set-url --push origin https://github.com/YOUR-USER-NAME/bugs-nyu.github.io.git
git branch -u origin/master
```

**NOTE:** You should replace `YOUR-USER-NAME` with _your_ username.

Now, whenever you type `git push` you'll push to your own forked repository, and when you type `git pull` you'll pull from BUGS's main repository.

### Setting up React

To view the website locally, you'll need to get React up and running. Before that, you'd need node and npm installed.

## MacOS

### With brew

brew is the package manager for MacOS. If you don't have brew. Take a look [here](https://brew.sh/).

Afterwards, you'd need to run the following:

```
brew install node
brew install yarn
```

After forking our repository, you can run from the root directory:

```
gatsby develop
```

You should see your website at `localhost:8000`

If you are not familiar with React, it might be to go over:

- [Full Stack Open 2020](https://fullstackopen.com/en/)

### Committing Along the Way

It's generally considered good practice to commit your changes after you've reached a "checkpoint" - a place where you like to save all of the edits you've made up to that point. To do this, use the following commands:

```shell
git add LIST-OF-FILES-WITH-CHANGES
git commit -m "MESSAGE-STATING-WHAT-YOU-DID"
git push origin master
```

### Making the Pull request

Once you're ready to submit your changes for review, you can make a pull request:

- Go to your fork on GitHub and switch to the Pull Requests tab.
- Use the big green button that says New pull request.
- Verify where you are merging from and where you are merging to (it should be master branch of your fork into the master branch of the actual BUGS website repository). Look through the list of your commits to double check that the changes you are attempting to merge are the correct ones.
- Click Create pull request once everything seems correct.
- In the message indicate the number of issue the pull request is solving and briefly tell us what you did.
