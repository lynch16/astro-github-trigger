import * as github from "@actions/github";
// https://github.com/modal-labs/libmodal/issues/118
import * as modal from "modal";

const owner = "lynch16";
const repo = 'astro-campaign-site';
const workflow_id = '.github/workflows/db-check.yml'

export default {
	async scheduled(controller: any, env: any, ctx: any){
		await fetch(
			`https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflow_id}/dispatches`,
			{
				method: "POST",
				body: JSON.stringify({ ref: "main" }),
				headers: {
					'X-GitHub-Api-Version': '2026-03-10',
					"Accept": "application/vnd.github+json",
					"Authorization": "Bearer " + env.GITHUB_TOKEN,
					"User-Agent": "lynch16"
				}
			}
		)
	}
}