# Demo Outline

## Purpose

The demo is intended to show the difference between an authorization decision and enforcement at the protected-service boundary.

This public repository is documentation-only. It does not include a runnable Guardian Lite implementation or a public deployment.

## Intended demonstration sequence

1. Submit a request that is not authorized.
2. Observe an explicit `DENY` decision.
3. Attempt the configured direct path to the protected service and observe that the test boundary blocks it.
4. Submit a request with an invalid service credential and observe rejection by the protected test service.
5. Submit an explicitly approved request through the configured guarded path and observe acceptance.

These steps summarize the categories exercised during M0. They are not instructions for reproducing the private test environment.

## Safe demonstration conditions

A future demonstration should use:
- A disposable local or isolated test environment.
- Test credentials and non-sensitive test data.
- A non-production protected service.
- A clearly defined set of permitted actions.
- Retained records of both successful and denied attempts.

Never use real payment, payout, customer, or production data in an unapproved demonstration.

## Limitations

A successful demo proves only what was exercised in that environment. It does not prove that all integration paths are guarded, that logs are tamper-proof, or that the system is production-ready.
