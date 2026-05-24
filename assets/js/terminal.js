document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');
    const prompt = '<span class="prompt">guest@sthitaprajna:~$</span> ';

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            input.value = '';

            let response = '';
            switch (command) {
                case 'whoami':
                    response = 'Sthitaprajna Biswal - Cloud Security Expert | Application VAPT Specialist | AppSec Professional | Red Team Practitioner';
                    break;
                case 'skills':
                    response = 'Burp Suite Pro, Nessus, Postman, OWASP ZAP, Nmap, SQLMap, Nuclei, Ffuf, Metasploit, GCP SCC, AWS Security Hub, Kubernetes (GKE), Docker, Wazuh, Python 3.x, Bash, Google Apps Script';
                    break;
                case 'help':
                    response = 'Available commands: whoami, skills, help, clear';
                    break;
                case 'clear':
                    output.innerHTML = '';
                    return; // exit early to not append empty response
                case '':
                    break; // Just enter pressed
                default:
                    response = `Command not found: ${command}. Type 'help' for available commands.`;
            }

            const commandLine = `<div>${prompt}${command}</div>`;
            const responseLine = response ? `<div>${response}</div>` : '';

            output.innerHTML += commandLine + responseLine;
            output.scrollTop = output.scrollHeight; // auto-scroll
        }
    });
});
