# GitHub User Activity CLI

This command-line application fetches and displays the recent activity of a specified GitHub user using the GitHub API.

## Features

- Accepts a GitHub username as a command-line argument.
- Fetches the recent activity of the specified GitHub user.
- Displays the fetched activity in the terminal.
- Handles errors gracefully, such as invalid usernames or API failures.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/github-user-activity.git
    ```

2. Navigate to the project directory:
    ```sh
    cd github-user-activity
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Run the CLI with a GitHub username as an argument:
    ```sh
    node src/commands.js <username>
    ```

    Example:
    ```sh
    node src/commands.js kamranahmedse
    ```

2. The CLI will fetch and display the recent activity of the specified GitHub user in the terminal.

## Example Output

```sh
Pushed 3 commits to kamranahmedse/developer-roadmap
Opened a new issue in kamranahmedse/developer-roadmap
Starred kamranahmedse/developer-roadmap
```

## Error Handling

- If no username is provided:
    ```sh
    Please provide a GitHub username as an argument
    ```

- If an invalid username is provided:
    ```sh
    Not a valid GitHub username
    Please provide a valid GitHub username
    ```

- If there is an API failure:
    ```sh
    Failed to fetch user events: <error message>
    ```
    
## Project Details

For more details about the project, visit the [GitHub User Activity Project](https://roadmap.sh/projects/github-user-activity).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
