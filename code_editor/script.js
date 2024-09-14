// // Initialize CodeMirror Editor with Java Mode and Syntax Highlighting
// const editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
//     lineNumbers: true,
//     mode: "text/x-java", // Java mode for syntax highlighting
//     theme: "default",
//     indentUnit: 4,
//     matchBrackets: true, // Enable bracket matching
//     autoCloseBrackets: true, // Enable automatic bracket closing
//     tabSize: 4,
//     extraKeys: { 
//         "Ctrl-Space": "autocomplete" // Trigger autocomplete on Ctrl+Space
//     },
//     hintOptions: {
//         hint: CodeMirror.hint.java
//     }
// });

// // Add event listener for the "Run Code" button
// document.getElementById('runCodeButton').addEventListener('click', function() {
//     const code = editor.getValue(); // Get code from CodeMirror editor
//     const outputElement = document.getElementById('output');

//     if (code.trim() === "") {
//         outputElement.textContent = "Please write some Java code to run.";
//     } else {
//         // Simulate code output for demo purposes
//         outputElement.textContent = "Java code submitted:\n\n" + code;
//     }
// });
// Define a static list of Java keywords and common class names


//! suggestion with ctrl+space
// const javaKeywords = [
//     "abstract", "assert", "boolean", "break", "byte", "case", "catch",
//     "char", "class", "const", "continue", "default", "do", "double", 
//     "else", "enum", "extends", "final", "finally", "float", "for",
//     "goto", "if", "implements", "import", "instanceof", "int", "interface",
//     "long", "native", "new", "null", "package", "private", "protected", 
//     "public", "return", "short", "static", "strictfp", "super", "switch", 
//     "synchronized", "this", "throw", "throws", "transient", "try", "void",
//     "volatile", "while"
// ];

// // Add code completion functionality
// function getJavaHints(editor) {
//     const cursor = editor.getCursor();
//     const token = editor.getTokenAt(cursor);
//     const cursorLine = editor.getLine(cursor.line);

//     // Get possible completions
//     const completions = javaKeywords.filter(keyword => keyword.startsWith(token.string));

//     return {
//         list: completions,
//         from: CodeMirror.Pos(cursor.line, token.start),
//         to: CodeMirror.Pos(cursor.line, token.end)
//     };
// }

// // Initialize CodeMirror Editor with Java Mode and Syntax Highlighting
// const editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
//     lineNumbers: true,
//     mode: "text/x-java", // Java mode for syntax highlighting
//     theme: "default",
//     indentUnit: 4,
//     matchBrackets: true, // Enable bracket matching
//     autoCloseBrackets: true, // Enable automatic bracket closing
//     tabSize: 4,
//     extraKeys: { 
//         "Ctrl-Space": "autocomplete" // Trigger autocomplete on Ctrl+Space
//     },
//     hintOptions: {
//         hint: getJavaHints
//     }
// });

// // Add event listener for the "Run Code" button
// document.getElementById('runCodeButton').addEventListener('click', function() {
//     const code = editor.getValue(); // Get code from CodeMirror editor
//     const outputElement = document.getElementById('output');

//     if (code.trim() === "") {
//         outputElement.textContent = "Please write some Java code to run.";
//     } else {
//         // Simulate code output for demo purposes
//         outputElement.textContent = "Java code submitted:\n\n" + code;
//     }
// });

// ! note this is auto complete
// // Load Java keywords and common classes from a JSON file
// fetch('javaKeywords.json')
//     .then(response => response.json())
//     .then(data => {
//         const javaKeywords = data.keywords;
//         const commonClasses = data.commonClasses;

//         // Function to provide hints
//         function getJavaHints(editor) {
//             const cursor = editor.getCursor();
//             const token = editor.getTokenAt(cursor);
//             const cursorLine = editor.getLine(cursor.line);

//             // Combine keywords and common classes for suggestions
//             const completions = [
//                 ...javaKeywords,
//                 ...commonClasses
//             ].filter(item => item.startsWith(token.string));

//             return {
//                 list: completions,
//                 from: CodeMirror.Pos(cursor.line, token.start),
//                 to: CodeMirror.Pos(cursor.line, token.end)
//             };
//         }

//         // Initialize CodeMirror Editor with Java Mode and Syntax Highlighting
//         const editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
//             lineNumbers: true,
//             mode: "text/x-java", // Java mode for syntax highlighting
//             theme: "default",
//             indentUnit: 4,
//             matchBrackets: true, // Enable bracket matching
//             autoCloseBrackets: true, // Enable automatic bracket closing
//             tabSize: 4,
//             extraKeys: { 
//                 "Ctrl-Space": "autocomplete" // Trigger autocomplete on Ctrl+Space
//             },
//             hintOptions: {
//                 hint: getJavaHints
//             }
//         });

//         // Add event listener for the "Run Code" button
//         document.getElementById('runCodeButton').addEventListener('click', function() {
//             const code = editor.getValue(); // Get code from CodeMirror editor
//             const outputElement = document.getElementById('output');

//             if (code.trim() === "") {
//                 outputElement.textContent = "Please write some Java code to run.";
//             } else {
//                 // Simulate code output for demo purposes
//                 outputElement.textContent = "Java code submitted:\n\n" + code;
//             }
//         });
//     })
//     .catch(error => console.error('Error loading Java keywords:', error));

// ! that code give me drop box when i press ctrl+enter
// // Load Java keywords from the JSON file
// let javaKeywords = [];

