// Initialize CodeMirror Editor with Java Mode and Syntax Highlighting
const editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
    lineNumbers: true,
    mode: "text/x-java", // Java mode for syntax highlighting
    theme: "default",
    indentUnit: 4, // Set the number of spaces for indentation
    matchBrackets: true, // Highlight matching brackets
    autoCloseBrackets: true, // Auto-close brackets like {}, (), []
    extraKeys: {
        "Enter": function(cm) {
            handleSmartIndent(cm); // Custom function for smart indentation
        }
    },
    autoCloseBrackets: {
        pairs: "()[]{}''\"\"", // Auto-close for all brackets and quotes
    }
});

// Function to handle smart indentation when pressing Enter
function handleSmartIndent(cm) {
    let cur = cm.getCursor(); // Get the current cursor position
    let line = cm.getLine(cur.line); // Get the content of the current line

    // Check if cursor is after an opening bracket and before a closing bracket
    if (isBetweenBrackets(line, cur.ch)) {
        cm.execCommand("newlineAndIndent"); // Default behavior if in between brackets
    } else if (line.trim().endsWith("{") || line.trim().endsWith("(") || line.trim().endsWith("[")) {
        // If the line ends with an opening bracket, insert a closing bracket on a new line
        let openingBracket = line.trim().slice(-1);
        let closingBracket = getClosingBracket(openingBracket); // Get the corresponding closing bracket

        cm.replaceSelection("\n    \n" + closingBracket, "end"); // Insert newline and closing bracket
        cur.line++; // Move cursor to the next line
        cm.setCursor({ line: cur.line, ch: 4 }); // Set cursor at the new indented position
    } else {
        cm.execCommand("newlineAndIndent"); // Default behavior for normal Enter presses
    }
}

// Function to get the corresponding closing bracket
function getClosingBracket(openingBracket) {
    switch (openingBracket) {
        case "{":
            return "}";
        case "(":
            return ")";
        case "[":
            return "]";
        default:
            return "";
    }
}

// Check if the cursor is between an opening and closing bracket
function isBetweenBrackets(line, ch) {
    // Check if character at ch-1 is an opening bracket and character at ch is a closing bracket
    const openingBrackets = "{([";
    const closingBrackets = "})]";
    
    return openingBrackets.includes(line[ch - 1]) && closingBrackets.includes(line[ch]);
}

// Add event listener for the "Run Code" button
document.getElementById('runCodeButton').addEventListener('click', function() {
    const code = editor.getValue(); // Get code from CodeMirror editor
    const outputElement = document.getElementById('output');

    if (code.trim() === "") {
        outputElement.textContent = "Please write some Java code to run.";
    } else {
        // Simulate code output for demo purposes
        outputElement.textContent = "Java code submitted:\n\n" + code;
    }
});
