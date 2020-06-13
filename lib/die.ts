export default function die(message: string, status = 1) {
    console.error(`Fatal: ${message}`);
    process.exit(status);
}
