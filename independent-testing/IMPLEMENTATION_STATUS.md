# The Guardian — Implementation Status for Independent Review

**Snapshot date:** 2026-11-25 (updated after reviewing PR #162 and PR #164 CI evidence)  
**Program status:** Preparation only. Do not begin external technical testing yet.

This page records what can be established from the project repository and current implementation review. It is intentionally conservative: code existing on a branch is not the same as merged, tested, deployed, or independently verified behavior.

## Executive status

A private implementation branch for a hosted synthetic transfer executor exists. It is a meaningful step beyond a documentation-only proposal: it contains an HTTP executor, PostgreSQL migrations, a restricted database runtime role, signed-permit verification, approval-state checks, one-use permit claims, and a synthetic PHP-cent transfer transaction.

However, the implementation is still a review candidate. The available evidence does **not** establish a complete end-to-end Guardian control plane, a tested human-approval provisioning path, a verified PostgreSQL adversarial test suite, a deployed private service, or a public runnable tester package.

**Current conclusion: suitable for focused engineering review of the code and architecture; not yet suitable for an open hands-on security-testing invitation.**

## Evidence observed

The private hosted-executor PR is [#162](https://github.com/icamenlancegerard-glitch/the-guardian/pull/162), branch `feat/hosted-synthetic-executor`, based on `main`, at head `3e07c2fa11dadfe1079a1b5cf732a916d59ae918`. The PostgreSQL lab is [PR #164](https://github.com/icamenlancegerard-glitch/the-guardian/pull/164), stacked on the executor branch, at head `40f6b092cc4bbf176b7074a76604fd55e31ca0e8`. Both PRs remain open; #162 is draft and #164 is not merged.

The branch contains these implementation artifacts:

| Artifact | What is present | What is not established |
|---|---|---|
| `hosted_executor/server.py` | Private HTTP endpoint; control-plane token check; strict request shape; signed permit verification; issuer/key and executor-credential lookups; approval check; unique permit claim; synthetic account transaction | End-to-end integration with a real Guardian control plane; database-backed adversarial verification |
| `hosted_executor/migrate.py` | SQL migration runner and restricted `guardian_executor` role provisioning | A complete authenticated operational workflow for provisioning trust and approvals |
| `hosted_executor/entrypoint.py` | Removes migration-owner database URL before launching runtime process | Independent deployment verification |
| `migrations/hosted_executor/` | Trust, issuer authorization, executor credential, human approval, synthetic account, permit claim, and audit tables; synthetic seed accounts | Verified backup/restore, revocation, migration rollback, and production operations |
| `render.yaml` | Private service and managed PostgreSQL blueprint definitions | Created Render resources, approved spend, staging deployment, or remote HTTPS test results |
| `tests/test_hosted_executor_contract.py` | Focused parser/contract tests in the executor PR | Successful execution against the hosted runtime or deployed service |

The executor's intended first effect is a transfer between synthetic PHP-denominated test accounts. The code shown in this branch does not call a payment provider and must not be described as moving real money.

## Important gaps reviewers should examine

These are review questions and readiness gaps, not all confirmed vulnerabilities:

1. **Control-plane completeness:** The hosted-execution rollout document says the public control plane is not yet implemented. The executor endpoint is not a complete agent-to-approval-to-permit workflow.
2. **Human approval provenance:** The database schema contains approval records and the executor requires a matching, unexpired `APPROVED` record. The complete authenticated human-identity, approval-creation, rejection, revocation, and provisioning path is not demonstrated by this branch.
3. **Trust provisioning:** Signing keys, issuer authorizations, and executor credential versions are stored in PostgreSQL. A complete, authenticated, least-privilege workflow to provision and rotate these records is not yet demonstrated.
4. **Database enforcement tests:** **PR #164 now adds a disposable PostgreSQL integration lab** with a Docker Compose topology and tests for a valid synthetic transfer, altered parameters, expired permit, revoked signing key, replay, concurrent duplicate requests, HTTP authentication, malformed JSON, and runtime-role privilege checks. These tests are present in source but have not been demonstrated passing. The lab uses a pre-provisioned approval fixture; it does not prove the authenticated human-approval lifecycle.
5. **Permit verification coverage:** Add direct tests for invalid signature, unknown/revoked key, issuer-scope mismatch, expired and not-yet-valid permits, wrong audience, wrong executor version/fingerprint, altered transfer parameters, wrong tenant, and wrong approval binding.
6. **Concurrency and side effects:** Prove that two simultaneous requests using the same permit or approval cannot produce two ledger effects. Verify source/destination balances and audit rows before and after each test.
7. **Failure behavior:** Test database outage, lock timeout, process termination at transaction boundaries, lost response after commit, and retry behavior. Confirm no ambiguous result is silently reported as a safe retry.
8. **Operational security:** Review private-network reachability, caller-token rotation, secret handling, request timeouts/body limits, log redaction, database grants, backup/restore, and service teardown.

## CI and deployment evidence

CI evidence was checked against the current PR heads on 2026-11-25:

- **PR #162**, head `3e07c2fa11dadfe1079a1b5cf732a916d59ae918`: the `Guardian Tests` workflow run [#45451699448](https://github.com/icamenlancegerard-glitch/the-guardian/actions/runs/45451699448) completed with conclusion **failure**; all six reported jobs concluded failure.
- **PR #164**, head `40f6b092cc4bbf176b7074a76604fd55e31ca0e8`: the `Hosted Executor PostgreSQL Lab` workflow run [#45459820807](https://github.com/icamenlancegerard-glitch/the-guardian/actions/runs/45459820807) completed with conclusion **failure**; its single job failed. The `Guardian Tests` run [#45459820985](https://github.com/icamenlancegerard-glitch/the-guardian/actions/runs/45459820985) also completed with conclusion **failure**; all six reported jobs failed.

The available job-log retrieval did not return the logs, so the root cause of these failures is **unknown**. Do not assume they are quota failures or code failures without the logs. No successful exact-head CI result is established. Re-run and inspect these workflows after the failure cause is identified.

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

- [ ] Identify and fix the causes of the failed CI runs linked above; obtain successful checks for the exact PR heads or their reviewed successors.
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

An experienced reviewer may begin a **documentation and architecture/source-level discussion now**. A source-level review of The Guardian requires separately authorized access to its private repository. The public portal does not grant that access. Hands-on sandbox testing is not open yet.

Do not invite testers to probe live services, scan infrastructure, or assume the private executor is reachable. The next honest milestone is a reproducible, disposable local integration lab—not a public production endpoint.

## Reviewer invitation boundary

The project may invite experienced security engineers, including reviewers based in Silicon Valley, to inspect this public handoff and discuss the architecture and known gaps. The invitation must explicitly say that this is an **initial review discussion**, not an open bug bounty or permission to probe live infrastructure. No reviewer contact email or compensation offer is published because neither has been confirmed for this program.

**Evidence standard:** PLANNED is not IMPLEMENTED; IMPLEMENTED is not TESTED; TESTED is not DEPLOYED; DEPLOYED is not VERIFIED.
