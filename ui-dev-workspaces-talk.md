# Workspaces

---

# Instructor

### Harry Wolff

<img src="/src/images/profile.jpg" width="25%" style={{ margin: '0 auto' }} />

---

## Find me online at all the usual places

- @hswolff
- youtube.com/hswolff
- hswolff.com

---

# Intro pages

# Before I can say what Workspaces are, I want to talk about what problems they solve

# In the beginning....of most projects...

We start small with a focused set of functionality.

--

Let's pretend we're starting a company called Woogle.

--

Our first product is Search!

```
pages/
    search.js
components/
    searchItem.js
packages.json
```

Everything is great! We have one product, one package, one frontend app!

---

# Due to the success of Search we're adding a new product...Mail!

So let's make the frontend app:

```
pages/
    search.js
    mail.js
    mailSettings.js
components/
    searchItem.js
    mailList.js
    mailActionBar.js
packages.json
```

Ok, things are a little less great.

We have two products, but still one package, and one frontend app.

It's not great, but still workable.

---

# And then....we add a new product...Calendar!

```
pages/
    search.js
    mail.js
    mailSettings.js
    calendar.js
components/
    searchItem.js
    mailList.js
    mailActionBar.js
    calendarDay.js
packages.json
```

Ok, things are starting to get bad.

We have three products, one package, and one frontend app.

Three different teams are now working on top of each other.

---

# So let's fix things

Let's revise the layout structure to reflect the separate products.

```
search/
mail/
calendar/
package.json
```

Everything's good, except one day the calendar team needs to bring in a new dependency...Moment.js.

And we have a problem!

We're still only one package, which means that dependency is now shared by every product.

---

# The naive but painful fix

The best way to fix this is to make new packages, separate `package.json`.

This would mean we'd have to run `npm install` in every folder and every different package has no awareness of each other.

We could do this easily by making separate repos, but that brings its own set of problems.
Managing multiple git repos is a nightmare, the likes of which would keep you up at night.

So instead...we can use a monorepo!

---

# What is a monorepo?

It's the practice of having multiple packages in one repo.

It's kind of what we already have going on, multiple projects, but one repo.

Many companies make use of monorepos.

They provide many advantages: (stolen from wikipedia)
https://en.wikipedia.org/wiki/Monorepo

- Ease of code reuse
- Atomic commits
- Large-scale code refactoring
- Collaboration across teams
- Simplified dependency management

However what we're missing is a way to manage the projects in our monorepo.

A tool specifically made to coordinate related but different packages in our monorepo.

And that tool is...you guessed it...

---

Workspaces!

---

# What are Workspaces?

https://classic.yarnpkg.com/en/docs/workspaces/
https://yarnpkg.com/features/workspaces
https://docs.npmjs.com/cli/v7/using-npm/workspaces

Workspaces is a way to manage multiple packages.

It's built directly into modern JavaScript package mangers: NPM (7), Yarn, and others.

It's a way to manage all dependencies across every project (potentionally reusing common dependencies),
and it makes every workspace package aware of each other (meaning you don't have to npm link).

Workspaces encourages modularization of your code as introducing new packages and managing them is made extremely easy.

---

# History Break!

Before we delve more into understanding and learning how to use Workspaces I want to provide some important historical context to how Workspaces came to be.

The first ways that people managed multiple packages in one repo was heavily manual.

It involved going into every package and running `npm install` and then having to manually run `npm link`.

---

# Quick aside - `npm link` is a little known tool that lets you link two packages together on your filesystem.

Briefly it looks like this

```
cd packages/common-utils
npm link # registers `common-utils` as a global link
cd ../my-app
npm link common-utils # points my-app's common-utils dependency to the linked one on the filesystem
```

This becomes quickly unwieldy as your number of packages increases.

As such a lovely tool was created to automate and streamline that process called Lerna.

---

# Lerna

Lerna was the original tool that multi-package monorepos used. It did practically everything you could ask for as far as managing multi-packages - it could link and had a bunch of extremely useful tooling on top (seeing which packages changed and which didn't and coordinating changes across packages).

However it's one biggest weakness was that it was built on top of existing package managers. Lerna was beholden to what npm did. It wasn't the authority as far as how packages are installed and linked and managed.

This is what led to the creation of Workspaces, first created by Yarn v1.

---

# Yarn Workspaces

Yarn invented Workspaces. The novel innovation here was directly building in multi-package awareness into the package manager.

This means that after you configure Workspaces with Yarn, you can tell Yarn to install and it will handle installing dependencies for every package, including linking packages that depend on each other, in the most optimal way.

Yarn can even hoist common dependencies across projects so that it only installs one copy to your filesystem.

It's able to do this all in the most efficient and quickest way possible as Yarn is already responsible for installing your dependencies.

After Yarn Workspaces was introduced Lerna quickly switched to using it and since then it has spread to many other package managers.

In fact Workspaces has just arrived with NPM 7, which came standard with Node 15 in October 2020.

---

# So...what does it look like to use Workspaces?

This is what we're going to do together.

1. Tour of monorepo ready for Workspaces
1. Show how to manually use the monorepo without tooling
   1. Manual npm link
   1. Manual npm install
   1. Show that they both work, manually
1. Configure the workspace by adding root package.json
1. Show how the "workspaces" field works. - https://classic.yarnpkg.com/en/docs/workspaces
   1. Explicitly listing out workspaces
   1. Using glob pattern
1. Clear node_modules and have workspaces install everything via workspace
   1. Show that every package still works
1. Add cowsay2 package to `mail`
   1. Show how package is shared with `search`
1. Change versions of cowsay2 to be different for both packages
   1. Show how workspaces installs the different versions for us

---

# Thanks for coming!

---

## Find me online at all the usual places

- @hswolff
- youtube.com/hswolff
- hswolff.com

<img src="/src/images/profile.jpg" width="20%" style={{ margin: '0 auto' }} />

---

Links

- https://dev.to/limal/simplify-your-monorepo-with-npm-7-workspaces-5gmj
- https://classic.yarnpkg.com/en/docs/cli/workspace
- https://lerna.js.org
- https://docs.npmjs.com/cli/v7/using-npm/workspaces
