import * as github from "@actions/github";
import { env } from "cloudflare:workers";

export default async function main() {
	const octokit = github.getOctokit((env as any).GITHUB_TOKEN);

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