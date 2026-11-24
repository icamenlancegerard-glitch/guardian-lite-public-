# Review Scope and System Boundaries

## In scope

Review the authorization boundary and its stated design properties:

- Default-deny / fail-closed behavior.
- Separation between an AI agent's request and execution authority.
- Binding of an authorization to the intended agent, action, target, parameters, service, policy version, expiry, and nonce where applicable.
- Human approval requirements and whether approval is enforced at the trusted boundary.
- Permit authenticity, integrity, expiry, revocation, and replay resistance.
- Identity authentication and revocation behavior.
- Database transaction and concurrency behavior.
- Protected-service enforcement: whether the service itself rejects unauthorized or altered requests.
- Audit evidence: whether events are attributable, tamper-evident where claimed, and sufficient to reconstruct a decision.
- Failure behavior when dependencies, keys, policy stores, identity providers, or audit sinks are unavailable.

## Out of scope unless separately authorized

- Testing third-party systems, public infrastructure, or any production account.
- Sending real emails, making payments, changing real user accounts, or modifying production databases.
- Denial-of-service, destructive fuzzing, credential attacks, or social engineering against people.
- Accessing private repositories or systems without explicit access granted by the owner.
- Treating a mock, stub, simulator, or UI-only demonstration as proof of production enforcement.

## Assets and trust boundaries to identify

Reviewers should map:

1. Agent / model runtime.
2. Authorization request interface.
3. Policy decision point.
4. Human approval channel, if required.
5. Permit issuer and signing keys.
6. Identity provider and revocation source.
7. Authorization database / nonce store.
8. Execution broker or adapter.
9. Protected service and its credential boundary.
10. Audit and evidence pipeline.

For each boundary, identify who can call it, what credentials they hold, what data is trusted, and what happens on failure.

## Required distinction

A policy decision that says "allow" is not proof that execution is safe. The protected resource must validate the authorization and enforce the intended constraints at the point of action. If that enforcement is absent or unverified, record it as a limitation rather than assuming it exists.
