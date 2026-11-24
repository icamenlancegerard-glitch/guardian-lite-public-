# The Guardian — Implementation Status for Independent Review

**Snapshot date:** 2026-11-25  
**Program status:** Preparation only. Do not begin external technical testing yet.

This page records what can be established from the project repository and current implementation review. It is intentionally conservative: code existing on a branch is not the same as merged, tested, deployed, or independently verified behavior.

## Executive status

A private implementation branch for a hosted synthetic transfer executor exists. It is a meaningful step beyond a documentation-only proposal: it contains an HTTP executor, PostgreSQL migrations, a restricted database runtime role, signed-permit verification, approval-state checks, one-use permit claims, and a synthetic PHP-cent transfer transaction.

However, the implementation is still a review candidate. The available evidence does **not** establish a complete end-to-end Guardian control plane, a tested human-approval provisioning path, a verified PostgreSQL adversarial test suite, a deployed private service, or a public runnable tester package.

**Current conclusion: suitable for focused engineering review of the code and architecture; not yet suitable for an open hands-on security-testing invitation.**

## Evidence observed

The private hosted-executor working branch is named `feat/hosted-synthetic-executor`. A comparison against `main` showed 29 commits ahead and no commits behind at the time of this snapshot.

The branch contains these implementation artifacts:

| Artifact | What is present | What is not established |
|---|---|---|
| `hosted_executor/server.py` | Private HTTP endpoint; control-plane token check; strict request shape; signed permit verification; issuer/key and executor-credential lookups; approval check; unique permit claim; synthetic account transaction | End-to-end integration with a real Guardian control plane; database-backed adversarial verification |
| `hosted_executor/migrate.py` | SQL migration runner and restricted `guardian_executor` role provisioning | A complete authenticated operational workflow for provisioning trust and approvals |
| `hosted_executor/entrypoint.py` | Removes migration-owner database URL before launching runtime process | Independent deployment verification |
| `migrations/hosted_executor/` | Trust, issuer authorization, executor credential, human approval, synthetic account, permit claim, and audit tables; synthetic seed accounts | Verified backup/restore, revocation, migration rollback, and production operations |
| `render.yaml` | Private service and managed PostgreSQL blueprint definitions | Created Render resources, approved spend, staging deployment, or remote HTTPS test results |
| `tests/test_hosted_executor_contract.py` | Nine focused parser/contract-level test methods | PostgreSQL integration, concurrent claim, approval race, rollback, revocation race, or real protected-service tests |

The executor's intended first effect is a transfer between synthetic PHP-denominated test accounts. The code shown in this branch does not call a payment provider and must not be described as moving real money.

## Important gaps reviewers should examine

These are review questions and readiness gaps, not all confirmed vulnerabilities:

1. **Control-plane completeness:** The hosted-execution rollout document says the public control plane is not yet implemented. The executor endpoint is not a complete agent-to-approval-to-permit workflow.
2. **Human approval provenance:** The database schema contains approval records and the executor requires a matching, unexpired `APPROVED` record. The complete authenticated human-identity, approval-creation, rejection, revocation, and provisioning path is not demonstrated by this branch.
3. **Trust provisioning:** Signing keys, issuer authorizations, and executor credential versions are stored in PostgreSQL. A complete, authenticated, least-privilege workflow to provision and rotate these records is not yet demonstrated.
4. **Database enforcement tests:** The nine current focused tests are not end-to-end PostgreSQL tests. The critical transaction, lock, permission, replay, race, rollback, and failure semantics need disposable-PostgreSQL integration tests.
5. **Permit verification coverage:** Add direct tests for invalid signature, unknown/revoked key, issuer-scope mismatch, expired and not-yet-valid permits, wrong audience, wrong executor version/fingerprint, altered transfer parameters, wrong tenant, and wrong approval binding.
6. **Concurrency and side effects:** Prove that two simultaneous requests using the same permit or approval cannot produce two ledger effects. Verify source/destination balances and audit rows before and after each test.
7. **Failure behavior:** Test database outage, lock timeout, process termination at transaction boundaries, lost response after commit, and retry behavior. Confirm no ambiguous result is silently reported as a safe retry.
8. **Operational security:** Review private-network reachability, caller-token rotation, secret handling, request timeouts/body limits, log redaction, database grants, backup/restore, and service teardown.

## CI and deployment evidence

The hosted-executor branch adds compile/lint steps and includes its focused test file in the repository test workflow. The project status available for this snapshot says CI capacity was unavailable for the hosted-executor PR; no successful run for the exact hosted-executor head is established here.

The Render blueprint specifies a private service and managed PostgreSQL resource. The project rollout gate says no Guardian-specific Render service or database had been created and that cost approval is required before paid resources are provisioned.

Therefore:

- Do not say the hosted executor is CI-green.
- Do not say the service is deployed or reachable.
- Do not say the PostgreSQL transaction design has passed adversarial testing.
- Do not say human approval is end-to-end operational.
- Do not claim production readiness or independent certification.

## Operator UI status

A separate operator-console scaffold exists as a review candidate. Its own description says it is disconnected from the backend and exposes no live approval or execution controls. It is a visual shell, not evidence of an operational control plane.

## Minimum release gate before external hands-on testing

- [ ] Hosted executor changes reviewed and merged only after required checks pass.
- [ ] Public control plane and authenticated human approval lifecycle implemented, or explicitly excluded from the test scope.
- [ ] Disposable PostgreSQL integration environment reproducible from a clean checkout.
- [ ] Valid signed permit path demonstrated end to end.
- [ ] Missing, forged, altered, expired, revoked, wrong-scope, and replayed permits all rejected.
- [ ] Direct executor calls without the correct caller authentication rejected.
- [ ] Concurrent duplicate attempts prove exactly one synthetic ledger effect.
- [ ] Database outage and crash/rollback tests prove no unauthorized or duplicate effect.
- [ ] Before/after account state and audit evidence captured for every test.
- [ ] Setup, teardown, reset, and cleanup independently reproduced.
- [ ] Exact commit SHA, dependency versions, commands, test output, and known limitations published.
- [ ] A monitored private vulnerability-reporting route confirmed.
- [ ] Project owner explicitly opens the test program with a bounded written scope.

## Reviewer guidance

An experienced reviewer can already inspect the public architecture, threat model, test plan, and stated implementation boundaries. A reviewer with separately authorized access to the private code may conduct a source-level review under the agreed scope.

Do not invite testers to probe live services, scan infrastructure, or assume the private executor is reachable. The next honest milestone is a reproducible, disposable local integration lab—not a public production endpoint.

**Evidence standard:** PLANNED is not IMPLEMENTED; IMPLEMENTED is not TESTED; TESTED is not DEPLOYED; DEPLOYED is not VERIFIED.
