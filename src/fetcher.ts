import Version from "./version";

export default interface Fetcher {
    fetchLatest(currentVersion: string, args: string[]): Promise<Version>;
    fetchNext?(currentVersion: string, args: string[]): Promise<Version>;
    fetchNewer?(currentVersion: string, args: string[]): Promise<Version[]>;
    fetchAll?(currentVersion: string, args: string[]): Promise<Version[]>;
}
