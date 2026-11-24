# The Guardian — Independent Reviewer Brief

**Review stage:** Initial architecture and source-review discussion  
**Hands-on testing:** Not open  
**Public repository role:** Documentation and reviewer coordination only

## 1. The question

The Guardian explores an execution-enforcement boundary for AI-initiated consequential actions:

> Can an AI agent request an action without possessing the credentials or authority to execute it, while the protected execution component independently verifies authorization and rejects altered, expired, revoked, replayed, or out-of-scope requests?

The intended principle is:

**AI can request. Guardian verifies. The protected system enforces.**

This is a security design objective, not a claim that every integration path or production environment has already been proven secure.

## 2. What exists today

A private implementation slice is under review. It focuses on a deliberately narrow synthetic action: moving PHP-denominated cents between isolated test accounts.

The reviewed code path is intended to include:
- verification of a signed UniversalActionPermit;
- issuer/key and executor-credential checks;
- exact action/target/parameter binding;
- a matching, unexpired approval record;
- one-use permit claiming and a database transaction;
- restricted PostgreSQL runtime permissions; and
- synthetic account and audit records.

The implementation and its test lab are in private, unmerged pull requests. The public repository does not contain the private implementation or grant access to it.

## 3. What has not been demonstrated

The following must not be assumed:
- a complete agent-to-policy-to-human-approval-to-permit control plane;
- an authenticated human-approval provisioning and revocation lifecycle;
- successful PostgreSQL adversarial integration tests;
- successful CI for the current private pull-request heads;
- a deployed or remotely reachable executor;
- end-to-end protection of real email, payment, or account providers;
- production readiness, independent certification, or a guarantee against bypass.

The current PostgreSQL lab source includes scenarios for valid synthetic transfer, parameter tampering, expiry, revoked signing key, replay, concurrent duplicate requests, HTTP authentication, malformed JSON, and database-role privileges. These tests are **implemented in a draft test PR but not verified as passing**.

The latest inspected CI runs for the private test-lab and full test workflows concluded **failure**. The available job-log retrieval did not expose the failure details, so the root cause remains undetermined. See [implementation status and evidence](IMPLEMENTATION_STATUS.md).

## 4. What we want an independent reviewer to challenge

Please prioritize adversarial questions over general endorsement:

1. **Authority separation:** Can the agent, caller, or executor gain authority by changing identity, service, target, action, or parameters?
2. **Permit binding:** Are all security-relevant fields cryptographically bound and independently checked at the point of execution?
3. **Human approval:** Is approval authentic, attributable, action-specific, time-bounded, non-replayable, and enforced by the trusted boundary—not merely represented by a database row?
4. **Database boundary:** Can the runtime role modify trust, revocation, approval provenance, permit claims, or audit history beyond its intended permissions?
5. **Concurrency and recovery:** Can retries, concurrent requests, process termination, lost responses, or revocation races create duplicate or ambiguous effects?
6. **Protected-service bypass:** Is there any route to the protected resource that avoids the authorization check?
7. **Evidence quality:** Which claims are supported by actual execution evidence, and which remain design assumptions or untested code?

A useful review may conclude that the current design is incomplete or that a claimed property does not hold. Critical findings are welcome; endorsement is not the objective.

## 5. Requested first engagement

The immediate request is a bounded **architecture and source-level critique**, not a penetration test:

- Review the stated trust boundaries and permit model.
- Identify the three most consequential design or implementation risks.
- Point out any missing negative tests or unsafe assumptions.
- Recommend the smallest next experiment that would materially increase confidence.

Private source access, if needed, must be granted separately and explicitly by the project owner. No access is implied by this public brief.

## 6. Safety and authorization

Until a versioned, reproducible sandbox release is explicitly announced:
- do not probe or scan live infrastructure;
- do not send real emails, payments, or account changes;
- do not test third-party systems;
- do not assume the private executor is deployed or reachable;
- use only artifacts and environments separately supplied and authorized by the owner.

This is not a bug-bounty offer, paid engagement, employment offer, or promise of compensation. Any future testing authorization must be written, bounded, and tied to a specific artifact and environment.

## 7. Review materials

- [Implementation status and current evidence](IMPLEMENTATION_STATUS.md)
- [Scope and trust boundaries](SCOPE.md)
- [Rules of engagement](RULES_OF_ENGAGEMENT.md)
- [Adversarial test plan](TEST_PLAN.md)
- [Finding report template](FINDING_TEMPLATE.md)
- [Readiness and evidence register](READINESS.md)

## 8. Project separation

The Guardian is separate from Guardian Lite. This public repository is a documentation and coordination portal; it is not the private Guardian implementation. The root-level Guardian Lite architecture and threat-model documents must not be treated as evidence about The Guardian.

---

**Evidence discipline:** PLANNED is not IMPLEMENTED; IMPLEMENTED is not TESTED; TESTED is not DEPLOYED; DEPLOYED is not VERIFIED.
