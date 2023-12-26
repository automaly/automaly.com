"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[8569],{64008:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=n(85893),r=n(11151);const s={date:"2021-10-08",title:"Git & Github cheatsheet",categories:["Version Control"],tags:["Version Control","Git","Github","cheatsheet"],lightgallery:!0,resources:[{name:"featured-image",src:"git-basic-design.png"}],featuredImage:"git-basic-design.png",featuredImagePreview:"git-basic-design.png"},o=void 0,c={id:"development/aot/2021-10-08-git-cheatsheet/index",title:"Git & Github cheatsheet",description:"1. Install",source:"@site/docs/03-development/03-aot/2021-10-08-git-cheatsheet/index.md",sourceDirName:"03-development/03-aot/2021-10-08-git-cheatsheet",slug:"/development/aot/2021-10-08-git-cheatsheet/",permalink:"/docs/development/aot/2021-10-08-git-cheatsheet/",draft:!1,unlisted:!1,tags:[{label:"Version Control",permalink:"/docs/tags/version-control"},{label:"Git",permalink:"/docs/tags/git"},{label:"Github",permalink:"/docs/tags/github"},{label:"cheatsheet",permalink:"/docs/tags/cheatsheet"}],version:"current",frontMatter:{date:"2021-10-08",title:"Git & Github cheatsheet",categories:["Version Control"],tags:["Version Control","Git","Github","cheatsheet"],lightgallery:!0,resources:[{name:"featured-image",src:"git-basic-design.png"}],featuredImage:"git-basic-design.png",featuredImagePreview:"git-basic-design.png"},sidebar:"tutorialSidebar",previous:{title:"Framework vs. Platform",permalink:"/docs/development/aot/2020-07-07-platform-vs-framework/"},next:{title:"Framework",permalink:"/docs/category/framework"}},l={},d=[{value:"1. Install",id:"1-install",level:2},{value:"2. Branches",id:"2-branches",level:2},{value:"3. Create repositories",id:"3-create-repositories",level:2},{value:"4. The .gitignore file",id:"4-the-gitignore-file",level:2},{value:"5. Synchronize changes",id:"5-synchronize-changes",level:2},{value:"6. Make changes",id:"6-make-changes",level:2},{value:"7. Temporary commits",id:"7-temporary-commits",level:2},{value:"8. Redo commits",id:"8-redo-commits",level:2},{value:"9. Search",id:"9-search",level:2},{value:"9. Github flow",id:"9-github-flow",level:2},{value:"10. Git Submodule",id:"10-git-submodule",level:2},{value:"11. Glossary",id:"11-glossary",level:2}];function a(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"1-install",children:"1. Install"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Configure user information for all local repositories"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'$ git config --global user.name "[name]"'})}),"\n",(0,t.jsx)(i.p,{children:"Sets the name you want attached to your commit transactions"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'$ git config --global user.email "[email address]"'})}),"\n",(0,t.jsx)(i.p,{children:"Sets the email you want attached to your commit transactions"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git config --global color.ui auto"})}),"\n",(0,t.jsx)(i.p,{children:"Enables helpful colorization of command line output"}),"\n",(0,t.jsx)(i.h2,{id:"2-branches",children:"2. Branches"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"braching",src:n(82459).Z+"",title:"Branching",width:"1350",height:"480"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Branches are an important part of working with Git. Any commits you make will be made on the branch you\u2019re currently \u201cchecked out\u201d to. Use ",(0,t.jsx)(i.code,{children:"git status"})," to see which branch that is."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git branch [branch-name]"})}),"\n",(0,t.jsx)(i.p,{children:"Creates a new branch"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git switch -c [branch-name]"})}),"\n",(0,t.jsx)(i.p,{children:"Switches to the specified branch and updates the working directory"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git merge [branch]"})}),"\n",(0,t.jsx)(i.p,{children:"Combines the specified branch\u2019s history into the current branch. This is usually done in pull requests, but is an important Git operation."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git branch -d [branch-name]"})}),"\n",(0,t.jsx)(i.p,{children:"Deletes the specified branch"}),"\n",(0,t.jsx)(i.h2,{id:"3-create-repositories",children:"3. Create repositories"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"A new repository can either be created locally, or an existing repository can be cloned. When a repository was initialized locally, you have to push it to GitHub afterwards."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git init"})}),"\n",(0,t.jsxs)(i.p,{children:["The git init command turns an existing directory into a new Git repository inside the folder you are running this command. After using the ",(0,t.jsx)(i.code,{children:"git init"})," command, link the local repository to an empty GitHub repository using the following command:"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git remote add origin [url]"})}),"\n",(0,t.jsx)(i.p,{children:"Specifies the remote repository for your local repository. The url points to a repository on GitHub."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git clone [url]"})}),"\n",(0,t.jsx)(i.p,{children:"Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"git clone https://<username>:<password>@github.com/<username>/<repository>.git"})}),"\n",(0,t.jsx)(i.p,{children:"Clone with authentication."}),"\n",(0,t.jsx)(i.h2,{id:"4-the-gitignore-file",children:"4. The .gitignore file"}),"\n",(0,t.jsxs)(i.p,{children:["Sometimes it may be a good idea to exclude files from being tracked with Git. This is typically done in a special file named ",(0,t.jsx)(i.code,{children:".gitignore"}),". You can find helpful templates for ",(0,t.jsx)(i.code,{children:".gitignore"})," files at ",(0,t.jsx)(i.a,{href:"https://github.com/github/gitignore",children:"github.com/github/gitignore"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"logs/ *.notes pattern*/"})}),"\n",(0,t.jsx)(i.p,{children:"Save a file with desired patterns as .gitignore with either direct string\r\nmatches or wildcard globs."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"git config --global core.excludesfile [file]"})}),"\n",(0,t.jsx)(i.p,{children:"system wide ignore pattern for all local repositories"}),"\n",(0,t.jsx)(i.h2,{id:"5-synchronize-changes",children:"5. Synchronize changes"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Synchronize your local repository with the remote repository on GitHub.com"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git fetch"})}),"\n",(0,t.jsx)(i.p,{children:"Downloads all history from the remote tracking branches"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git merge"})}),"\n",(0,t.jsx)(i.p,{children:"Combines remote tracking branches into current local branch"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git push"})}),"\n",(0,t.jsx)(i.p,{children:"Uploads all local branch commits to GitHub"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git pull"})}),"\n",(0,t.jsxs)(i.p,{children:["Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. ",(0,t.jsx)(i.code,{children:"git pull"})," is a combination of ",(0,t.jsx)(i.code,{children:"git fetch"})," and ",(0,t.jsx)(i.code,{children:"git merge"})]}),"\n",(0,t.jsx)(i.h2,{id:"6-make-changes",children:"6. Make changes"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"git status"})}),"\n",(0,t.jsx)(i.p,{children:"Show modified files in working directory, staged for your next commit"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git log"})}),"\n",(0,t.jsx)(i.p,{children:"Browse and inspect the evolution of project files"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git log --follow [file]"})}),"\n",(0,t.jsx)(i.p,{children:"Lists version history for a file, beyond renames (works only for a single file)"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git diff [first-branch]...[second-branch]"})}),"\n",(0,t.jsx)(i.p,{children:"Shows content differences between two branches"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"git diff --staged"})}),"\n",(0,t.jsx)(i.p,{children:"Diff of what is staged but not yet committed"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git show [commit]"})}),"\n",(0,t.jsx)(i.p,{children:"Outputs metadata and content changes of the specified commit"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git add [file]"})}),"\n",(0,t.jsx)(i.p,{children:"Snapshots the file in preparation for versioning"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'$ git commit -m "[descriptive message]"'})}),"\n",(0,t.jsx)(i.p,{children:"Records file snapshots permanently in version history"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'git commit -am "Your commit message"'})}),"\n",(0,t.jsxs)(i.p,{children:["Combine ",(0,t.jsx)(i.code,{children:"add"})," and ",(0,t.jsx)(i.code,{children:"commit"})," for tracked files"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"git config --global alias.ac '!git add -A && git commit -m'"})}),"\n",(0,t.jsxs)(i.p,{children:["Create a new command, eg combine ",(0,t.jsx)(i.code,{children:"add"})," and ",(0,t.jsx)(i.code,{children:"commit"})," in to ",(0,t.jsx)(i.code,{children:"ac"})," command"]}),"\n",(0,t.jsx)(i.h2,{id:"7-temporary-commits",children:"7. Temporary commits"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"Temporarily store modified, tracked files in order to change branches"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"git stash"})}),"\n",(0,t.jsx)(i.p,{children:"Save modified and staged changes"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"git stash list"})}),"\n",(0,t.jsx)(i.p,{children:"List stack-order of stashed file changes"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"git stash pop"})}),"\n",(0,t.jsx)(i.p,{children:"Write working from top of stash stack"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"git stash drop"})}),"\n",(0,t.jsx)(i.p,{children:"Discard the changes from top of stash stack"}),"\n",(0,t.jsx)(i.h2,{id:"8-redo-commits",children:"8. Redo commits"}),"\n",(0,t.jsx)(i.p,{children:"Erase mistakes and craft replacement history"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git reset [commit]"})}),"\n",(0,t.jsxs)(i.p,{children:["Undoes all commits after ",(0,t.jsx)(i.code,{children:"[commit]"}),", preserving changes locally"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git reset --hard [commit]"})}),"\n",(0,t.jsx)(i.p,{children:"Discards all history and changes back to the specified commit"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["CAUTION! Changing history can have nasty side effects. If you need to change commits that exist on GitHub (the remote), proceed with caution. If you need help, reach out at ",(0,t.jsx)(i.a,{href:"https://github.community/",children:"github.community"})," or contact support."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"9-search",children:"9. Search"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'$ git grep "hello"'})}),"\n",(0,t.jsx)(i.p,{children:"A text search on all files in the directory"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'$ git grep "hello" v2.5'})}),"\n",(0,t.jsx)(i.p,{children:"In any version of a text search:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git log -s 'keyword'"})}),"\n",(0,t.jsx)(i.p,{children:"Show commits that introduced a specific keyword"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"$ git log -S 'keyword' --pickaxe-regex"})}),"\n",(0,t.jsx)(i.p,{children:"Show commits that introduced a specific keyword (using a regular expression)"}),"\n",(0,t.jsx)(i.h2,{id:"9-github-flow",children:"9. Github flow"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Git flow",src:n(35570).Z+"",title:"Git flow",width:"1443",height:"422"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"The zoo of working areas",src:n(26579).Z+"",title:"The zoo of working areas",width:"864",height:"815"})}),"\n",(0,t.jsx)(i.h2,{id:"10-git-submodule",children:"10. Git Submodule"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"# Add a Git Submodule\r\ngit submodule add <remote_url> <destination_folder>\r\n\r\n# Pull a Git Submodule\r\ngit submodule update --init --recursive\r\ngit submodule update --remote\r\n\r\n# Remove the submodule entry from .git/config\r\ngit submodule deinit -f path/to/submodule\r\n\r\n# Remove the submodule directory from the superproject's .git/modules directory\r\nrm -rf .git/modules/path/to/submodule\r\n\r\n# Remove the entry in .gitmodules and remove the submodule directory located at path/to/submodule\r\ngit rm -f path/to/submodule\n"})}),"\n",(0,t.jsx)(i.h2,{id:"11-glossary",children:"11. Glossary"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"git"}),": an open source, distributed version-control system"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"GitHub"}),": a platform for hosting and collaborating on Git repositories"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"commit"}),": a Git object, a snapshot of your entire repository compressed into a SHA"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"branch"}),": a lightweight movable pointer to a commit"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"clone"}),": a local version of a repository, including all commits and branches"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"remote"}),": a common repository on GitHub that all team members use to exchange their changes"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"fork"}),": a copy of a repository on GitHub owned by a different user"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"pull request"}),": a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated tests, and more"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"HEAD"}),": representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits when using ",(0,t.jsx)(i.code,{children:"git switch"})]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},35570:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Github-flow-989c3a35a056ddc169a72236e916d188.png"},26579:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/The-zoo-of-working-areas-3ff736371a5f42ab5a6366f2d2c19562.png"},82459:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/braching-509c3844248ef0c8117af267303f811d.png"},11151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>o});var t=n(67294);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);