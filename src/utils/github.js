export async function fetchDownloadCount(owner, repo, releaseId) {
  if (!owner) {
    throw 'No owner specified';
  }
  if (!repo) {
    throw 'No repo specified';
  }
  let response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/${releaseId||'latest'}`);
  let responseJSON = await response.json();
  return responseJSON;
}
