# The Guardian — Independent Adversarial Testing

## Program status

**Status: Preparation only — no public runnable test package is available yet.**

This page describes the proposed independent testing program for **The Guardian**, a separate project from Guardian Lite.

The public repository hosting this document is the Guardian Lite public documentation repository. It is being used as a public information and coordination point only. It does not contain The Guardian's private implementation.

Do not interpret this page as an invitation to attack a live service or as confirmation that a test build is ready. Testing may begin only after the maintainer publishes a specific, reviewed test package and its exact scope.

## Objective

Invite independent developers and security-minded testers to examine whether The Guardian enforces authorization at the actual boundary before an AI agent can cause a consequential action.

The goal is to find and document weaknesses—not to collect endorsements or imply that the system is secure.

## What a future test package must provide

Before external testing opens, the maintainer must publish and verify:

- A versioned, isolated test build of The Guardian, or a clearly labelled harness that demonstrably exercises the actual Guardian enforcement code.
- A disposable mock protected service with synthetic data only.
- Explicit setup and teardown instructions.
- A precise list of in-scope test cases and prohibited actions.
- A way to capture relevant logs and evidence without exposing secrets.
- A reporting route and a tested cleanup procedure.

A mock-only demonstration must be labelled as a simulation. It must not be presented as independent testing of The Guardian's actual enforcement implementation.

## Intended test themes

Once a reviewed package is available, the test plan may cover:

- Unauthorized action requests.
- Attempts to reach the mock protected service outside the guarded path.
- Invalid, missing, expired, or manipulated test credentials.
- Prompt-injection attempts against the sample agent, to determine whether they can influence an action request or bypass the authorization boundary.
- Duplicate or replayed requests within the harness's defined limits.
- Timeout, interruption, and recovery behavior where the package explicitly supports those tests.

Each test must state its expected result, actual result, tested build, and limitations. A blocked test is evidence only for the exact path and conditions exercised.

## Rules of engagement

Until a versioned package and written scope are published:

- Do not attempt to access, scan, or attack any Guardian, Guardian Lite, maintainer, or third-party live system.
- Do not probe public IP addresses, hosted endpoints, GitHub infrastructure, or services discovered through the project.
- Do not use real payments, payouts, accounts, customer records, personal data, or production credentials.
- Do not attempt denial of service, destructive actions, persistence, lateral movement, credential theft, or data exfiltration.
- Do not publish suspected vulnerabilities, secrets, exploit details, or personal information in public issues or comments.
- Do not assume that a public documentation repository grants permission to test any other system.

Testing is limited to the exact local or isolated environment and actions expressly authorized in the future test package.

## How to participate

If you are interested, contact the maintainer through the private reporting route described in [SECURITY.md](../SECURITY.md). Include a short introduction, relevant testing experience, and the kind of tests you would like to perform.

The maintainer will provide further instructions only after the test package, boundaries, and reporting process are ready.

## Reporting and evidence

Use [REPORT_TEMPLATE.md](REPORT_TEMPLATE.md) for a proposed finding. Do not include secrets, tokens, personal data, or unredacted sensitive logs.

A finding is not confirmed merely because a tester reports it. The maintainer must reproduce and assess it before it is described as verified.

## Claims and limitations

This program does not claim that The Guardian is production-ready, independently audited, certified, or resistant to all attacks. Results will be reported narrowly and tied to the exact build, environment, and test conditions.

**The principle: invite people to challenge the system, while keeping the test boundary safe and explicit.**
