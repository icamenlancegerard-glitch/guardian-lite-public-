# Independent Security Review

**Status: Preparation / documentation handoff. This is not an announcement that a runnable test release exists.**

This directory is the reviewer-facing entry point for independent security engineers evaluating the Guardian project. The public repository is a documentation and coordination portal. It is not the Guardian enforcement implementation.

## What reviewers should do first

1. Read [scope and boundaries](SCOPE.md).
2. Read the project's [threat model](../THREAT_MODEL.md) and [architecture](../ARCHITECTURE.md).
3. Read [reviewer rules](RULES_OF_ENGAGEMENT.md).
4. Use the [review plan](TEST_PLAN.md) to structure analysis.
5. Record findings with [the report template](FINDING_TEMPLATE.md).
6. Check [evidence and readiness](READINESS.md) before claiming a test has been reproduced.

## Important boundary

Do not infer security from documentation, diagrams, passing unit tests, or a demo UI. A security claim is supported only by inspectable implementation, reproducible test steps, and evidence tied to an exact commit or release.

At the time this package was prepared, this public portal does **not** provide a verified, self-contained, runnable sandbox release of the private Guardian implementation. Do not claim that Docker setup, adversarial scenarios, CI results, or protected-service enforcement are available here unless a future version explicitly links the artifacts and records verification evidence.

## Project question

The core question for review is:

> Can an AI agent request an action without gaining the authority or credentials to execute that action, and can the protected system independently reject every request that lacks a valid, correctly scoped, unexpired authorization?

Reviewers are encouraged to challenge this claim, identify bypasses, and report both design flaws and implementation gaps.

## Repository separation

- This repository: public documentation and reviewer coordination only.
- The Guardian implementation: maintained separately in a private repository.
- Guardian Lite: a separate project and must not be treated as having the same implementation or security guarantees.

Never publish private source, credentials, customer data, personal data, or internal infrastructure details in this public repository.
