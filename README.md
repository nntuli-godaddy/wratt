# wratt 

## The official Github repo for GoDaddy bootcamp's 2025 class. 

(JAVIER'S VERSION)

Separate the `frontend` folder and `backend` folder into different terminals for now. 
- `cd frontend` in terminal 1
- `cd backend` in terminal 2
- in terminal 1, do `npm install` then `npm run local`, it should give you the local port to check out
- in terminal 2, do `docker compose up -d`, then check that my tests are good with `docker compose up --build --exit-code-from tests --abort-on-container-exit tests`
- now, you should be able to add and delete shopItems to the cart.



Make sure to stage any commits that you'd like to add here. Some things are subject to be deleted before the deadline, so don't worry about bloat. 

### CURRENT ISSUES 
Use this space below to list some issues, or TO-DOs for the group to work on.
List your name and issue below:

- Javier: Need help revising the `cartItem` properties and `path` for both `cartItem` and `cartItem/{id}`


### How to contribute?

Use an IDE, PyCharm or VSCode, or even the terminal if you're feeling spicy!

Clone the repo, make sure to add your name and email (these will be done sequentially, not all at once):


`git config --global user.name <YOUR_NAME_HERE>`

`git config --global user.email <YOUR_EMAIL_HERE>`


I prefer VSCode to stage, and commit your changes. If you run into any issues while synching your commit, such as
"local branch has diverged from main" or something like that, do this:

`git pull --rebase`

then try synching again

*if you have any doubts, or would like some guidance, message the group on Slack!!!*


### Links to some stuf

Some useful links for everyone:
- [Group Google Doc](https://docs.google.com/document/d/1M1NF-a2GxmrUhIK5CsOaiV-rZ7A3qEL6fHy4__R4Ya0/edit?tab=t.0)
- [Group Figma](https://www.figma.com/design/wOwoPRc4faycvZOohWg0PQ/bootcamp-group-project?node-id=0-1&p=f&t=DM6WD8uldW3QTxMF-0)
- [Group Project Docs (OFFICIAL)](https://godaddy-corp.atlassian.net/wiki/spaces/URBC/pages/3833345069/Group+Project+-+2025+Bootcamp)

Links you can use for reference if you're stuck:
- [BootcampCartAPI (OFFICIAL)](https://github.com/thoag-godaddy/BootCampCart-API/tree/main)
- [Web API Workshop (OFFICIAL)](https://github.com/thoag-godaddy/workshop-web-apis?tab=readme-ov-file)
- [Swagger editor](https://editor.swagger.io)


🤗🤗🤗🤗🤗🤗🤗🤗🤗
