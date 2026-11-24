# Independent Reviewer Rules of Engagement

## Authorization

Testing is authorized only against artifacts and environments explicitly supplied or approved by the project owner. This public documentation alone does not grant access to private systems or authorize testing against external services.

## Safe testing rules

- Use synthetic identities, synthetic data, and isolated test services only.
- Do not use real payment instruments, mailboxes, customer accounts, or production credentials.
- Do not test third-party infrastructure or other users.
- Do not attempt destructive denial-of-service or data-exfiltration tests.
- Do not publish exploit details that could affect users before coordinating disclosure.
- Stop immediately if a test reaches a real service, exposes real data, or behaves outside the approved sandbox.
- Preserve the exact commit, configuration, command, and output for every reproducible result.
- Separate observed behavior from assumptions and interpretation.

## Evidence expected

For each test, capture:

- Test ID and objective.
- Artifact repository and exact commit SHA / release identifier.
- Environment and dependency versions.
- Exact command or request.
- Expected result and observed result.
- Relevant sanitized logs and exit status.
- Whether the test used a mock, stub, emulator, or real isolated enforcement component.
- Reproduction steps and limitations.

Never include secrets, access tokens, private keys, personal data, or unredacted sensitive logs.

## Reporting and disclosure

Submit findings privately to the project owner before public disclosure. Include severity rationale, impact, preconditions, reproduction steps, and evidence. Do not assume a severity rating is accepted until it is triaged.

This document is not a bug-bounty offer, employment offer, or promise of payment. No compensation is offered unless a separate written program says otherwise.
