# Roadmap

The roadmap is evidence-first. A phase is not considered complete merely because a design has been written or code has been proposed.

## M0 — initial runtime boundary

**Status: Frozen after initial controlled-runtime evidence collection.**

M0 established a narrow set of local checks covering a denied request, a configured direct-access attempt, rejection of an invalid service credential, and acceptance of an explicitly approved request.

See [Evidence status](EVIDENCE.md). These checks do not establish production readiness or universal bypass resistance.

## M1-A — credential-exposure evidence

**Status: Evidence-only scope.**

Focus: investigate whether protected credentials can become available outside their intended trust boundary.

Constraints:
- Collect and review attack evidence.
- Do not make implementation changes under this phase.
- Record the tested conditions and limitations.
- Do not turn an untested hypothesis into a security claim.

## Later work — not yet committed

Possible future evaluation areas include:

- **Action-intent binding:** test whether approval remains tied to the exact target, material parameters, and executor.
- **Replay and duplicate-action handling:** test repeated requests, retries, and concurrent submissions at the protected-service boundary.
- **Interrupted execution and recovery:** define what happens when the outcome of an external operation is delayed or unknown; do not assume that a timeout means the operation did not happen.
- **Human approval:** evaluate explicit approval, rejection, expiry, and revocation for selected high-impact actions.
- **Integration-specific attack tests:** examine credentials, alternate execution paths, and least-privilege boundaries.
- **Independent technical review:** seek a clearly scoped review that states its method and limitations.
- **Design-partner evaluation:** run a bounded, non-production assessment with synthetic data.

These are research and planning topics, not implemented features, approved milestones, completed tests, or guarantees. Any pilot would require a defined test environment, explicit action scope, safe test data, and agreement on what the evidence can and cannot demonstrate.

## Release discipline

A public status update should distinguish:

- **Planned:** intended but not yet implemented or tested.
- **Implemented:** present in a specific revision.
- **Tested:** exercised under stated conditions with a recorded result.
- **Deployed:** running in a named environment.
- **Verified:** independently or reproducibly confirmed within a defined scope.

No broader status should be inferred from a narrower test result.
