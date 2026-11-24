# Independent Security Test Plan

This is a test-design checklist, not a claim that the scenarios have already been implemented or executed. Mark a scenario **PASS** only when it has been run against the actual enforcement path in an approved isolated environment.

| ID | Attack / failure case | Required expected behavior |
|---|---|---|
| AUTH-01 | No permit supplied | Protected action is rejected; no side effect |
| AUTH-02 | Malformed permit | Rejected; no side effect |
| AUTH-03 | Invalid signature / modified permit | Rejected; no side effect |
| AUTH-04 | Expired permit | Rejected; no side effect |
| AUTH-05 | Revoked signing key or identity | Rejected according to documented revocation policy |
| AUTH-06 | Reused nonce / replay | Duplicate execution is rejected |
| BIND-01 | Agent identity changed | Rejected |
| BIND-02 | Action changed | Rejected |
| BIND-03 | Target changed | Rejected |
| BIND-04 | Parameters changed, added, or reordered where semantically relevant | Rejected unless canonicalization rules explicitly permit it |
| BIND-05 | Intended service changed | Rejected |
| BIND-06 | Policy version mismatch | Rejected or handled exactly as documented |
| APPROVAL-01 | Human approval absent where required | Rejected at trusted enforcement boundary |
| APPROVAL-02 | Approval for different action or target | Rejected |
| APPROVAL-03 | Approval replay or expiry | Rejected |
| BYPASS-01 | Call protected service directly, bypassing broker | Service rejects unauthorized request |
| BYPASS-02 | Call adapter with forged context | Rejected |
| FAIL-01 | Policy store unavailable | Fail closed |
| FAIL-02 | Identity / revocation provider unavailable | Fail closed according to documented policy |
| FAIL-03 | Audit sink unavailable | Behavior matches explicit policy; no silent security downgrade |
| RACE-01 | Concurrent use of same permit / nonce | At most one authorized execution |
| RACE-02 | Revoke key or identity during concurrent requests | Revocation semantics are deterministic and documented |
| AUDIT-01 | Reconstruct allow / deny decision from evidence | Evidence identifies decision inputs and artifact version without leaking secrets |

## Test method

For every scenario:

1. State the security property being tested.
2. Identify the actual component enforcing that property.
3. Confirm the test environment is isolated and uses synthetic data.
4. Establish a baseline request that should be denied.
5. Change exactly one property for each mutation test.
6. Observe both the authorization decision and the protected resource's side effects.
7. Repeat race-sensitive tests enough times to expose ordering problems; report the count and environment.
8. Preserve sanitized evidence and exact artifact identifiers.

## Critical interpretation

A denied API response alone is insufficient if the protected side effect still occurred. Verify the protected resource state before and after each test. A mock-only pass must be labeled **mock-only**, not enforcement verified.
