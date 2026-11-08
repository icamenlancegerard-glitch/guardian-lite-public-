# Design Partners

## Help test the boundary before an AI agent acts

Guardian Lite is an early-stage project exploring authorization and enforcement for consequential actions initiated by AI agents.

We are looking to speak with a small number of AI-agent builders and technical teams who want to examine a practical security question:

**Can an agent request an action, receive an authorization decision, and still reach the protected service through another path?**

This is a request for technical feedback and scoped evaluation partners—not a request to trust or deploy an unproven security product.

## Who may be a good fit

We are especially interested in builders working with agents or tool servers that can:

- Send or reply to email.
- Create, update, or delete records.
- Call business APIs or trigger workflows.
- Change files, infrastructure, or account settings.
- Initiate payments or other consequential operations in a sandbox.

You do not need to use a particular framework. MCP, agent SDKs, workflow engines, and custom tool integrations are all relevant.

## What collaboration could look like

A first conversation can be limited to one real use case and its execution path:

1. Describe the agent action and the protected service.
2. Map which component holds the service credential and which component can reach the service.
3. Identify direct routes, alternate tools, retries, and other possible bypass paths.
4. Agree on a narrow, non-production test with synthetic data.
5. Review what the test actually demonstrates and what remains unknown.

No production access is requested. Do not share credentials, customer data, private logs, or sensitive architecture details in a public issue.

## What we can offer

- A focused discussion about authorization and enforcement boundaries.
- A chance to help shape the requirements and test cases.
- Transparent documentation of what has and has not been demonstrated.
- A possible future controlled evaluation, only if the scope and safety conditions are agreed.

This is an exploratory collaboration. There is no promise of a finished integration, production deployment, payment, certification, or specific security outcome.

## Current project boundaries

- Guardian Lite is early-stage and is not presented as production-ready.
- The public repository contains documentation and reviewed high-level evidence summaries only.
- M0 is frozen after a limited set of controlled runtime checks.
- M1-A is scoped to credential-exposure evidence collection; it is evidence-only.
- The implementation and detailed internal test materials are not part of this public repository.

Please read the [architecture](ARCHITECTURE.md), [threat model](THREAT_MODEL.md), and [evidence status](EVIDENCE.md) before proposing an evaluation.

## How to express interest

Open a GitHub issue in this repository with the title **Design partner interest** and include only non-sensitive information:

- What kind of AI agent or tool integration are you building?
- What consequential action can it perform?
- What protected service does it interact with?
- Is there a sandbox or test environment available?
- What is the main authorization or enforcement question you want to investigate?

Do not include secrets, live credentials, personal data, customer data, or exploit details in the issue. A maintainer can suggest a private follow-up route when appropriate.

[Open a new GitHub issue](https://github.com/icamenlancegerard-glitch/guardian-lite-public-/issues/new?title=Design%20partner%20interest).

## Guiding principle

**Security begins with honest boundaries.**

The goal of a design-partner conversation is not to validate a slogan. It is to discover whether the enforcement boundary works for a real, narrowly defined integration—and to document where it does not.
