# Evidence Status

Last updated: 2026-11-08

This page separates results recorded in a controlled test environment from claims that have not been established. It is a high-level summary; private implementation details and raw internal artifacts are intentionally not published here.

## M0 — controlled runtime checks

M0 was exercised in a controlled local runtime configuration and is now frozen.

| Check | Recorded result | What this supports | What it does not prove |
|---|---|---|---|
| Unauthorized request | `DENY` | The configured path denied the tested unauthorized request | That every unauthorized action in every integration will be denied |
| Direct-access attempt | Blocked | The tested direct path did not reach the protected service | That no alternate route or future misconfiguration can bypass the boundary |
| Invalid service credential | Rejected with HTTP 401 | The protected test service rejected the tested invalid credential | That all credential-handling risks are resolved |
| Approved request | Accepted | The configured approved path could complete the tested request | That every allowed action is safe or every integration is correctly configured |

The M0 runtime setup also constrained the agent's access to the protected service: the agent did not receive the protected service credential, the protected service was not directly exposed to the host, and network access was restricted in the test environment.

These are results from a specific controlled setup, not an independent audit or a production deployment.

## M1-A — credential exposure

M1-A is limited to collecting attack evidence related to credential exposure. The current scope is evidence-only; it does not authorize implementation changes or fixes.

No M1-A result is claimed as complete in this public summary.

## Evidence limitations

- Tests were conducted in a controlled environment.
- The results apply only to the paths and conditions actually exercised.
- No independent third-party assessment or certification is claimed.
- No production deployment or real-world customer protection is claimed.
- The public repository does not contain the implementation, raw test fixtures, or full runtime configuration.

## Reporting a result

Any future evidence entry should identify the tested build or revision, environment, exact test boundary, observed result, and limitations. A test should not be described as passing unless its result is supported by a retained record.
