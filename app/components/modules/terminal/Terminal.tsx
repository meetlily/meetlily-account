'use client';
import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const TerminalComponent: React.FC = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const terminalRef = useRef<Terminal | null>(null);

	useEffect(() => {
		const term = new Terminal();
		terminalRef.current = term;

		if (containerRef.current) {
			term.open(containerRef.current);
			term.writeln('Welcome to interactive terminal!');
			term.writeln('Enter some  to execute it.');
		}

		term.onKey(({ key, domEvent }) => {
			const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;

			if (key === 'Enter') {
				try {
					// Get the command from the terminal's buffer
					const line = term.buffer.active.getLine(term.buffer.active.cursorY - 1);
					if (line) {
						const command = line.translateToString(true);
						// Execute the command and print the result
						const result = eval(command);
						term.writeln(result.toString());
					}
				} catch (error) {
					term.writeln(`Error: ${error}`);
				}
			} else if (key === 'Backspace') {
				// Do not delete the prompt
				if (term.buffer.active.cursorX > 2) {
					term.write('\b \b');
				}
			} else if (printable) {
				term.write(key);
			}
		});

		return () => {
			// Dispose the terminal when the component unmounts
			term.dispose();
		};
	}, []);

	return <div ref={containerRef} />;
};

export default TerminalComponent;
