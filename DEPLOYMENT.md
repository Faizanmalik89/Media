# Deploying MediaHub to GitHub Pages

This guide will walk you through the steps to deploy the MediaHub static website to GitHub Pages.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "mediahub" or any name you prefer)
4. Make it public (GitHub Pages requires public repositories unless you have a paid GitHub account)
5. Skip adding any files like README, .gitignore, or license as we'll push our existing files
6. Click "Create repository"

## Step 2: Initialize Git and Push Your Files

Once your repository is created, you need to push your files to GitHub. Run these commands in your terminal from your project directory:

```bash
# Initialize a Git repository in your project folder
git init

# Add all files to Git
git add .

# Commit the files
git commit -m "Initial commit"

# Add your GitHub repository as the remote origin
git remote add origin https://github.com/YourUsername/YourRepositoryName.git

# Push the files to GitHub
git push -u origin main
```

Note: Replace `YourUsername` and `YourRepositoryName` with your actual GitHub username and the name of the repository you created.

## Step 3: Set Up GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (tab at the top of the repository)
3. Scroll down to the "GitHub Pages" section
4. For the source, select "main" branch
5. Click "Save"

GitHub will then provide you with a URL where your site is published (e.g., `https://yourusername.github.io/repositoryname/`).

## Step 4: Verify Your Deployment

1. Wait a few minutes for GitHub to build and deploy your site
2. Visit the URL provided by GitHub Pages
3. Check that all pages and features work correctly

## Troubleshooting

If your site doesn't appear or some assets don't load:

1. **Path Issues**: Make sure all file paths in your HTML, CSS, and JavaScript files are correct. In GitHub Pages, if your repository name is used in the URL, you might need to adjust paths accordingly.

2. **Case Sensitivity**: GitHub Pages is hosted on Linux servers which are case-sensitive. Ensure the case of your filenames matches exactly what's referenced in your code.

3. **Browser Cache**: Try clearing your browser cache if you've recently updated files but don't see changes.

4. **URL Structure**: If you're using a custom domain or have the site in a subdirectory, double-check your URL paths.

## Maintaining Your Site

To update your site after making changes:

```bash
# Add all changed files
git add .

# Commit the changes
git commit -m "Describe your changes here"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy your site with the new changes.

## Using a Custom Domain (Optional)

1. Purchase a domain from a domain registrar
2. In your repository's "Settings" > "GitHub Pages", enter your custom domain
3. Update your domain's DNS settings according to GitHub's instructions
4. Wait for DNS propagation (can take up to 48 hours)

For detailed instructions, refer to [GitHub's documentation on custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).