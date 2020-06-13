import die from "../lib/die";

import Version from "./version";
import Fetcher from "./fetcher";

const fetcherName = process.argv[2];
if (!fetcherName) die("No fetcher specified.");

const FetcherImpl = require(`./fetchers/up-${fetcherName}`);
const fetcher: Fetcher = new FetcherImpl();
console.log(fetcher);

(async () => { 
    const versions: Version = await fetcher.fetchLatest(null, []);
    console.log(versions);
})();
