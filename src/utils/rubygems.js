export async function fetchDownloadCount(gem, version) {
  if (!gem) {
    throw 'No gem specified';
  }
  if (!version) {
    throw 'No version specified';
  }
  console.error(`https://rubygems.org/api/v1/downloads/${gem}-${version}.json`);
  let response = await fetch(`https://crossorigin.me/https://rubygems.org/api/v1/downloads/${gem}-${version}.json`, {mode: 'no-cors'});
  let responseJSON = await response.json();
  return responseJSON;
}
