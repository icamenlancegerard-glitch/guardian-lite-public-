# Threat Model

## Scope

Guardian Lite is intended to explore authorization and enforcement for actions initiated by AI agents and directed at protected services.

This is an early-stage, bounded threat model. It is not a claim that the listed threats have all been tested or mitigated.

## Assets to protect

- Protected-service operations and data.
- Service credentials and other secrets.
- Authorization policy and decision integrity.
- Audit records needed to reconstruct decisions.
- Availability and correct behavior of the guarded execution path.

## Trust assumptions

- AI-agent output is untrusted input.
- A request from an agent is not authorization by itself.
- The protected service remains responsible for its own authentication and authorization.
- Enforcement is effective only when all relevant execution paths are covered.
- A decision record is only as reliable as the mechanism that creates and preserves it.

## Threats considered

| Threat | Why it matters | Current evidence status |
|---|---|---|
| Unauthorized action request | An agent may request an action without permission | A controlled M0 denial check was recorded |
| Direct path around the guard | An agent may try to reach the service without using the authorization boundary | A configured M0 direct-access attempt was blocked; this is not proof against every alternate path |
| Invalid service credential | An invalid credential should not be accepted by the protected service | A controlled M0 rejection was recorded |
| Credential exposure | A credential available to an agent could enable bypass or misuse | M1-A evidence work is limited to this area; no general mitigation claim is made |
| Action or target substitution | An approved request could be altered before execution, changing its target or material parameters | Not established by the current public M0 evidence |
| Executor substitution | A request could be handed to a different executor or tool than the one evaluated | Not established by the current public M0 evidence |
| Replay or duplicate action | A previously accepted request could be repeated or retried, causing an unintended second operation | Not established by the current public M0 evidence |
| Concurrent requests or race conditions | State may change between authorization and execution | Not established by the current public M0 evidence |
| Interrupted or ambiguous external outcome | A timeout or crash may leave it unknown whether the protected operation occurred | Not established by the current public M0 evidence |
| Human-approval bypass | A high-impact action could proceed without the required human decision, or after approval is no longer valid | No human-approval control is claimed for current M0 |

## Important residual risks

The following are not established as solved by the current public evidence:

- An undiscovered alternate execution path.
- Credentials copied into logs, prompts, environment variables, or agent-accessible storage.
- A compromised host, runtime, authorization component, or protected service.
- Incomplete, altered, or unavailable audit records.
- Integration mistakes that expose a service outside the guarded path.
- Race conditions, replay, duplicate actions, or crash-recovery behavior beyond the specific tests documented elsewhere.
- Material changes to an action after authorization, including changes to target, parameters, or executor identity.
- A stale, revoked, or mis-scoped human approval if a future integration introduces human approval.

## Out of scope for current claims

Guardian Lite does not claim to prevent prompt injection, model deception, malicious administrators, host compromise, or every form of API abuse. It does not replace service-side authentication, least-privilege credentials, monitoring, backups, or incident response.

## Security posture

The project follows a fail-closed design goal: when authorization cannot be established, the protected action should not proceed. The exact behavior must still be verified in each integration and failure mode.

See [Evidence status](EVIDENCE.md) for what has actually been exercised so far.
