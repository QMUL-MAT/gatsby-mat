<p align="center">
  <a href="http://mat.qmul.ac.uk">
    <img alt="MAT logo" src="http://mat.qmul.ac.uk/images/logo.gif" width="60" />
  </a>
</p>
<h1 align="center">
  The Media & Arts Technology centre official website
</h1>

This repo contains the official website for the Media & Arts Technology (MAT) centre at Queen Mary University of London. This README contains documentation for:
- [Students and staff who need to update content on the website](#information-for-students-and-staff).
- [Developers that maintain or improve the website](#information-for-developers).

# Information for students and staff

## Prerequisites

- To edit or add content to the website you'll need a [GitHub](https://github.com) account.
- You need to be a member of the [@QMUL-MAT/website-editors](https://github.com/orgs/QMUL-MAT/teams/website-editors/) team on GitHub. Send and email to Teo Dannemann at [t.dannemann@qmul.ac.uk](mailto:t.dannemann@qmul.ac.uk) with the title "Add me to the MAT website editors" and your GitHub username as the content.
- Wait for your invitation to the team.

**Note that everyone on the [@QMUL-MAT/website-editors](https://github.com/orgs/QMUL-MAT/teams/website-editors/) team has full access to change the content, functionality, and design of the site. Changes are usually reversible, but please only edit content that belongs to you (i.e. your student profile and your projects). Do not attempt to edit any other site content.**

## Editing existing content

You don't need to know much about git or GitHub to edit content on the website. If you would like to, you can browse and edit the content files for this project with an online editor. The explanations here assume that this is your approach.

1. Find the [markdown](https://www.markdownguide.org/) file (`.md` file extension) you would like to edit in the `src/content` directory. For example, If you're Andrea Guidi you can find your student profile information at `src/content/students/andrea-guidi.md`.

    ![](/readme_pics/students_filepath.png)

1. Click on the filename.

1. Click on the pencil button to open the editor.

    ![](/readme_pics/edit_button.png)

1. Edit the file:

    - The name of the file usually controls the URL of this piece of content. For example, `src/content/students/a-daniele.md` appears on the website at [/students/a-daniele](http://mat.qmul.ac.uk/students/a-daniele).
    - Images are referred to using relative location to the markdown file. `./` means "in the same directory as this file". For example, the picture `src/content/students/beautiful_me.jpg` should appear in `src/content/students/new_student.md` as `./beautiful_me.jpg`.
    - There's an integration with [ORCID](https://orcid.org/) to present students' publications on their profile page. If you want your publications that are registered in ORCID to appear on your profile set your ORCID ID as a frontmatter (metadata) field like that: `orcid_id: 0000-0002-7245-4402`. Note that it takes about 1 week until any change in publications is visible on the website.
    - For student projects, the `student` frontmatter field should be set to the name of the markdown file, without extension, of the student profile. For example, a project by Antonio Daniele should have `student: a-daniele` in its frontmatter.
    - Use markdown to write content and check examples from other content files if unsure.

1. When done editing, write a meaningful message describing the change you've made and click the `commit changes` button.

    ![](/readme_pics/commit_message_and_button.png)

1. The changes should appear on the website within 10-30 minutes.

## Adding or changing images

1. Browse online to the directory where you would like to upload your new image to. For example, `src/content/students`. Keep images next to the markdown files they appear in if possible. See previous section for details.

1. Click the `Add file` then `Upload files` buttons, and upload your image. You can use the same filename to override an existing image. Try not to upload low quality images (<200kb) or images that are too heavy (>3mb), although nothing stops you from doing so.

    ![](/readme_pics/upload_files.png)

1. If the new image replaces an existing one but has a different filename follow the instructions on the previous section to update the content to point to the new image. Also, don't forget to delete the old image.

    ![](/readme_pics/delete_file.png)

## Adding new content

1. To add new content first upload all necessary images following the instructions in the previous section.

1. Create a new file in the relevant subdirectory of `src/content` by clicking `Add file` then `Create new file`.

1. Follow the instructions for [editing existing content](#editing-existing-content). Make sure the file is saved with `.md` file extension.

# Information for developers

The website is a static site that is built with [gatsby.js](https://www.gatsbyjs.com/).

## Local development

1. Make sure you have `node` and `npm` installed. Follow the [gatsby tutorial](https://www.gatsbyjs.com/docs/tutorial/part-0/#nodejs) for details.

1. Clone the repo.

    ```shell
    git clone git@github.com:QMUL-MAT/gatsby-mat.git
    cd gatsby-mat
    ```

1. Install dependencies.

    ```shell
    npm install
    ```

1. Either get an API key, secret, and bearer token from twitter, or ask Teo Dannemann ([t.dannemann@qmul.ac.uk](mailto:t.dannemann@qmul.ac.uk)) or Jonathan Winfield ([j.winfield@qmul.ac.uk](mailto:j.winfield@qmul.ac.uk)) for the official credentials if you are maintaining the website for the long run.

1. Create an `.env` file in the root of the repo with the credentials.

    ```shell
    TWITTER_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxx
    TWITTER_API_SECRET=yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
    TWITTER_BEARER_TOKEN=zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
    ```

1. Run the development server.

    ```shell
    npm run develop
    ```

1. Visit [localhost:8000](http://localhost:8000).

## ORCID integration

A [separate repo](https://github.com/QMUL-MAT/orcid-publications) facilitates the integration of ORCID publications into the MAT website. It fetches ORCID IDs from the students' profiles, pulls publications from ORCID, and builds a GitHub pages site with the `.bib` files, one for each student, with the same filename as that student's profile filename. The GitHub pages site is available [here](https://qmul-mat.github.io/orcid-publications/). This offloads pulling the publications from the build of the MAT website, and helps keeping builds straightforwards and quick.

## Deployment

The site is built and deployed to [GitHub pages](https://pages.github.com/) automatically with GitHub actions. The workflow is triggers on every push to master and in addition scheduled twice a week to keep the news section (fetched from twitter) up to date.

The twitter API credentials are kept as secrets on the GitHub repo.

To manage the DNS settings contact helpdesk support, and ask for ITS help, not EECS systems, as `mat.qmul.ac.uk` is not a subdomain of EECS.
