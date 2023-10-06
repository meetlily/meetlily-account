import ansiStyles from 'ansi-styles';
import { exec as execCallback, spawn } from 'child_process';
import { promisify } from 'util';
const exec = promisify(execCallback);
let stdoutData = '';
let stderrData = '';
function convertAnsiToText(input: string): string {
	console.log(ansiStyles);
	// Replace ANSI escape codes with an empty string
	return input.replace(/\x1B\[[0-?]*[ -/]*[@-~]/g, '');
}
const runAs = async (command: string, options: ExecOptions = {}): Promise<ExecResult> => {
	try {
		const { stdout, stderr } = await exec(command, options);
		const childProcess = spawn(command);
		// Listen for stdout data events
		childProcess.stdout.on('data', (data) => {
			stdoutData += data.toString();
			console.log('STDOUT:', stdoutData);
			console.log('STDERR:', stderrData);
		});

		// Listen for stderr data events
		childProcess.stderr.on('data', (data) => {
			stderrData += data.toString();
		});
		// Listen for the child process to exit
		childProcess.on('close', (code) => {
			if (code === 0) {
				// Command executed successfully
				console.log('STDOUT:', stdoutData);
				console.log('STDERR:', stderrData);

				// Format and process the output as needed
				const formattedOutput = stdoutData.split('\n').map((line) => {
					// You can apply formatting here, e.g., colorize, modify, etc.
					return `Formatted: ${line}`;
				});

				console.log(formattedOutput.join('\n'));
			} else {
				// Command failed
				console.error(`Command failed with code ${code}`);
				console.error('STDERR:', stderrData);
			}
		});
		// Convert and print the stdout as readable text
		const readableText = convertAnsiToText(stdout);
		return { success: true, stdout: readableText, stderr };
	} catch (error) {
		return { success: false };
	}
};
interface ExecOptions {
	cwd?: string;
	maxBuffer?: number;
	encoding?: 'buffer' | 'utf8';
}

interface ExecResult {
	success: boolean;
	error?: string;
	stdout?: string;
	stderr?: string;
}

export default runAs;

//curl -X POST -H "Content-Type: application/json" -d '{"command":"npx prisma generate"}' http://localhost:3000/api/cron
