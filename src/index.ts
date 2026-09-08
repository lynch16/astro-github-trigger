import * as github from "@actions/github";

export default {
	async scheduled(controller: any, env: any, ctx: any){
		const octokit = github.getOctokit(env.GITHUB_TOKEN);

		await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
			owner: 'lynch16',
			repo: 'astro-campaign-site',
			workflow_id: '.github/workflows/db-check.yml',
			ref: 'main',
			headers: {
				'X-GitHub-Api-Version': '2026-03-10'
			}
		})
	}
}