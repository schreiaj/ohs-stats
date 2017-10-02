
import {fetchDownloadCount as npm} from './npm';

it('It gets download counts from a repo', async () => {
  let downloads = await npm('d3', 'react');
  console.error(downloads);

})
