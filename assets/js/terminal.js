document.addEventListener("DOMContentLoaded", function() {
    const terminalInput = document.getElementById("terminal-input");
    const terminalOutput = document.getElementById("terminal-output");

    if (!terminalInput || !terminalOutput) return;

    const commands = {
        'help': 'Available commands: help, whoami, skills, clear',
        'whoami': 'Sthitaprajna Biswal - Cybersecurity Engineer | VAPT Specialist',
        'skills': 'AppSec, Cloud Security, Red Teaming, DevSecOps, Wazuh SIEM, Python, Bash',
        'clear': ''
    };

    terminalInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const inputVal = terminalInput.value.trim();
            terminalInput.value = '';

            if (inputVal === '') return;

            const newOutput = document.createElement("div");
            newOutput.className = "terminal-line";
            newOutput.innerHTML = `<span class="prompt">visitor@sthitabiswal:~$</span> ${inputVal}`;
            terminalOutput.appendChild(newOutput);

            if (inputVal === 'clear') {
                terminalOutput.innerHTML = '';
            } else {
                const response = commands[inputVal.toLowerCase()] || `Command not found: ${inputVal}. Type 'help' for available commands.`;
                const responseDiv = document.createElement("div");
                responseDiv.className = "terminal-response";
                responseDiv.textContent = response;
                terminalOutput.appendChild(responseDiv);
            }

            // Scroll to bottom
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    });

    // Focus terminal input when clicking inside the terminal
    const terminalWrapper = document.getElementById("terminal");
    if (terminalWrapper) {
        terminalWrapper.addEventListener("click", function() {
            terminalInput.focus();
        });
    }
});
