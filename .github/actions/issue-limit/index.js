const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('GITHUB_TOKEN');
    const octokit = github.getOctokit(token);
    const { owner, repo } = github.context.repo;
    const creator = github.context.payload.issue.user.login;

    const { data: issues } = await octokit.rest.issues.listForRepo({
      owner,
      repo,
      state: 'open',
      creator
    });

    if (issues.length >= 4) {
      const issueNumber = github.context.payload.issue.number;
      await octokit.rest.issues.update({
        owner,
        repo,
        issue_number: issueNumber,
        state: 'closed'
      });
      core.setFailed(`User ${creator} has exceeded the limit of 4 open issues.`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
