
import {fetchDownloadCount} from './github';

it('It gets download counts from a repo', async () => {
  let downloads = await fetchDownloadCount('facebook','react');
  
})