// fetch('javaKeywords.json')
//     .then(response => response.json())
//     .then(data => {
//         javaKeywords = data.keywords;

//         // Function to provide hints
//         function getJavaHints(editor) {
//             const cursor = editor.getCursor();
//             const token = editor.getTokenAt(cursor);
//             const cursorLine = editor.getLine(cursor.line);

//             // Get possible completions based on the current input
//             const completions = javaKeywords.filter(keyword => keyword.startsWith(token.string));

//             return {
//                 list: completions,
//                 from: CodeMirror.Pos(cursor.line, token.start),
//                 to: CodeMirror.Pos(cursor.line, token.end)
//             };
//         }

//         // Initialize CodeMirror Editor with Java Mode and Syntax Highlighting
//         const editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
//             lineNumbers: true,
//             mode: "text/x-java", // Java mode for syntax highlighting
//             theme: "default",
//             indentUnit: 4,
//             matchBrackets: true, // Enable bracket matching
//             autoCloseBrackets: true, // Enable automatic bracket closing
//             tabSize: 4,
//             extraKeys: { 
//                 "Ctrl-Space": "autocomplete" // Trigger autocomplete on Ctrl+Space
//             },
//             hintOptions: {
//                 hint: getJavaHints // Use the custom hint function
//             }
//         });

//         // Add event listener for the "Run Code" button
//         document.getElementById('runCodeButton').addEventListener('click', function() {
//             const code = editor.getValue(); // Get code from CodeMirror editor
//             const outputElement = document.getElementById('output');

//             if (code.trim() === "") {
//                 outputElement.textContent = "Please write some Java code to run.";
//             } else {
//                 // Simulate code output for demo purposes
//                 outputElement.textContent = "Java code submitted:\n\n" + code;
//             }
//         });
//     })
//     .catch(error => console.error('Error loading Java keywords:', error));


// ! auto trigger drop box
// Load Java keywords from the JSON file
let javaKeywords = [];

fetch('javaKeywords.json')
    .then(response => response.json())
    .then(data => {
        javaKeywords = data.keywords;

        // Function to provide hints
        function getJavaHints(editor) {
            const cursor = editor.getCursor();
            const token = editor.getTokenAt(cursor);
            const cursorLine = editor.getLine(cursor.line);

            // Get possible completions based on the current input
            const completions = javaKeywords.filter(keyword => keyword.startsWith(token.string));

            return {
                list: completions,
                from: CodeMirror.Pos(cursor.line, token.start),
                to: CodeMirror.Pos(cursor.line, token.end)
            };
        }

        // Initialize CodeMirror Editor with Java Mode and Syntax Highlighting
        const editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
            lineNumbers: true,
            mode: "text/x-java", // Java mode for syntax highlighting
            theme: "default",
            indentUnit: 4,
            matchBrackets: true, // Enable bracket matching
            autoCloseBrackets: true, // Enable automatic bracket closing
            tabSize: 4,
            extraKeys: {
                // Remove the Ctrl-Space shortcut if we want to show suggestions automatically
                "Ctrl-Space": "autocomplete" 
            },
            hintOptions: {
                hint: getJavaHints // Use the custom hint function
            }
        });

        // Show autocomplete suggestions automatically
        function showHints(cm) {
            const cursor = cm.getCursor();
            const token = cm.getTokenAt(cursor);
            if (token.string.length > 0) {
                cm.showHint({ hint: getJavaHints });
            }
        }

        // Listen to typing events to trigger autocomplete
        editor.on('inputRead', function (cm) {
            showHints(cm);
        });

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
    })
    .catch(error => console.error('Error loading Java keywords:', error));


// ! note this for code editor
// Define custom styles for Java mode
CodeMirror.defineMode("custom-java", function(config, parserConfig) {
    var javaMode = CodeMirror.getMode(config, "text/x-java");

    return CodeMirror.overlayMode(javaMode, {
        token: function(stream, state) {
            if (stream.eatSpace()) return null;

            var ch = stream.next();
            if (ch === '.' || ch === ' ') {
                stream.skipToEnd();
                return null;
            }

            if (/[\[\]{}();,.]/.test(ch)) {
                return null;
            }

            // Example: highlight keywords, data types, functions
            if (stream.match(/^public|protected|private|static|final|void/, true)) {
                return "keyword";
            }
            if (stream.match(/^[a-zA-Z_]\w*/, true)) {
                if (stream.current() === "int" || stream.current() === "boolean" || stream.current() === "String") {
                    return "type"; // Data types
                }
                return "variable"; // Variables or functions
            }

            if (stream.match(/^System|Math|Collections|List/, true)) {
                return "function"; // Built-in functions or classes
            }

            stream.next();
            return null;
        }
    });
});


// ! that code can't complete auto but it suggest
// // Function to provide hints
// function getJavaHints(editor, options) {
//     const cursor = editor.getCursor();
//     const token = editor.getTokenAt(cursor);
//     const currentWord = token.string;

//     // Example: highlight keywords, data types, functions
//     const allSuggestions = [
//         ...javaKeywords,
//         ...commonClasses
//     ];

//     const suggestions = allSuggestions.filter(item => item.startsWith(currentWord));

//     return {
//         list: suggestions,
//         from: CodeMirror.Pos(cursor.line, token.start),
//         to: CodeMirror.Pos(cursor.line, token.end)
//     };
// }
window.addEventListener('resize', () => {
    editor.refresh(); // Refresh CodeMirror to recalculate its size
});