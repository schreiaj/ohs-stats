export async function fetchDownloadCount() {
  if (!arguments.length === 0) {
    throw 'No packages specified';
  }
  let modules = [...arguments].join();
  let response = await fetch(`https://api.npmjs.org/downloads/point/last-year/${modules}`);
  let responseJSON = await response.json();
  return responseJSON;
}
