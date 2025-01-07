import { colors } from "./utils.js";

const GITHUB_API_URL = "https://api.github.com/users";

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log(`${colors.red}Please provide a GitHub username as an argument${colors.reset}`);
    process.exit(1);
}
const username = args[0];

async function fetchUserEvents(username) {
    const res = await fetch(`${GITHUB_API_URL}/${username}/events`);
    try {
        const res = await fetch(`${GITHUB_API_URL}/${username}/events`);
        if (res.status === 404) {
            console.log(`${colors.red}Not a valid GitHub username${colors.reset}`);
            console.log(`${colors.yellow}Please provide a valid GitHub username${colors.reset}`);
            process.exit(1);
        }
        return await res.json();
    } catch (error) {
        console.error(`${colors.red}Failed to fetch user events: ${error.message}${colors.reset}`);
        process.exit(1);
    }
}
function processUserEvents(events) {
    events.forEach(event => {
        if (event.type === "PushEvent") {
            console.log(`${colors.green}pushed ${event.payload.commits.length} commits at ${event.repo.name}${colors.reset}`);
        }
        else if (event.type === "CreateEvent" && event.payload.ref_type !== "repository") {
            console.log(`${colors.blue}created ${event.payload.ref_type} ${event.payload.ref} at ${event.repo.name}${colors.reset}`);
        }
        else if (event.type === "CreateEvent" && event.payload.ref_type === "repository") {
            console.log(`${colors.blue}created repository ${event.repo.name}${colors.reset}`);
        }
        else if (event.type === "DeleteEvent") {
            console.log(`${colors.red}deleted ${event.payload.ref_type} ${event.payload.ref} at ${event.repo.name}${colors.reset}`);
        }
        else if (event.type === "WatchEvent") {
            console.log(`${colors.cyan}starred ${event.repo.name}${colors.reset}`);
        }
        else {
            console.log(`${colors.yellow}${event.type}${colors.reset}`);
        }
    });
}

(async () => {
    const events = await fetchUserEvents(username);
    processUserEvents(events);
})();